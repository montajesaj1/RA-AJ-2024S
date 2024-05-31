// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
import { INotebookCellExecutor, runCell } from '@jupyterlab/notebook';
/**
 * Notebook cell executor plugin.
 */
export const cellExecutor = {
    id: '@jupyterlab/notebook-extension:cell-executor',
    description: 'Provides the notebook cell executor.',
    autoStart: true,
    provides: INotebookCellExecutor,
    activate: () => {
        return Object.freeze({ runCell });
    }
};
//# sourceMappingURL=cellexecutor.js.map