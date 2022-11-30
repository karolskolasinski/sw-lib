export declare class InitializationState {
    private values;
    private props;
    constructor(props: string[]);
    isInitialized(): this is Required<InitializationState>;
    setValue(propName: string, propValue: any): void;
    getValue(propName: string): any;
    getValues(): {
        [x: string]: any;
    };
}
