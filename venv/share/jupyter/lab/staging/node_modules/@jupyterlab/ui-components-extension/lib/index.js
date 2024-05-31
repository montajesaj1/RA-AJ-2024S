// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
/**
 * @packageDocumentation
 * @module ui-components-extension
 */
import { FormRendererRegistry, IFormRendererRegistry, ILabIconManager } from '@jupyterlab/ui-components';
/**
 * Placeholder for future extension that will provide an icon manager class
 * to assist with overriding/replacing particular sets of icons
 */
const labiconManager = {
    id: '@jupyterlab/ui-components-extension:labicon-manager',
    description: 'Provides the icon manager.',
    provides: ILabIconManager,
    autoStart: true,
    activate: (app) => {
        return Object.create(null);
    }
};
/**
 * Sets up the renderer registry to be used by the FormEditor component.
 */
const formRendererRegistryPlugin = {
    id: '@jupyterlab/ui-components-extension:form-renderer-registry',
    description: 'Provides the settings form renderer registry.',
    provides: IFormRendererRegistry,
    autoStart: true,
    activate: (app) => {
        const formRendererRegistry = new FormRendererRegistry();
        return formRendererRegistry;
    }
};
export default [labiconManager, formRendererRegistryPlugin];
//# sourceMappingURL=index.js.map