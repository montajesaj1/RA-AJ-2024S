// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
/**
 * @packageDocumentation
 * @module console-extension
 */
import { ILabStatus, ILayoutRestorer } from '@jupyterlab/application';
import { Dialog, ICommandPalette, IKernelStatusModel, ISanitizer, ISessionContextDialogs, Sanitizer, SessionContextDialogs, showDialog, WidgetTracker } from '@jupyterlab/apputils';
import { IEditorServices, IPositionModel } from '@jupyterlab/codeeditor';
import { ICompletionProviderManager } from '@jupyterlab/completer';
import { ConsolePanel, IConsoleCellExecutor, IConsoleTracker } from '@jupyterlab/console';
import { IDefaultFileBrowser } from '@jupyterlab/filebrowser';
import { ILauncher } from '@jupyterlab/launcher';
import { IMainMenu } from '@jupyterlab/mainmenu';
import { IRenderMimeRegistry } from '@jupyterlab/rendermime';
import { ISettingRegistry } from '@jupyterlab/settingregistry';
import { ITranslator, nullTranslator } from '@jupyterlab/translation';
import { consoleIcon, IFormRendererRegistry, redoIcon, undoIcon } from '@jupyterlab/ui-components';
import { find } from '@lumino/algorithm';
import { JSONExt, UUID } from '@lumino/coreutils';
import { DisposableSet } from '@lumino/disposable';
import foreign from './foreign';
import { cellExecutor } from './cellexecutor';
/**
 * The command IDs used by the console plugin.
 */
var CommandIDs;
(function (CommandIDs) {
    CommandIDs.autoClosingBrackets = 'console:toggle-autoclosing-brackets';
    CommandIDs.create = 'console:create';
    CommandIDs.clear = 'console:clear';
    CommandIDs.runUnforced = 'console:run-unforced';
    CommandIDs.runForced = 'console:run-forced';
    CommandIDs.linebreak = 'console:linebreak';
    CommandIDs.interrupt = 'console:interrupt-kernel';
    CommandIDs.restart = 'console:restart-kernel';
    CommandIDs.closeAndShutdown = 'console:close-and-shutdown';
    CommandIDs.open = 'console:open';
    CommandIDs.inject = 'console:inject';
    CommandIDs.changeKernel = 'console:change-kernel';
    CommandIDs.getKernel = 'console:get-kernel';
    CommandIDs.interactionMode = 'console:interaction-mode';
    CommandIDs.redo = 'console:redo';
    CommandIDs.replaceSelection = 'console:replace-selection';
    CommandIDs.shutdown = 'console:shutdown';
    CommandIDs.undo = 'console:undo';
    CommandIDs.invokeCompleter = 'completer:invoke-console';
    CommandIDs.selectCompleter = 'completer:select-console';
})(CommandIDs || (CommandIDs = {}));
/**
 * The console widget tracker provider.
 */
const tracker = {
    id: '@jupyterlab/console-extension:tracker',
    description: 'Provides the console widget tracker.',
    provides: IConsoleTracker,
    requires: [
        ConsolePanel.IContentFactory,
        IEditorServices,
        IConsoleCellExecutor,
        IRenderMimeRegistry,
        ISettingRegistry
    ],
    optional: [
        ILayoutRestorer,
        IDefaultFileBrowser,
        IMainMenu,
        ICommandPalette,
        ILauncher,
        ILabStatus,
        ISessionContextDialogs,
        IFormRendererRegistry,
        ITranslator
    ],
    activate: activateConsole,
    autoStart: true
};
/**
 * The console widget content factory.
 */
const factory = {
    id: '@jupyterlab/console-extension:factory',
    description: 'Provides the console widget content factory.',
    provides: ConsolePanel.IContentFactory,
    requires: [IEditorServices],
    autoStart: true,
    activate: (app, editorServices) => {
        const editorFactory = editorServices.factoryService.newInlineEditor;
        return new ConsolePanel.ContentFactory({ editorFactory });
    }
};
/**
 * Kernel status indicator.
 */
const kernelStatus = {
    id: '@jupyterlab/console-extension:kernel-status',
    description: 'Adds the console to the kernel status indicator model.',
    autoStart: true,
    requires: [IConsoleTracker, IKernelStatusModel],
    activate: (app, tracker, kernelStatus) => {
        const provider = (widget) => {
            let session = null;
            if (widget && tracker.has(widget)) {
                return widget.sessionContext;
            }
            return session;
        };
        kernelStatus.addSessionProvider(provider);
    }
};
/**
 * Cursor position.
 */
const lineColStatus = {
    id: '@jupyterlab/console-extension:cursor-position',
    description: 'Adds the console to the code editor cursor position model.',
    autoStart: true,
    requires: [IConsoleTracker, IPositionModel],
    activate: (app, tracker, positionModel) => {
        let previousWidget = null;
        const provider = async (widget) => {
            let editor = null;
            if (widget !== previousWidget) {
                previousWidget === null || previousWidget === void 0 ? void 0 : previousWidget.console.promptCellCreated.disconnect(positionModel.update);
                previousWidget = null;
                if (widget && tracker.has(widget)) {
                    widget.console.promptCellCreated.connect(positionModel.update);
                    const promptCell = widget.console.promptCell;
                    editor = null;
                    if (promptCell) {
                        await promptCell.ready;
                        editor = promptCell.editor;
                    }
                    previousWidget = widget;
                }
            }
            else if (widget) {
                const promptCell = widget.console.promptCell;
                editor = null;
                if (promptCell) {
                    await promptCell.ready;
                    editor = promptCell.editor;
                }
            }
            return editor;
        };
        positionModel.addEditorProvider(provider);
    }
};
const completerPlugin = {
    id: '@jupyterlab/console-extension:completer',
    description: 'Adds completion to the console.',
    autoStart: true,
    requires: [IConsoleTracker],
    optional: [ICompletionProviderManager, ITranslator, ISanitizer],
    activate: activateConsoleCompleterService
};
/**
 * Export the plugins as the default.
 */
const plugins = [
    factory,
    tracker,
    foreign,
    kernelStatus,
    lineColStatus,
    completerPlugin,
    cellExecutor
];
export default plugins;
/**
 * Activate the console extension.
 */
async function activateConsole(app, contentFactory, editorServices, executor, rendermime, settingRegistry, restorer, filebrowser, mainMenu, palette, launcher, status, sessionDialogs_, formRegistry, translator_) {
    var _a;
    const translator = translator_ !== null && translator_ !== void 0 ? translator_ : nullTranslator;
    const trans = translator.load('jupyterlab');
    const manager = app.serviceManager;
    const { commands, shell } = app;
    const category = trans.__('Console');
    const sessionDialogs = sessionDialogs_ !== null && sessionDialogs_ !== void 0 ? sessionDialogs_ : new SessionContextDialogs({ translator });
    // Create a widget tracker for all console panels.
    const tracker = new WidgetTracker({
        namespace: 'console'
    });
    // Handle state restoration.
    if (restorer) {
        void restorer.restore(tracker, {
            command: CommandIDs.create,
            args: widget => {
                const { path, name, kernelPreference } = widget.console.sessionContext;
                return {
                    path,
                    name,
                    kernelPreference: { ...kernelPreference }
                };
            },
            name: widget => { var _a; return (_a = widget.console.sessionContext.path) !== null && _a !== void 0 ? _a : UUID.uuid4(); },
            when: manager.ready
        });
    }
    // Add a launcher item if the launcher is available.
    if (launcher) {
        void manager.ready.then(() => {
            let disposables = null;
            const onSpecsChanged = () => {
                if (disposables) {
                    disposables.dispose();
                    disposables = null;
                }
                const specs = manager.kernelspecs.specs;
                if (!specs) {
                    return;
                }
                disposables = new DisposableSet();
                for (const name in specs.kernelspecs) {
                    const rank = name === specs.default ? 0 : Infinity;
                    const spec = specs.kernelspecs[name];
                    const kernelIconUrl = spec.resources['logo-svg'] || spec.resources['logo-64x64'];
                    disposables.add(launcher.add({
                        command: CommandIDs.create,
                        args: { isLauncher: true, kernelPreference: { name } },
                        category: trans.__('Console'),
                        rank,
                        kernelIconUrl,
                        metadata: {
                            kernel: JSONExt.deepCopy(spec.metadata || {})
                        }
                    }));
                }
            };
            onSpecsChanged();
            manager.kernelspecs.specsChanged.connect(onSpecsChanged);
        });
    }
    /**
     * Create a console for a given path.
     */
    async function createConsole(options) {
        var _a, _b;
        await manager.ready;
        const panel = new ConsolePanel({
            manager,
            contentFactory,
            mimeTypeService: editorServices.mimeTypeService,
            rendermime,
            sessionDialogs,
            executor,
            translator,
            setBusy: (_a = (status && (() => status.setBusy()))) !== null && _a !== void 0 ? _a : undefined,
            ...options
        });
        const interactionMode = (await settingRegistry.get('@jupyterlab/console-extension:tracker', 'interactionMode')).composite;
        panel.console.node.dataset.jpInteractionMode = interactionMode;
        // Add the console panel to the tracker. We want the panel to show up before
        // any kernel selection dialog, so we do not await panel.session.ready;
        await tracker.add(panel);
        panel.sessionContext.propertyChanged.connect(() => {
            void tracker.save(panel);
        });
        shell.add(panel, 'main', {
            ref: options.ref,
            mode: options.insertMode,
            activate: options.activate !== false,
            type: (_b = options.type) !== null && _b !== void 0 ? _b : 'Console'
        });
        return panel;
    }
    const pluginId = '@jupyterlab/console-extension:tracker';
    let interactionMode;
    let promptCellConfig = {};
    /**
     * Update settings for one console or all consoles.
     *
     * @param panel Optional - single console to update.
     */
    async function updateSettings(panel) {
        interactionMode = (await settingRegistry.get(pluginId, 'interactionMode'))
            .composite;
        promptCellConfig = (await settingRegistry.get(pluginId, 'promptCellConfig'))
            .composite;
        const setWidgetOptions = (widget) => {
            var _a, _b;
            widget.console.node.dataset.jpInteractionMode = interactionMode;
            // Update future promptCells
            widget.console.editorConfig = promptCellConfig;
            // Update promptCell already on screen
            (_b = (_a = widget.console.promptCell) === null || _a === void 0 ? void 0 : _a.editor) === null || _b === void 0 ? void 0 : _b.setOptions(promptCellConfig);
        };
        if (panel) {
            setWidgetOptions(panel);
        }
        else {
            tracker.forEach(setWidgetOptions);
        }
    }
    settingRegistry.pluginChanged.connect((sender, plugin) => {
        if (plugin === pluginId) {
            void updateSettings();
        }
    });
    await updateSettings();
    if (formRegistry) {
        const CMRenderer = formRegistry.getRenderer('@jupyterlab/codemirror-extension:plugin.defaultConfig');
        if (CMRenderer) {
            formRegistry.addRenderer('@jupyterlab/console-extension:tracker.promptCellConfig', CMRenderer);
        }
    }
    // Apply settings when a console is created.
    tracker.widgetAdded.connect((sender, panel) => {
        void updateSettings(panel);
    });
    commands.addCommand(CommandIDs.autoClosingBrackets, {
        execute: async (args) => {
            var _a;
            promptCellConfig.autoClosingBrackets = !!((_a = args['force']) !== null && _a !== void 0 ? _a : !promptCellConfig.autoClosingBrackets);
            await settingRegistry.set(pluginId, 'promptCellConfig', promptCellConfig);
        },
        label: trans.__('Auto Close Brackets for Code Console Prompt'),
        isToggled: () => promptCellConfig.autoClosingBrackets
    });
    /**
     * Whether there is an active console.
     */
    function isEnabled() {
        return (tracker.currentWidget !== null &&
            tracker.currentWidget === shell.currentWidget);
    }
    commands.addCommand(CommandIDs.open, {
        label: trans.__('Open a console for the provided `path`.'),
        execute: (args) => {
            const path = args['path'];
            const widget = tracker.find(value => {
                var _a;
                return ((_a = value.console.sessionContext.session) === null || _a === void 0 ? void 0 : _a.path) === path;
            });
            if (widget) {
                if (args.activate !== false) {
                    shell.activateById(widget.id);
                }
                return widget;
            }
            else {
                return manager.ready.then(() => {
                    const model = find(manager.sessions.running(), item => {
                        return item.path === path;
                    });
                    if (model) {
                        return createConsole(args);
                    }
                    return Promise.reject(`No running kernel session for path: ${path}`);
                });
            }
        }
    });
    commands.addCommand(CommandIDs.create, {
        label: args => {
            var _a, _b, _c, _d;
            if (args['isPalette']) {
                return trans.__('New Console');
            }
            else if (args['isLauncher'] && args['kernelPreference']) {
                const kernelPreference = args['kernelPreference'];
                // TODO: Lumino command functions should probably be allowed to return undefined?
                return ((_d = (_c = (_b = (_a = manager.kernelspecs) === null || _a === void 0 ? void 0 : _a.specs) === null || _b === void 0 ? void 0 : _b.kernelspecs[kernelPreference.name || '']) === null || _c === void 0 ? void 0 : _c.display_name) !== null && _d !== void 0 ? _d : '');
            }
            return trans.__('Console');
        },
        icon: args => (args['isPalette'] ? undefined : consoleIcon),
        execute: args => {
            var _a;
            const basePath = (_a = (args['basePath'] ||
                args['cwd'] ||
                (filebrowser === null || filebrowser === void 0 ? void 0 : filebrowser.model.path))) !== null && _a !== void 0 ? _a : '';
            return createConsole({ basePath, ...args });
        }
    });
    // Get the current widget and activate unless the args specify otherwise.
    function getCurrent(args) {
        const widget = tracker.currentWidget;
        const activate = args['activate'] !== false;
        if (activate && widget) {
            shell.activateById(widget.id);
        }
        return widget !== null && widget !== void 0 ? widget : null;
    }
    /**
     * Add undo command
     */
    commands.addCommand(CommandIDs.undo, {
        execute: args => {
            var _a;
            const current = getCurrent(args);
            if (!current) {
                return;
            }
            const editor = (_a = current.console.promptCell) === null || _a === void 0 ? void 0 : _a.editor;
            if (!editor) {
                return;
            }
            editor.undo();
        },
        isEnabled: args => {
            var _a, _b, _c;
            if (!isEnabled()) {
                return false;
            }
            const editor = (_c = (_b = (_a = getCurrent(args)) === null || _a === void 0 ? void 0 : _a.console) === null || _b === void 0 ? void 0 : _b.promptCell) === null || _c === void 0 ? void 0 : _c.editor;
            if (!editor) {
                return false;
            }
            return editor.model.sharedModel.canUndo();
        },
        icon: undoIcon.bindprops({ stylesheet: 'menuItem' }),
        label: trans.__('Undo')
    });
    /**
     * Add redo command
     */
    commands.addCommand(CommandIDs.redo, {
        execute: args => {
            var _a;
            const current = getCurrent(args);
            if (!current) {
                return;
            }
            const editor = (_a = current.console.promptCell) === null || _a === void 0 ? void 0 : _a.editor;
            if (!editor) {
                return;
            }
            editor.redo();
        },
        isEnabled: args => {
            var _a, _b, _c;
            if (!isEnabled()) {
                return false;
            }
            const editor = (_c = (_b = (_a = getCurrent(args)) === null || _a === void 0 ? void 0 : _a.console) === null || _b === void 0 ? void 0 : _b.promptCell) === null || _c === void 0 ? void 0 : _c.editor;
            if (!editor) {
                return false;
            }
            return editor.model.sharedModel.canRedo();
        },
        icon: redoIcon.bindprops({ stylesheet: 'menuItem' }),
        label: trans.__('Redo')
    });
    commands.addCommand(CommandIDs.clear, {
        label: trans.__('Clear Console Cells'),
        execute: args => {
            const current = getCurrent(args);
            if (!current) {
                return;
            }
            current.console.clear();
        },
        isEnabled
    });
    commands.addCommand(CommandIDs.runUnforced, {
        label: trans.__('Run Cell (unforced)'),
        execute: args => {
            const current = getCurrent(args);
            if (!current) {
                return;
            }
            return current.console.execute();
        },
        isEnabled
    });
    commands.addCommand(CommandIDs.runForced, {
        label: trans.__('Run Cell (forced)'),
        execute: args => {
            const current = getCurrent(args);
            if (!current) {
                return;
            }
            return current.console.execute(true);
        },
        isEnabled
    });
    commands.addCommand(CommandIDs.linebreak, {
        label: trans.__('Insert Line Break'),
        execute: args => {
            const current = getCurrent(args);
            if (!current) {
                return;
            }
            current.console.insertLinebreak();
        },
        isEnabled
    });
    commands.addCommand(CommandIDs.replaceSelection, {
        label: trans.__('Replace Selection in Console'),
        execute: args => {
            const current = getCurrent(args);
            if (!current) {
                return;
            }
            const text = args['text'] || '';
            current.console.replaceSelection(text);
        },
        isEnabled
    });
    commands.addCommand(CommandIDs.interrupt, {
        label: trans.__('Interrupt Kernel'),
        execute: args => {
            var _a;
            const current = getCurrent(args);
            if (!current) {
                return;
            }
            const kernel = (_a = current.console.sessionContext.session) === null || _a === void 0 ? void 0 : _a.kernel;
            if (kernel) {
                return kernel.interrupt();
            }
        },
        isEnabled
    });
    commands.addCommand(CommandIDs.restart, {
        label: trans.__('Restart Kernel…'),
        execute: args => {
            const current = getCurrent(args);
            if (!current) {
                return;
            }
            return sessionDialogs.restart(current.console.sessionContext);
        },
        isEnabled
    });
    commands.addCommand(CommandIDs.shutdown, {
        label: trans.__('Shut Down'),
        execute: args => {
            const current = getCurrent(args);
            if (!current) {
                return;
            }
            return current.console.sessionContext.shutdown();
        }
    });
    commands.addCommand(CommandIDs.closeAndShutdown, {
        label: trans.__('Close and Shut Down…'),
        execute: args => {
            const current = getCurrent(args);
            if (!current) {
                return;
            }
            return showDialog({
                title: trans.__('Shut down the console?'),
                body: trans.__('Are you sure you want to close "%1"?', current.title.label),
                buttons: [
                    Dialog.cancelButton({
                        ariaLabel: trans.__('Cancel console Shut Down')
                    }),
                    Dialog.warnButton({
                        ariaLabel: trans.__('Confirm console Shut Down')
                    })
                ]
            }).then(result => {
                if (result.button.accept) {
                    return commands
                        .execute(CommandIDs.shutdown, { activate: false })
                        .then(() => {
                        current.dispose();
                        return true;
                    });
                }
                else {
                    return false;
                }
            });
        },
        isEnabled
    });
    commands.addCommand(CommandIDs.inject, {
        label: trans.__('Inject some code in a console.'),
        execute: args => {
            const path = args['path'];
            tracker.find(widget => {
                var _a;
                if (((_a = widget.console.sessionContext.session) === null || _a === void 0 ? void 0 : _a.path) === path) {
                    if (args['activate'] !== false) {
                        shell.activateById(widget.id);
                    }
                    void widget.console.inject(args['code'], args['metadata']);
                    return true;
                }
                return false;
            });
        },
        isEnabled
    });
    commands.addCommand(CommandIDs.changeKernel, {
        label: trans.__('Change Kernel…'),
        execute: args => {
            const current = getCurrent(args);
            if (!current) {
                return;
            }
            return sessionDialogs.selectKernel(current.console.sessionContext);
        },
        isEnabled
    });
    commands.addCommand(CommandIDs.getKernel, {
        label: trans.__('Get Kernel'),
        execute: args => {
            var _a;
            const current = getCurrent({ activate: false, ...args });
            if (!current) {
                return;
            }
            return (_a = current.sessionContext.session) === null || _a === void 0 ? void 0 : _a.kernel;
        },
        isEnabled
    });
    // All commands with isEnabled defined directly or in a semantic commands
    const skip = [CommandIDs.create];
    const notify = () => {
        Object.values(CommandIDs)
            .filter(id => !skip.includes(id))
            .forEach(id => app.commands.notifyCommandChanged(id));
    };
    tracker.currentChanged.connect(notify);
    (_a = shell.currentChanged) === null || _a === void 0 ? void 0 : _a.connect(notify);
    if (palette) {
        // Add command palette items
        [
            CommandIDs.create,
            CommandIDs.linebreak,
            CommandIDs.clear,
            CommandIDs.runUnforced,
            CommandIDs.runForced,
            CommandIDs.restart,
            CommandIDs.interrupt,
            CommandIDs.changeKernel,
            CommandIDs.closeAndShutdown
        ].forEach(command => {
            palette.addItem({ command, category, args: { isPalette: true } });
        });
    }
    if (mainMenu) {
        // Add a close and shutdown command to the file menu.
        mainMenu.fileMenu.closeAndCleaners.add({
            id: CommandIDs.closeAndShutdown,
            isEnabled
        });
        // Add a kernel user to the Kernel menu
        mainMenu.kernelMenu.kernelUsers.changeKernel.add({
            id: CommandIDs.changeKernel,
            isEnabled
        });
        mainMenu.kernelMenu.kernelUsers.clearWidget.add({
            id: CommandIDs.clear,
            isEnabled
        });
        mainMenu.kernelMenu.kernelUsers.interruptKernel.add({
            id: CommandIDs.interrupt,
            isEnabled
        });
        mainMenu.kernelMenu.kernelUsers.restartKernel.add({
            id: CommandIDs.restart,
            isEnabled
        });
        mainMenu.kernelMenu.kernelUsers.shutdownKernel.add({
            id: CommandIDs.shutdown,
            isEnabled
        });
        // Add a code runner to the Run menu.
        mainMenu.runMenu.codeRunners.run.add({
            id: CommandIDs.runForced,
            isEnabled
        });
        // Add a clearer to the edit menu
        mainMenu.editMenu.clearers.clearCurrent.add({
            id: CommandIDs.clear,
            isEnabled
        });
        // Add undo/redo hooks to the edit menu.
        mainMenu.editMenu.undoers.redo.add({
            id: CommandIDs.redo,
            isEnabled
        });
        mainMenu.editMenu.undoers.undo.add({
            id: CommandIDs.undo,
            isEnabled
        });
        // Add kernel information to the application help menu.
        mainMenu.helpMenu.getKernel.add({
            id: CommandIDs.getKernel,
            isEnabled
        });
    }
    // For backwards compatibility and clarity, we explicitly label the run
    // keystroke with the actual effected change, rather than the generic
    // "notebook" or "terminal" interaction mode. When this interaction mode
    // affects more than just the run keystroke, we can make this menu title more
    // generic.
    const runShortcutTitles = {
        notebook: trans.__('Execute with Shift+Enter'),
        terminal: trans.__('Execute with Enter')
    };
    // Add the execute keystroke setting submenu.
    commands.addCommand(CommandIDs.interactionMode, {
        label: args => {
            var _a;
            return (_a = runShortcutTitles[args['interactionMode']]) !== null && _a !== void 0 ? _a : 'Set the console interaction mode.';
        },
        execute: async (args) => {
            const key = 'keyMap';
            try {
                await settingRegistry.set(pluginId, 'interactionMode', args['interactionMode']);
            }
            catch (reason) {
                console.error(`Failed to set ${pluginId}:${key} - ${reason.message}`);
            }
        },
        isToggled: args => args['interactionMode'] === interactionMode
    });
    return tracker;
}
/**
 * Activate the completer service for console.
 */
function activateConsoleCompleterService(app, consoles, manager, translator, appSanitizer) {
    if (!manager) {
        return;
    }
    const trans = (translator !== null && translator !== void 0 ? translator : nullTranslator).load('jupyterlab');
    const sanitizer = appSanitizer !== null && appSanitizer !== void 0 ? appSanitizer : new Sanitizer();
    app.commands.addCommand(CommandIDs.invokeCompleter, {
        label: trans.__('Display the completion helper.'),
        execute: () => {
            const id = consoles.currentWidget && consoles.currentWidget.id;
            if (id) {
                return manager.invoke(id);
            }
        }
    });
    app.commands.addCommand(CommandIDs.selectCompleter, {
        label: trans.__('Select the completion suggestion.'),
        execute: () => {
            const id = consoles.currentWidget && consoles.currentWidget.id;
            if (id) {
                return manager.select(id);
            }
        }
    });
    app.commands.addKeyBinding({
        command: CommandIDs.selectCompleter,
        keys: ['Enter'],
        selector: '.jp-ConsolePanel .jp-mod-completer-active'
    });
    const updateCompleter = async (_, consolePanel) => {
        var _a, _b;
        const completerContext = {
            editor: (_b = (_a = consolePanel.console.promptCell) === null || _a === void 0 ? void 0 : _a.editor) !== null && _b !== void 0 ? _b : null,
            session: consolePanel.console.sessionContext.session,
            widget: consolePanel
        };
        await manager.updateCompleter(completerContext);
        consolePanel.console.promptCellCreated.connect((codeConsole, cell) => {
            const newContext = {
                editor: cell.editor,
                session: codeConsole.sessionContext.session,
                widget: consolePanel,
                sanitzer: sanitizer
            };
            manager.updateCompleter(newContext).catch(console.error);
        });
        consolePanel.console.sessionContext.sessionChanged.connect(() => {
            var _a, _b;
            const newContext = {
                editor: (_b = (_a = consolePanel.console.promptCell) === null || _a === void 0 ? void 0 : _a.editor) !== null && _b !== void 0 ? _b : null,
                session: consolePanel.console.sessionContext.session,
                widget: consolePanel,
                sanitizer: sanitizer
            };
            manager.updateCompleter(newContext).catch(console.error);
        });
    };
    consoles.widgetAdded.connect(updateCompleter);
    manager.activeProvidersChanged.connect(() => {
        consoles.forEach(consoleWidget => {
            updateCompleter(undefined, consoleWidget).catch(e => console.error(e));
        });
    });
}
//# sourceMappingURL=index.js.map