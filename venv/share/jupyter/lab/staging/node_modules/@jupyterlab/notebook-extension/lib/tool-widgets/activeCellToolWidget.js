/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */
import React from 'react';
import { NotebookTools } from '@jupyterlab/notebook';
import { PanelLayout, Widget } from '@lumino/widgets';
import { InputPrompt } from '@jupyterlab/cells';
import { Debouncer } from '@lumino/polling';
/**
 * The class name added to the ActiveCellTool.
 */
const ACTIVE_CELL_TOOL_CLASS = 'jp-ActiveCellTool';
/**
 * The class name added to the ActiveCellTool content.
 */
const ACTIVE_CELL_TOOL_CONTENT_CLASS = 'jp-ActiveCellTool-Content';
/**
 * The class name added to the ActiveCellTool cell content.
 */
const ACTIVE_CELL_TOOL_CELL_CONTENT_CLASS = 'jp-ActiveCellTool-CellContent';
/**
 * The active cell field, displaying the first line and execution count of the active cell.
 *
 * ## Note
 * This field does not work as other metadata form fields, as it does not update metadata.
 */
export class ActiveCellTool extends NotebookTools.Tool {
    constructor(options) {
        super();
        const { languages } = options;
        this._tracker = options.tracker;
        this.addClass(ACTIVE_CELL_TOOL_CLASS);
        this.layout = new PanelLayout();
        this._inputPrompt = new InputPrompt();
        this.layout.addWidget(this._inputPrompt);
        // First code line container
        const node = document.createElement('div');
        node.classList.add(ACTIVE_CELL_TOOL_CONTENT_CLASS);
        const container = node.appendChild(document.createElement('div'));
        const editor = container.appendChild(document.createElement('pre'));
        container.className = ACTIVE_CELL_TOOL_CELL_CONTENT_CLASS;
        this._editorEl = editor;
        this.layout.addWidget(new Widget({ node }));
        const update = async () => {
            var _a, _b;
            this._editorEl.innerHTML = '';
            if (((_a = this._cellModel) === null || _a === void 0 ? void 0 : _a.type) === 'code') {
                this._inputPrompt.executionCount = `${(_b = this._cellModel.executionCount) !== null && _b !== void 0 ? _b : ''}`;
                this._inputPrompt.show();
            }
            else {
                this._inputPrompt.executionCount = null;
                this._inputPrompt.hide();
            }
            if (this._cellModel) {
                await languages.highlight(this._cellModel.sharedModel.getSource().split('\n')[0], languages.findByMIME(this._cellModel.mimeType), this._editorEl);
            }
        };
        this._refreshDebouncer = new Debouncer(update, 150);
    }
    render(props) {
        var _a, _b;
        const activeCell = this._tracker.activeCell;
        if (activeCell)
            this._cellModel = (activeCell === null || activeCell === void 0 ? void 0 : activeCell.model) || null;
        ((_a = this._cellModel) === null || _a === void 0 ? void 0 : _a.sharedModel).changed.connect(this.refresh, this);
        (_b = this._cellModel) === null || _b === void 0 ? void 0 : _b.mimeTypeChanged.connect(this.refresh, this);
        this.refresh()
            .then(() => undefined)
            .catch(() => undefined);
        return React.createElement("div", { ref: ref => ref === null || ref === void 0 ? void 0 : ref.appendChild(this.node) });
    }
    async refresh() {
        await this._refreshDebouncer.invoke();
    }
}
//# sourceMappingURL=activeCellToolWidget.js.map