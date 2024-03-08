/*
 * Copyright (C) 2020 Beckhoff Automation GmbH & Co. KG
 */
var TcHmi;
(function (TcHmi) {
    let Controls;
    (function (Controls) {
        let Beckhoff;
        (function (Beckhoff) {
            let Vision;
            (function (Vision) {
                let Helpers;
                (function (Helpers) {
                    class ValueConverter {
                        static convertArrayItems(value, length, elementsConverter) {
                            if (!Array.isArray(value)) {
                                return null;
                            }
                            if (value.length !== length) {
                                return null;
                            }
                            if (elementsConverter !== undefined) {
                                let failed = false;
                                value = value.map(element => {
                                    const convertedElement = elementsConverter(value);
                                    failed = failed || (convertedElement === null);
                                    return convertedElement;
                                });
                                if (failed) {
                                    return null;
                                }
                            }
                            return value;
                        }
                        static toArray2(value, elementsConverter) {
                            return ValueConverter.convertArrayItems(value, 2, elementsConverter);
                        }
                        static toArray3(value, elementsConverter) {
                            return ValueConverter.convertArrayItems(value, 3, elementsConverter);
                        }
                        static toArray4(value, elementsConverter) {
                            return ValueConverter.convertArrayItems(value, 4, elementsConverter);
                        }
                        static toSolidColor(value) {
                            if (typeof value === 'object') {
                                if (typeof value.color === 'string') {
                                    Object.keys(value).forEach(key => {
                                        if (key !== 'color')
                                            delete value[key];
                                    });
                                    return value;
                                }
                                else
                                    return null;
                            }
                            else if (typeof value === 'string')
                                return { color: value };
                            else
                                return null;
                        }
                    }
                    Helpers.ValueConverter = ValueConverter;
                })(Helpers = Vision.Helpers || (Vision.Helpers = {}));
            })(Vision = Beckhoff.Vision || (Beckhoff.Vision = {}));
        })(Beckhoff = Controls.Beckhoff || (Controls.Beckhoff = {}));
    })(Controls = TcHmi.Controls || (TcHmi.Controls = {}));
})(TcHmi || (TcHmi = {}));
