import { JupyterFrontEndPlugin } from '@jupyterlab/application';
import { IKernelStatusModel } from '@jupyterlab/apputils';
/**
 * A plugin that provides a kernel status item to the status bar.
 */
export declare const kernelStatus: JupyterFrontEndPlugin<IKernelStatusModel>;
export declare const runningSessionsStatus: JupyterFrontEndPlugin<void>;
