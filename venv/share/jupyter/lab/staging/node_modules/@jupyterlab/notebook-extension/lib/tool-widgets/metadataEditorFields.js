/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */
import React from 'react';
import { NotebookTools } from '@jupyterlab/notebook';
import { ObservableJSON } from '@jupyterlab/observables';
const CELL_METADATA_EDITOR_CLASS = 'jp-CellMetadataEditor';
const NOTEBOOK_METADATA_EDITOR_CLASS = 'jp-NotebookMetadataEditor';
/**
 * The cell metadata field.
 *
 * ## Note
 * This field does not work as other metadata form fields, as it does not use RJSF to update metadata.
 * It extends the MetadataEditorTool which updates itself the metadata.
 * It only renders the node of MetadataEditorTool in a React element instead of displaying a RJSF field.
 */
export class CellMetadataField extends NotebookTools.MetadataEditorTool {
    constructor(options) {
        super(options);
        this._tracker = options.tracker;
        this.editor.editorHostNode.addEventListener('blur', this.editor, true);
        this.editor.editorHostNode.addEventListener('click', this.editor, true);
        this.editor.headerNode.addEventListener('click', this.editor);
    }
    _onSourceChanged() {
        var _a;
        if (this.editor.source) {
            (_a = this._tracker.activeCell) === null || _a === void 0 ? void 0 : _a.model.sharedModel.setMetadata(this.editor.source.toJSON());
        }
    }
    render(props) {
        var _a;
        const cell = this._tracker.activeCell;
        this.editor.source = cell
            ? new ObservableJSON({ values: cell.model.metadata })
            : null;
        (_a = this.editor.source) === null || _a === void 0 ? void 0 : _a.changed.connect(this._onSourceChanged, this);
        return (React.createElement("div", { className: CELL_METADATA_EDITOR_CLASS },
            React.createElement("div", { ref: ref => ref === null || ref === void 0 ? void 0 : ref.appendChild(this.node) })));
    }
}
/**
 * The notebook metadata field.
 *
 * ## Note
 * This field does not work as other metadata form fields, as it does not use RJSF to update metadata.
 * It extends the MetadataEditorTool which updates itself the metadata.
 * It only renders the node of MetadataEditorTool in a React element instead of displaying a RJSF field.
 */
export class NotebookMetadataField extends NotebookTools.MetadataEditorTool {
    constructor(options) {
        super(options);
        this._tracker = options.tracker;
        this.editor.editorHostNode.addEventListener('blur', this.editor, true);
        this.editor.editorHostNode.addEventListener('click', this.editor, true);
        this.editor.headerNode.addEventListener('click', this.editor);
    }
    _onSourceChanged() {
        var _a, _b;
        if (this.editor.source) {
            (_b = (_a = this._tracker.currentWidget) === null || _a === void 0 ? void 0 : _a.model) === null || _b === void 0 ? void 0 : _b.sharedModel.setMetadata(this.editor.source.toJSON());
        }
    }
    render(props) {
        var _a, _b;
        const notebook = this._tracker.currentWidget;
        this.editor.source = notebook
            ? new ObservableJSON({ values: (_a = notebook.model) === null || _a === void 0 ? void 0 : _a.metadata })
            : null;
        (_b = this.editor.source) === null || _b === void 0 ? void 0 : _b.changed.connect(this._onSourceChanged, this);
        return (React.createElement("div", { className: NOTEBOOK_METADATA_EDITOR_CLASS },
            React.createElement("div", { ref: ref => ref === null || ref === void 0 ? void 0 : ref.appendChild(this.node) })));
    }
}
//# sourceMappingURL=metadataEditorFields.js.map