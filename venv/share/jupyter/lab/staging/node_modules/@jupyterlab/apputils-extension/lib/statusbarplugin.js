/* -----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/
import { ILabShell } from '@jupyterlab/application';
import { IKernelStatusModel, ISessionContextDialogs, KernelStatus, RunningSessions, SessionContextDialogs } from '@jupyterlab/apputils';
import { IStatusBar } from '@jupyterlab/statusbar';
import { ITranslator, nullTranslator } from '@jupyterlab/translation';
/**
 * A plugin that provides a kernel status item to the status bar.
 */
export const kernelStatus = {
    id: '@jupyterlab/apputils-extension:kernel-status',
    description: 'Provides the kernel status indicator model.',
    autoStart: true,
    requires: [IStatusBar],
    provides: IKernelStatusModel,
    optional: [ISessionContextDialogs, ITranslator, ILabShell],
    activate: (app, statusBar, sessionDialogs_, translator_, labShell) => {
        const translator = translator_ !== null && translator_ !== void 0 ? translator_ : nullTranslator;
        const sessionDialogs = sessionDialogs_ !== null && sessionDialogs_ !== void 0 ? sessionDialogs_ : new SessionContextDialogs({ translator });
        // When the status item is clicked, launch the kernel
        // selection dialog for the current session.
        const changeKernel = async () => {
            if (!item.model.sessionContext) {
                return;
            }
            await sessionDialogs.selectKernel(item.model.sessionContext);
        };
        const changeKernelOnKeyDown = async (event) => {
            if (event.key === 'Enter' ||
                event.key === 'Spacebar' ||
                event.key === ' ') {
                event.preventDefault();
                event.stopPropagation();
                return changeKernel();
            }
        };
        // Create the status item.
        const item = new KernelStatus({ onClick: changeKernel, onKeyDown: changeKernelOnKeyDown }, translator);
        const providers = new Set();
        const addSessionProvider = (provider) => {
            providers.add(provider);
            if (app.shell.currentWidget) {
                updateSession(app.shell, {
                    newValue: app.shell.currentWidget,
                    oldValue: null
                });
            }
        };
        function updateSession(shell, changes) {
            var _a;
            const { oldValue, newValue } = changes;
            // Clean up after the old value if it exists,
            // listen for changes to the title of the activity
            if (oldValue) {
                oldValue.title.changed.disconnect(onTitleChanged);
            }
            item.model.sessionContext =
                (_a = [...providers]
                    .map(provider => provider(changes.newValue))
                    .filter(session => session !== null)[0]) !== null && _a !== void 0 ? _a : null;
            if (newValue && item.model.sessionContext) {
                onTitleChanged(newValue.title);
                newValue.title.changed.connect(onTitleChanged);
            }
        }
        // When the title of the active widget changes, update the label
        // of the hover text.
        const onTitleChanged = (title) => {
            item.model.activityName = title.label;
        };
        if (labShell) {
            labShell.currentChanged.connect(updateSession);
        }
        statusBar.registerStatusItem(kernelStatus.id, {
            priority: 1,
            item,
            align: 'left',
            rank: 1,
            isActive: () => item.model.sessionContext !== null
        });
        return { addSessionProvider };
    }
};
/*
 * A plugin providing running terminals and sessions information
 * to the status bar.
 */
export const runningSessionsStatus = {
    id: '@jupyterlab/apputils-extension:running-sessions-status',
    description: 'Add the running sessions and terminals status bar item.',
    autoStart: true,
    requires: [IStatusBar, ITranslator],
    activate: (app, statusBar, translator) => {
        const item = new RunningSessions({
            onClick: () => app.shell.activateById('jp-running-sessions'),
            onKeyDown: (event) => {
                if (event.key === 'Enter' ||
                    event.key === 'Spacebar' ||
                    event.key === ' ') {
                    event.preventDefault();
                    event.stopPropagation();
                    app.shell.activateById('jp-running-sessions');
                }
            },
            serviceManager: app.serviceManager,
            translator
        });
        item.model.sessions = Array.from(app.serviceManager.sessions.running()).length;
        item.model.terminals = Array.from(app.serviceManager.terminals.running()).length;
        statusBar.registerStatusItem(runningSessionsStatus.id, {
            item,
            align: 'left',
            rank: 0
        });
    }
};
//# sourceMappingURL=statusbarplugin.js.map