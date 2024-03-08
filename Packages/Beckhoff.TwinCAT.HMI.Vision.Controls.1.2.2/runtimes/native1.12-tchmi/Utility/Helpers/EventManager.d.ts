declare module TcVision {
    module Helpers {
        interface IEventManager {
            register(names: string[]): void;
            [x: string]: any;
        }
        class EventManager implements IEventManager {
            protected __events: TcHmi.Dictionary<{
                numListeners: number;
                destroyFunction: TcHmi.DestroyFunction;
            }>;
            protected __controlId: string;
            protected __debug: any;
            /**
             * Constructs an EventManager
             * @param controlId The ID of the control is needed, since all event raises are prefixed with that ID.
             */
            constructor(controlId: string, debug?: ILogger);
            register(names: string[]): void;
            protected __registerEvent(name: any): void;
            destroy(): void;
        }
    }
}
//# sourceMappingURL=EventManager.d.ts.map