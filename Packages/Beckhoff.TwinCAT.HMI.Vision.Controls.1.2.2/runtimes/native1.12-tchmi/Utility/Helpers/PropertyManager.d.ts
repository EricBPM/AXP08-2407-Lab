declare module TcVision {
    module Helpers {
        interface IPropertyManager {
            register(properties: TcHmi.Dictionary<TcHmi.System.ControlAttribute>): void;
            processAll(): void;
            addProcessor(propertyName: string, processor: CallableFunction): TcHmi.DestroyFunction;
            setCustomGetter(propertyName: string, getter: CallableFunction | null): void;
            setCustomSetter(propertyName: string, setter: CallableFunction | null): void;
            setCustomConverter(propertyName: string, converter: CallableFunction | null): void;
            [x: string]: any;
        }
        class PropertyManager implements IPropertyManager {
            protected __controlObj: TcHmi.Controls.System.TcHmiControl;
            protected __controlId: string;
            protected __controlDefaultFunction: CallableFunction;
            protected __props: any;
            protected __log: any;
            constructor(controlObj: TcHmi.Controls.System.TcHmiControl, id: string, default_f: CallableFunction, debug?: ILogger);
            register(properties_: TcHmi.Dictionary<TcHmi.System.ControlAttribute>, manageStandard?: boolean): void;
            processAll(): void;
            addProcessor(propertyName: string, processor: CallableFunction): TcHmi.DestroyFunction;
            setCustomGetter(propertyName: string, getter: CallableFunction | null): void;
            setCustomSetter(propertyName: string, setter: CallableFunction | null): void;
            setCustomConverter(propertyName: string, converter: CallableFunction | null): void;
            destroy(): void;
        }
    }
}
//# sourceMappingURL=PropertyManager.d.ts.map