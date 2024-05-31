import { CommandRegistry } from '@lumino/commands';
import { Dialog } from '@jupyterlab/apputils';
import { TranslationBundle } from '@jupyterlab/translation';
/**
 * Display shortcuts options
 */
export interface IOptions {
    /**
     * Application commands registry
     */
    commands: CommandRegistry;
    /**
     * Translation object
     */
    trans: TranslationBundle;
    /**
     * Element on which to display the keyboard shortcuts help
     */
    activeElement?: Element;
}
export declare function displayShortcuts(options: IOptions): Promise<Dialog.IResult<unknown>>;
