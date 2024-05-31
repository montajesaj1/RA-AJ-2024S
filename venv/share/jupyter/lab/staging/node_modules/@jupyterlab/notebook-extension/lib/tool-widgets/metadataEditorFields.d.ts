import { FieldProps } from '@rjsf/utils';
import { INotebookTracker, NotebookTools } from '@jupyterlab/notebook';
import { ITranslator } from '@jupyterlab/translation';
import { CodeEditor } from '@jupyterlab/codeeditor';
declare namespace Private {
    /**
     * Custom metadata field options.
     */
    interface IOptions {
        /**
         * The editor factory used by the tool.
         */
        editorFactory: CodeEditor.Factory;
        /**
         * The tracker to the notebook panel.
         */
        tracker: INotebookTracker;
        /**
         * The label of the JSON editor.
         */
        label?: string;
        /**
         * Language translator.
         */
        translator?: ITranslator;
    }
}
/**
 * The cell metadata field.
 *
 * ## Note
 * This field does not work as other metadata form fields, as it does not use RJSF to update metadata.
 * It extends the MetadataEditorTool which updates itself the metadata.
 * It only renders the node of MetadataEditorTool in a React element instead of displaying a RJSF field.
 */
export declare class CellMetadataField extends NotebookTools.MetadataEditorTool {
    constructor(options: Private.IOptions);
    private _onSourceChanged;
    render(props: FieldProps): JSX.Element;
    private _tracker;
}
/**
 * The notebook metadata field.
 *
 * ## Note
 * This field does not work as other metadata form fields, as it does not use RJSF to update metadata.
 * It extends the MetadataEditorTool which updates itself the metadata.
 * It only renders the node of MetadataEditorTool in a React element instead of displaying a RJSF field.
 */
export declare class NotebookMetadataField extends NotebookTools.MetadataEditorTool {
    constructor(options: Private.IOptions);
    private _onSourceChanged;
    render(props: FieldProps): JSX.Element;
    private _tracker;
}
export {};
