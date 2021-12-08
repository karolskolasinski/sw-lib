export class InitializationState {

    private values: Record<string, any> = {};
    private props: string[];

    constructor(props: string[]) {
        this.props = props;
    }

    isInitialized(): this is Required<InitializationState> {
        return this.props.every(prop => this.values[prop] !== undefined);
    }

    setValue(propName: string, propValue: any) {
        this.values[propName] = propValue;
    }

    getValue(propName: string): any {
        return this.values[propName];
    }

    getValues() {
        return {...this.values};
    }
}
