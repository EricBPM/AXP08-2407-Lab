/*
 * Copyright (C) 2020 Beckhoff Automation GmbH & Co. KG
 */
var TcVision;
(function (TcVision) {
    let Helpers;
    (function (Helpers) {
        class Logger {
            constructor(name) {
                this.__name = name || 'Logger';
                if (!Logger.LoggingNotified) {
                    //this.debug(`[TcHmi.Controls.Beckhoff.Vision] Version: ${TcHmi.Controls.Beckhoff.Vision.VERSION}`, '@suppress');
                    Logger.LoggingNotified = true;
                }
                if (name == null) {
                    this.info('Logger wasn\'t initialized with appropriate name.');
                }
            }
            /**
            * @description [Package] Post a debugging message to the console.
            */
            debug(log, ...misc) {
                this.output('Debug', log, ...misc);
            }
            info(log, ...misc) {
                this.output('Info', log, ...misc);
            }
            warning(log, ...misc) {
                this.output('Warning', log, ...misc);
            }
            error(log, ...misc) {
                this.output('Error', log, ...misc);
            }
            output(level, log, ...misc) {
                if (misc[misc.length - 1] === '@suppress') {
                    misc.splice(misc.length - 1, 1);
                    TcHmi.Functions.Beckhoff.Log(level, log, ...misc);
                }
                else {
                    TcHmi.Functions.Beckhoff.Log(level, '[' + this.__name + ']', log, ...misc);
                }
            }
        }
        Logger.LoggingNotified = false;
        Helpers.Logger = Logger;
    })(Helpers = TcVision.Helpers || (TcVision.Helpers = {}));
})(TcVision || (TcVision = {}));
