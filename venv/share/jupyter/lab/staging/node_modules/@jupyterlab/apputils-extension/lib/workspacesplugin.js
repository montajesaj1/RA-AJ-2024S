// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
import { IRouter, JupyterFrontEnd } from '@jupyterlab/application';
import { URLExt } from '@jupyterlab/coreutils';
import { ABCWidgetFactory, DocumentWidget } from '@jupyterlab/docregistry';
import { IStateDB } from '@jupyterlab/statedb';
import { IWorkspaceCommands } from '@jupyterlab/workspaces';
import { ITranslator, nullTranslator } from '@jupyterlab/translation';
import { Widget } from '@lumino/widgets';
const WORKSPACE_NAME = 'jupyterlab-workspace';
const WORKSPACE_EXT = '.' + WORKSPACE_NAME;
const LAST_SAVE_ID = 'workspace-ui:lastSave';
const ICON_NAME = 'jp-JupyterIcon';
/**
 * The workspace MIME renderer.
 */
export const workspacesPlugin = {
    id: '@jupyterlab/apputils-extension:workspaces',
    description: 'Add workspace file type.',
    autoStart: true,
    requires: [IStateDB, ITranslator, JupyterFrontEnd.IPaths],
    optional: [IRouter, IWorkspaceCommands],
    activate: (app, state, translator, paths, router, workspaceCommands) => {
        // The workspace factory creates dummy widgets to load a new workspace.
        const factory = new Private.WorkspaceFactory({
            workspaces: app.serviceManager.workspaces,
            state,
            translator,
            open: async (id) => {
                if (workspaceCommands) {
                    await app.commands.execute(workspaceCommands.open, { workspace: id });
                }
                else {
                    const workspacesBase = URLExt.join(paths.urls.app, 'workspaces');
                    const url = URLExt.join(workspacesBase, id);
                    if (!url.startsWith(workspacesBase)) {
                        throw new Error('Can only be used for workspaces');
                    }
                    if (router) {
                        router.navigate(url, { hard: true });
                    }
                    else {
                        document.location.href = url;
                    }
                }
            }
        });
        const trans = translator.load('jupyterlab');
        app.docRegistry.addFileType({
            name: WORKSPACE_NAME,
            contentType: 'file',
            fileFormat: 'text',
            displayName: trans.__('JupyterLab Workspace File'),
            extensions: [WORKSPACE_EXT],
            mimeTypes: ['text/json'],
            iconClass: ICON_NAME
        });
        app.docRegistry.addWidgetFactory(factory);
    }
};
var Private;
(function (Private) {
    /**
     * This widget factory is used to handle double click on workspace
     */
    class WorkspaceFactory extends ABCWidgetFactory {
        /**
         * Construct a widget factory that uploads a workspace and navigates to it.
         *
         * @param options - The instantiation options for a `WorkspaceFactory`.
         */
        constructor(options) {
            const trans = (options.translator || nullTranslator).load('jupyterlab');
            super({
                name: 'Workspace loader',
                label: trans.__('Workspace loader'),
                fileTypes: [WORKSPACE_NAME],
                defaultFor: [WORKSPACE_NAME],
                readOnly: true
            });
            this._state = options.state;
            this._workspaces = options.workspaces;
            this._open = options.open;
        }
        /**
         * Loads the workspace into load, and jump to it
         * @param context This is used to query the workspace content
         */
        createNewWidget(context) {
            // Save a file's contents as a workspace and navigate to that workspace.
            void context.ready.then(async () => {
                const file = context.model;
                const workspace = file.toJSON();
                const path = context.path;
                const id = workspace.metadata.id;
                // Save the file contents as a workspace.
                await this._workspaces.save(id, workspace);
                // Save last save location for the save command.
                await this._state.save(LAST_SAVE_ID, path);
                // Navigate to new workspace.
                await this._open(id);
            });
            return dummyWidget(context);
        }
    }
    Private.WorkspaceFactory = WorkspaceFactory;
    /**
     * Returns a dummy widget with disposed content that doesn't render in the UI.
     *
     * @param context - The file context.
     */
    function dummyWidget(context) {
        const widget = new DocumentWidget({ content: new Widget(), context });
        widget.content.dispose();
        return widget;
    }
})(Private || (Private = {}));
//# sourceMappingURL=workspacesplugin.js.map