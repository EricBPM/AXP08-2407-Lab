declare module TcVision {
    module Helpers {
        interface ILogger {
            info(log: any, ...misc: any[]): void;
            warning(log: any, ...misc: any[]): void;
            error(log: any, ...misc: any[]): void;
        }
        class Logger implements ILogger {
            static LoggingNotified: boolean;
            protected __name: any;
            constructor(name: string | null);
            /**
            * @description [Package] Post a debugging message to the console.
            */
            debug(log: any, ...misc: any[]): void;
            info(log: any, ...misc: any[]): void;
            warning(log: any, ...misc: any[]): void;
            error(log: any, ...misc: any[]): void;
            protected output(level: "Info" | "Warning" | "Error" | "Debug", log: any, ...misc: any[]): void;
        }
    }
}
//# sourceMappingURL=Logger.d.ts.map