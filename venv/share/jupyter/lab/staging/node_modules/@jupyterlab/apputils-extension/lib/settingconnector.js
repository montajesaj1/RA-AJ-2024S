/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */
import { PageConfig } from '@jupyterlab/coreutils';
import { DataConnector } from '@jupyterlab/statedb';
import { Throttler } from '@lumino/polling';
/**
 * A data connector for fetching settings.
 *
 * #### Notes
 * This connector adds a query parameter to the base services setting manager.
 */
export class SettingConnector extends DataConnector {
    constructor(connector) {
        super();
        this._throttlers = Object.create(null);
        this._connector = connector;
    }
    /**
     * Fetch settings for a plugin.
     * @param id - The plugin ID
     *
     * #### Notes
     * The REST API requests are throttled at one request per plugin per 100ms.
     */
    fetch(id) {
        const throttlers = this._throttlers;
        if (!(id in throttlers)) {
            throttlers[id] = new Throttler(() => this._connector.fetch(id), 100);
        }
        return throttlers[id].invoke();
    }
    async list(query = 'all') {
        const { isDisabled } = PageConfig.Extension;
        const { ids, values } = await this._connector.list(query === 'ids' ? 'ids' : undefined);
        if (query === 'all') {
            return { ids, values };
        }
        if (query === 'ids') {
            return { ids };
        }
        return {
            ids: ids.filter(id => !isDisabled(id)),
            values: values.filter(({ id }) => !isDisabled(id))
        };
    }
    async save(id, raw) {
        await this._connector.save(id, raw);
    }
}
//# sourceMappingURL=settingconnector.js.map