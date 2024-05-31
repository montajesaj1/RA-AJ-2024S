import { FieldProps } from '@rjsf/utils';
import { IEditorLanguageRegistry } from '@jupyterlab/codemirror';
import { INotebookTracker, NotebookTools } from '@jupyterlab/notebook';
declare namespace Private {
    /**
     * Custom active cell field options.
     */
    interface IOptions {
        /**
         * The tracker to the notebook panel.
         */
        tracker: INotebookTracker;
        /**
         * Editor languages registry
         */
        languages: IEditorLanguageRegistry;
    }
}
/**
 * The active cell field, displaying the first line and execution count of the active cell.
 *
 * ## Note
 * This field does not work as other metadata form fields, as it does not update metadata.
 */
export declare class ActiveCellTool extends NotebookTools.Tool {
    constructor(options: Private.IOptions);
    render(props: FieldProps): JSX.Element;
    private refresh;
    private _tracker;
    private _cellModel;
    private _refreshDebouncer;
    private _editorEl;
    private _inputPrompt;
}
export {};
