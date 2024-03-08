/*
 * Copyright (C) 2020 Beckhoff Automation GmbH & Co. KG
 */
var TcVision;
(function (TcVision) {
    let Helpers;
    (function (Helpers) {
        ;
        class EventManager {
            /**
             * Constructs an EventManager
             * @param controlId The ID of the control is needed, since all event raises are prefixed with that ID.
             */
            constructor(controlId, debug = new Helpers.Logger('EventManager')) {
                this.__events = {};
                this.__controlId = controlId;
                this.__debug = debug;
            }
            /*
             * Don't include '.on' prefix!
             */
            register(names) {
                names.forEach(name => {
                    this.__registerEvent(name);
                });
            }
            __registerEvent(name) {
                this.__events[name] = {
                    numListeners: 0,
                    destroyFunction: TcHmi.EventProvider.watchEventRegistration(this.__controlId + '.on' + name, data => {
                        if (data.error === TcHmi.Errors.NONE) {
                            if (this.__events[name] === undefined)
                                return;
                            switch (data.type) {
                                case TcHmi.EventProvider.EventRegWatchType.REGISTER:
                                    {
                                        ++this.__events[name].numListeners;
                                    }
                                    break;
                                case TcHmi.EventProvider.EventRegWatchType.DESTROY:
                                    {
                                        --this.__events[name].numListeners;
                                    }
                                    break;
                            }
                        }
                    })
                };
                const this_ = this;
                this[name] = {
                    get hasListeners() {
                        if (this_.__events[name] === undefined)
                            return false;
                        return (this_.__events[name].numListeners >= 1);
                    },
                    raise(data = undefined) {
                        TcHmi.EventProvider.raise(this_.__controlId + '.on' + name, data);
                    }
                };
            }
            destroy() {
                Object.keys(this.__events).forEach(key => {
                    if (!!this.__events[key].destroyFunction) {
                        this.__events[key].destroyFunction();
                    }
                });
            }
        }
        Helpers.EventManager = EventManager;
    })(Helpers = TcVision.Helpers || (TcVision.Helpers = {}));
})(TcVision || (TcVision = {}));
