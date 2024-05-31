/**
 * @packageDocumentation
 * @module terminal-extension
 */
import { JupyterFrontEndPlugin } from '@jupyterlab/application';
import { ITerminalTracker } from '@jupyterlab/terminal';
/**
 * The default terminal extension.
 */
declare const plugin: JupyterFrontEndPlugin<ITerminalTracker>;
/**
 * Export the plugin as default.
 */
export default plugin;
