declare module TcVision {
    module Helpers {
        interface ISubControlManager {
            create(type: string, name: string, attributes?: object): void;
            [x: string]: any;
        }
        class SubControlManager implements ISubControlManager {
            protected __controlObj: TcHmi.Controls.System.TcHmiControl;
            protected __controlId: string;
            protected __root: JQuery;
            protected __debug: any;
            protected __controls: Array<TcHmi.Controls.System.baseTcHmiControl>;
            constructor(controlObj: TcHmi.Controls.System.TcHmiControl, id: string, root: JQuery, debug?: ILogger);
            create(type: string, name: string, attributes?: object): void;
            destroy(name: string): void;
            destroyAll(): void;
        }
    }
}
//# sourceMappingURL=SubControlManager.d.ts.map