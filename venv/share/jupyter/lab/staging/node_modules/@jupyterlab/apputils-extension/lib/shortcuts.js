/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */
import { CommandRegistry } from '@lumino/commands';
import { Selector } from '@lumino/domutils';
import * as React from 'react';
import { Dialog, showDialog } from '@jupyterlab/apputils';
/**
 * The class name for each row of ContextShortcutTable
 */
const SHORTCUT_TABLE_ROW_CLASS = 'jp-ContextualShortcut-TableRow';
/**
 * The class name for the last row of ContextShortcutTable
 */
const SHORTCUT_TABLE_LAST_ROW_CLASS = 'jp-ContextualShortcut-TableLastRow';
/**
 * The class name for each item of ContextShortcutTable
 */
const SHORTCUT_TABLE_ITEM_CLASS = 'jp-ContextualShortcut-TableItem';
/**
 * The class name for each button-like symbol representing a key used in a shortcut in the ContextShortcutTable
 */
const SHORTCUT_KEY_CLASS = 'jp-ContextualShortcut-Key';
export function displayShortcuts(options) {
    const { commands, trans, activeElement } = options;
    const elt = activeElement !== null && activeElement !== void 0 ? activeElement : document.activeElement;
    /**
     * Find the distance from the target node to the first matching node.
     *
     * Based on Lumino private function commands.Private.targetDistance
     * This traverses the DOM path from `elt` to the root
     * computes the distance from `elt` to the first node which matches
     * the CSS selector. If no match is found, `-1` is returned.
     *
     * It also stops traversal if the `data-lm-suppress-shortcuts` or
     * `data-p-suppress-shortcuts` attributes are found.
     */
    function formatKeys(keys) {
        const topContainer = [];
        keys.forEach((key, index) => {
            const container = [];
            key.split(' ').forEach((ch, chIndex) => {
                container.push(React.createElement("span", { className: SHORTCUT_KEY_CLASS, key: `ch-${chIndex}` },
                    React.createElement("kbd", null, ch)), React.createElement(React.Fragment, { key: `fragment-${chIndex}` }, " + "));
            });
            topContainer.push(React.createElement("span", { key: `key-${index}` }, container.slice(0, -1)), React.createElement(React.Fragment, { key: `fragment-${index}` }, " + "));
        });
        return React.createElement("span", null, topContainer.slice(0, -1));
    }
    function capitalizeString(str) {
        const capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1);
        return capitalizedStr;
    }
    function formatLabel(b) {
        const label = commands.label(b.command);
        const commandID = b.command.split(':')[1];
        const automaticLabel = commandID.split('-');
        let capitalizedLabel = '';
        for (let i = 0; i < automaticLabel.length; i++) {
            const str = capitalizeString(automaticLabel[i]);
            capitalizedLabel = capitalizedLabel + ' ' + str;
        }
        if (label.length > 0) {
            return label;
        }
        else {
            return capitalizedLabel;
        }
    }
    function matchDistance(selector, elt) {
        let targ = elt;
        for (let dist = 0; targ !== null && targ !== targ.parentElement; targ = targ.parentElement, ++dist) {
            if (targ.hasAttribute('data-lm-suppress-shortcuts')) {
                return -1;
            }
            if (targ.matches(selector)) {
                return dist;
            }
        }
        return -1;
    }
    // Find active keybindings for target element
    const activeBindings = new Map();
    for (let i = 0; i < commands.keyBindings.length; i++) {
        const kb = commands.keyBindings[i];
        let distance = matchDistance(kb.selector, elt);
        if (distance < 0) {
            continue;
        }
        let formatted = CommandRegistry.formatKeystroke(kb.keys);
        if (activeBindings.has(formatted)) {
            let oldBinding = activeBindings.get(formatted);
            // if the existing binding takes precedence, ignore this binding by continuing
            if (oldBinding[0] < distance ||
                (oldBinding[0] === distance &&
                    Selector.calculateSpecificity(oldBinding[1].selector) >
                        Selector.calculateSpecificity(kb.selector))) {
                continue;
            }
        }
        activeBindings.set(formatted, [distance, kb]);
    }
    // Group shortcuts by distance
    let maxDistance = -1;
    const groupedBindings = new Map();
    for (let [distance, binding] of activeBindings.values()) {
        maxDistance = Math.max(distance, maxDistance);
        if (!groupedBindings.has(distance)) {
            groupedBindings.set(distance, []);
        }
        groupedBindings.get(distance).push(binding);
    }
    // Display shortcuts by group
    const bindingTable = [];
    for (let d = 0; d <= maxDistance; d++) {
        if (groupedBindings.has(d)) {
            bindingTable.push(groupedBindings.get(d).map(b => (React.createElement("tr", { className: SHORTCUT_TABLE_ROW_CLASS, key: `${b.command}-${b.keys.join('-').replace(' ', '_')}` },
                React.createElement("td", { className: SHORTCUT_TABLE_ITEM_CLASS }, formatLabel(b)),
                React.createElement("td", { className: SHORTCUT_TABLE_ITEM_CLASS }, formatKeys([...b.keys]))))));
            bindingTable.push(React.createElement("tr", { className: SHORTCUT_TABLE_LAST_ROW_CLASS, key: `group-${d}-last` }));
        }
    }
    const body = (React.createElement("table", null,
        React.createElement("tbody", null, bindingTable)));
    return showDialog({
        title: trans.__('Keyboard Shortcuts'),
        body,
        buttons: [
            Dialog.cancelButton({
                label: trans.__('Close')
            })
        ]
    });
}
//# sourceMappingURL=shortcuts.js.map