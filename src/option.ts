export type OptionCallback = (value: any) => void;
export interface OptionAttributes {
    name?: string,
    description?: string,
    asCommand?: boolean,
    cb?: OptionCallback,
    shorthand?: string
}

/**
 * 
 * @param name Name of the option
 * @param cb Callback of the option
 * @param options Additional settings to the option
 * @param state State to be used
 */
export function addOption(name: string, cb: OptionCallback, options: OptionAttributes, state: any) {
    const option: OptionAttributes = {
        description: '',
        name,
        cb,
        ...options
    };

    state.options.push(option);
}