/*
 * Copyright (C) 2020 Beckhoff Automation GmbH & Co. KG
 */
var TcVision;
(function (TcVision) {
    let Helpers;
    (function (Helpers) {
        const CONTROL_ATTRIBUTES = {
            'TcHmi.Controls.Beckhoff.TcHmiTextblock': {
                'data-tchmi-height': "26",
                'data-tchmi-height-unit': "px",
                'data-tchmi-left': "0",
                'data-tchmi-left-unit': "px",
                'data-tchmi-text': "Hello world!",
                'data-tchmi-top': "0",
                'data-tchmi-top-unit': "px",
                'data-tchmi-width': "150",
                'data-tchmi-width-unit': "px",
                'data-tchmi-word-wrap': "True"
            },
        };
        class SubControlManager {
            constructor(controlObj, id, root, debug = new Helpers.Logger('EventManager')) {
                this.__controlObj = controlObj;
                this.__controlId = id;
                this.__root = root;
                this.__debug = debug;
                this.__controls = [];
            }
            create(type, name, attributes = {}) {
                let attributes_;
                if (CONTROL_ATTRIBUTES[type] !== undefined) {
                    attributes_ = Object.assign({}, CONTROL_ATTRIBUTES[type]);
                    Object.keys(attributes).forEach(key => {
                        attributes_[key] = attributes[key];
                    });
                }
                else {
                    attributes_ = attributes;
                }
                this.__controls[name] = TcHmi.ControlFactory.createEx(type, (this.__controlId + name), attributes_, this.__controlObj);
                this.__root.append(this.__controls[name].getElement());
                Object.defineProperty(this, name, {
                    get: () => {
                        return this.__controls[name];
                    },
                });
            }
            destroy(name) {
                if (this.__controls[name] === undefined)
                    return;
                this.__controls[name].destroy();
                delete this.__controls[name];
            }
            destroyAll() {
                this.__controls.forEach((_, key) => {
                    this.__controls[key].destroy();
                    delete this.__controls[key];
                });
            }
        }
        Helpers.SubControlManager = SubControlManager;
    })(Helpers = TcVision.Helpers || (TcVision.Helpers = {}));
})(TcVision || (TcVision = {}));
