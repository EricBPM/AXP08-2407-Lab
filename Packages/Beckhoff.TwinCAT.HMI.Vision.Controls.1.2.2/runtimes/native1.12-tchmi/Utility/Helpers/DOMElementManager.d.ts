declare module TcVision {
    module Helpers {
        class DOMElementManager implements IDOMElementManager {
            /**
             * Constructs a DOMElementManager.
             * @param root
             * @param debug
             */
            constructor(root: JQuery, debug?: ILogger);
            protected __root: JQuery;
            protected __elements: {};
            protected __log: ILogger;
            protected __available: boolean;
            get available(): boolean;
            register(descriptions: object): void;
            registerEx(names: string[], prefix: string): void;
            protected __registerElement(name: string, selector: string): void;
            forgetElements(): void;
            protected __forgetElement(name: string): void;
            destroy(): void;
        }
        /**
         * Interface to allow dynamic properties on the ElementManager
         */
        interface IDOMElementManager {
            register(descriptions: object): void;
            registerEx(names: string[], prefix: string): void;
            forgetElements(): void;
            [x: string]: any;
        }
    }
}
//# sourceMappingURL=DOMElementManager.d.ts.map