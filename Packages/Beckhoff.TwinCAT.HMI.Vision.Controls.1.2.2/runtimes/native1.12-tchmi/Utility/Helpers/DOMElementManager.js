/*
 * Copyright (C) 2020 Beckhoff Automation GmbH & Co. KG
 */
var TcVision;
(function (TcVision) {
    let Helpers;
    (function (Helpers) {
        class DOMElementManager {
            /**
             * Constructs a DOMElementManager.
             * @param root
             * @param debug
             */
            constructor(root, debug = new Helpers.Logger('DOMElementManager')) {
                this.__elements = {};
                this.__root = root;
                this.__log = debug;
                this.__available = false;
            }
            get available() {
                return this.__available;
            }
            register(descriptions) {
                Object.keys(descriptions).forEach(key => {
                    this.__registerElement(key, descriptions[key]);
                });
                this.__available = true;
            }
            registerEx(names, prefix) {
                if (!Array.isArray(names))
                    return;
                names.forEach(name => {
                    this.__registerElement(name, prefix + name);
                });
                this.__available = true;
            }
            __registerElement(name, selector) {
                const element = this.__root.find(selector);
                if (element.length === 0) {
                    this.__log.error('Invalid DOM. Cannot find element "' + name + '" with selector "' + selector + '".');
                }
                else {
                    this.__elements[name] = element;
                    if (this[name] === undefined) {
                        Object.defineProperty(this, name, { get: function () { return this.__elements[name]; }, configurable: true, });
                    }
                }
            }
            forgetElements() {
                Object.keys(this.__elements).forEach(key => {
                    this.__forgetElement(key);
                });
                this.__available = false;
            }
            __forgetElement(name) {
                if (this[name] === undefined)
                    return;
                delete this[name];
                if (this.__elements[name] === undefined)
                    return;
                delete this.__elements[name];
            }
            destroy() {
                this.forgetElements();
            }
        }
        Helpers.DOMElementManager = DOMElementManager;
    })(Helpers = TcVision.Helpers || (TcVision.Helpers = {}));
})(TcVision || (TcVision = {}));
