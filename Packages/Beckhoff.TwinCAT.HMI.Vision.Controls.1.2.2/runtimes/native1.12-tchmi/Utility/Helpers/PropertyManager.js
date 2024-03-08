/*
 * Copyright (C) 2020 Beckhoff Automation GmbH & Co. KG
 */
var TcVision;
(function (TcVision) {
    let Helpers;
    (function (Helpers) {
        const STANDARD_PROPERTY_NAMES = [
            'data-tchmi-height',
            'data-tchmi-height-unit',
            'data-tchmi-left',
            'data-tchmi-left-unit',
            'data-tchmi-top',
            'data-tchmi-top-unit',
            'data-tchmi-type',
            'data-tchmi-width',
            'data-tchmi-width-unit',
            'id',
        ];
        ;
        class PropertyManager {
            constructor(controlObj, id, default_f, debug = new Helpers.Logger('EventManager')) {
                this.__controlObj = controlObj;
                this.__controlId = id;
                this.__controlDefaultFunction = default_f;
                this.__props = {};
                this.__log = debug;
            }
            // "properties" should be the this.__attrs object from the TcHmiControl
            register(properties_, manageStandard = false) {
                let properties = tchmi_clone_object(properties_);
                if (properties !== undefined) {
                    if (!manageStandard) {
                        // Remove standard properties from the "properties" object,
                        // so that they don't get managed.
                        const filteredProps = {};
                        Object.keys(properties).forEach(key => {
                            if (STANDARD_PROPERTY_NAMES.indexOf(key) === -1) {
                                filteredProps[key] = properties[key];
                            }
                        });
                        properties = filteredProps;
                    }
                    const this_ = this;
                    Object.keys(properties).forEach(key => {
                        const entry = properties[key] || { descr: undefined };
                        const descr = entry.descr || {};
                        const propertyName = descr['propertyName'];
                        const propertyType = descr['type'];
                        if (propertyName !== undefined) {
                            this_.__props[propertyName] = {
                                value: null,
                                type: propertyType,
                                processors: [],
                                customGetter: null,
                                customSetter: null,
                                customConverter: null,
                            };
                            this_.__controlObj['get' + propertyName] = function () {
                                if (this_.__props[propertyName] === undefined) {
                                    // possibly, one want's to do debugging output here.
                                    return undefined;
                                }
                                else if (this_.__props[propertyName].customGetter !== null) {
                                    return this_.__props[propertyName].customGetter(this_.__props[propertyName].value);
                                }
                                else {
                                    return this_.__props[propertyName].value;
                                }
                            };
                            this_.__controlObj['set' + propertyName] = function (value) {
                                // include complete setter procedure here.
                                if (this_.__props[propertyName] === undefined) {
                                    this_.__log.error('Property entry missing in setter for property "' + propertyName + '"');
                                    return;
                                }
                                const oldValue = this_.__props[propertyName].value;
                                if (this_.__props[propertyName].customSetter !== null) {
                                    this_.__props[propertyName].value = this_.__props[propertyName].customSetter(value);
                                }
                                else {
                                    const propertyType = this_.__props[propertyName].type;
                                    let convertedValue = null;
                                    if (this_.__props[propertyName].customConverter !== null) {
                                        convertedValue = this_.__props[propertyName].customConverter(value);
                                    }
                                    else {
                                        switch (propertyType) {
                                            case 'tchmi:general#/definitions/String':
                                                convertedValue = TcHmi.ValueConverter.toString(value);
                                                break;
                                            case 'tchmi:general#/definitions/Boolean':
                                                convertedValue = TcHmi.ValueConverter.toBoolean(value);
                                                break;
                                            case 'tchmi:general#/definitions/Number':
                                                convertedValue = TcHmi.ValueConverter.toNumber(value);
                                                break;
                                            default:
                                                // do no conversion if type is unknown
                                                convertedValue = value;
                                                break;
                                        }
                                    }
                                    // If no value was provided or if value is not valid, set it to its default value.
                                    if (convertedValue === null) {
                                        convertedValue = this_.__controlDefaultFunction(propertyName);
                                    }
                                    // Value to set and current value a equal. Do nothing more.
                                    if (tchmi_equal(convertedValue, this_.__props[propertyName].value)) {
                                        return;
                                    }
                                    // Set the new value
                                    this_.__props[propertyName].value = convertedValue;
                                    // Let others know, that the getter will return another value now.
                                    TcHmi.EventProvider.raise(this_.__controlId + '.onFunctionResultChanged', ['get' + propertyName]);
                                }
                                // Call the corresponding processing function if it exists.
                                this_.__props[propertyName].processors.forEach((f) => {
                                    f(value, oldValue);
                                });
                                return undefined;
                            };
                            // Define getter + setter for this_, to make internal calls to properties
                            Object.defineProperty(this_, propertyName, {
                                get: function () {
                                    if (this_.__props[propertyName] !== undefined) {
                                        return this_.__controlObj['get' + propertyName]();
                                    }
                                    else {
                                        return undefined;
                                    }
                                },
                                set: function (value) {
                                    if (this_.__props[propertyName] !== undefined) {
                                        // Call normal setter function
                                        this_.__controlObj['set' + propertyName](value);
                                        // Notify other on this changed property.
                                        // Do this all the time, since this call can only me issued in the protected realm.
                                        const obj = {};
                                        obj[propertyName] = value;
                                        TcHmi.EventProvider.raise(this_.__controlId + '.onPropertyChanged', obj);
                                    }
                                },
                            }); // end of Object.defineProperty()
                        }
                        return;
                    }); // end of properties.forEach()
                }
            }
            processAll() {
                Object.keys(this.__props).forEach(key => {
                    const value = this.__props[key];
                    this.__props[key].processors.forEach(processor => {
                        processor(value, undefined);
                    });
                });
            }
            addProcessor(propertyName, processor) {
                if (this.__props[propertyName] !== undefined) {
                    this.__props[propertyName].processors.push(processor);
                }
                return () => {
                    if (this.__props[propertyName] !== undefined) {
                        const index = this.__props[propertyName].processors.indexOf(processor);
                        if (index !== -1) {
                            this.__props[propertyName].processors.splice(index, 1);
                        }
                    }
                };
            }
            setCustomGetter(propertyName, getter) {
                if (this.__props[propertyName] !== undefined) {
                    this.__props[propertyName].customGetter = getter;
                }
            }
            setCustomSetter(propertyName, setter) {
                if (this.__props[propertyName] !== undefined) {
                    this.__props[propertyName].customSetter = setter;
                }
            }
            setCustomConverter(propertyName, converter) {
                if (this.__props[propertyName] !== undefined) {
                    this.__props[propertyName].customConverter = converter;
                }
            }
            destroy() {
                return;
            }
        }
        Helpers.PropertyManager = PropertyManager;
    })(Helpers = TcVision.Helpers || (TcVision.Helpers = {}));
})(TcVision || (TcVision = {}));
