/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */
import { IRecentsManager, RecentsManager } from '@jupyterlab/docmanager';
import { ISettingRegistry } from '@jupyterlab/settingregistry';
import { IStateDB } from '@jupyterlab/statedb';
import { ITranslator, nullTranslator } from '@jupyterlab/translation';
/**
 * A namespace for command IDs.
 */
var CommandIDs;
(function (CommandIDs) {
    CommandIDs.clearRecents = 'docmanager:clear-recents';
})(CommandIDs || (CommandIDs = {}));
var PluginIDs;
(function (PluginIDs) {
    PluginIDs.recentsManager = '@jupyterlab/docmanager-extension:recents';
    PluginIDs.reopenClosed = '@jupyterlab/docmanager-extension:reopen-recently-closed';
    PluginIDs.mainPlugin = '@jupyterlab/docmanager-extension:plugin';
})(PluginIDs || (PluginIDs = {}));
export const recentsManagerPlugin = {
    id: PluginIDs.recentsManager,
    description: 'Provides a manager of recently opened and closed documents.',
    autoStart: true,
    requires: [IStateDB],
    optional: [ISettingRegistry, ITranslator],
    provides: IRecentsManager,
    activate: (app, stateDB, settingRegistry, translator) => {
        const { serviceManager } = app;
        const trans = (translator !== null && translator !== void 0 ? translator : nullTranslator).load('jupyterlab');
        // Create the manager
        const recentsManager = new RecentsManager({
            stateDB: stateDB,
            contents: serviceManager.contents
        });
        const updateSettings = (settings) => {
            recentsManager.maximalRecentsLength = settings.get('maxNumberRecents')
                .composite;
        };
        if (settingRegistry) {
            void Promise.all([
                app.restored,
                settingRegistry.load(PluginIDs.mainPlugin)
            ]).then(([_, settings]) => {
                settings.changed.connect(updateSettings);
                updateSettings(settings);
            });
        }
        app.commands.addCommand(CommandIDs.clearRecents, {
            execute: () => {
                recentsManager.clearRecents();
            },
            isEnabled: () => recentsManager.recentlyOpened.length != 0 ||
                recentsManager.recentlyClosed.length != 0,
            label: trans.__('Clear Recent Documents'),
            caption: trans.__('Clear the list of recently opened items.')
        });
        return recentsManager;
    }
};
//# sourceMappingURL=recents.js.map