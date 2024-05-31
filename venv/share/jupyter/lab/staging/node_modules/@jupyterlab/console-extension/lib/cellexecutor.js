// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
import { IConsoleCellExecutor, runCell } from '@jupyterlab/console';
/**
 * Console cell executor plugin.
 */
export const cellExecutor = {
    id: '@jupyterlab/console-extension:cell-executor',
    description: 'Provides the console cell executor.',
    autoStart: true,
    provides: IConsoleCellExecutor,
    activate: () => {
        return Object.freeze({ runCell });
    }
};
//# sourceMappingURL=cellexecutor.js.map