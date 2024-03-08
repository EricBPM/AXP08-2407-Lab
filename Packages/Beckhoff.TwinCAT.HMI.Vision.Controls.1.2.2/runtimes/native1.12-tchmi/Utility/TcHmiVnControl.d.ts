declare module TcHmi {
    module Controls {
        module Beckhoff {
            module Vision {
                export abstract class TcHmiVnControl extends TcHmi.Controls.System.TcHmiControl {
                    private __name;
                    protected get __$name(): string;
                    protected __$log: TcVision.Helpers.ILogger;
                    protected __$dom: TcVision.Helpers.IDOMElementManager;
                    protected __$events: TcVision.Helpers.IEventManager;
                    protected abstract __$props: TcHmiVnControl.Properties;
                    protected abstract __$controls: TcHmiVnControl.SubControls;
                    private __propertyDescriptions;
                    private __functionsToCallOnDestruction;
                    /**
                     * Abstract constructor of the TcHmiVnControl. Do not instantiate TcHmiVnControl directly.
                     * @param element Element from HTML (internal, do not use)
                     * @param pcElement precompiled Element (internal, do not use)
                     * @param attrs Attributes defined in HTML in a special format (internal, do not use)
                     */
                    constructor(element: JQuery, pcElement: JQuery, attrs: ControlAttributeList);
                    /**************
                     * Life Cycle *
                     **************/
                    /**
                     * When raised, the control object exists in control cache and constructor of each inheritation level was called.
                     * Call attribute processor functions here to initialize default values!
                     */
                    __previnit(): void;
                    /**
                     * Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values.
                     */
                    __init(): void;
                    /**
                    * Is called by tachcontrol() after the control instance gets part of the current DOM.
                    * Is only allowed to be called from the framework itself!
                    */
                    __attach(): void;
                    /**
                    * Is called by tachcontrol() after the control instance is no longer part of the current DOM.
                    * Is only allowed to be called from the framework itself!
                    */
                    __detach(): void;
                    /**
                    * Destroy the current control instance.
                    * Will be called automatically if system destroys control!
                    */
                    destroy(): void;
                    /**
                     * Verifies that this is a child control and not an instance of TcHmiVnControl. Otherwise throws error and thereby cancels instantiation.
                     */
                    private __assertNoAbstractInstantiation;
                    /**
                     * Computes and sets value for this.__$name, so that e.g. logger can work appropriately
                     */
                    private __computeAndSetName;
                    /**
                     * Reads properties from this.__attrs, extracts relevant infos and sets it to this.__$propertyDescriptions
                     */
                    private __readPropertiesDescriptions;
                    /**
                     * Returns value of a property by its propertyName or its internal default value, if property isn't initialized yet.
                     * @param propertyName PropertyName from Description.json of the property to get.
                     */
                    protected __$getProperty<T = any>(propertyName: string): T;
                    /**
                    * Set a property of this control.
                    * Will perform all standard input checks, type conversions,
                    * event notifications and calling of the process-function!
                    * Notice: This won't work for ReadOnly properties!
                    */
                    protected __$setProperty<T = any>(propertyName: string, value: T, internal?: boolean): void;
                    /**
                     * Sets property with internal flag.
                     * @param propertyName
                     * @param value
                     */
                    protected __$setPropertyInternal(propertyName: string, value: any): void;
                    /**
                     * Creates a TwinCAT HMI control.
                     * @param type Full type (namespace + name) the control was registered with. If no namespace is given, 'TcHmi.Controls.Beckhoff' will be used by default.
                     * @param name Name to be used internally for this control.
                     * @param attributes Control attributes to be passed to constructor.
                     * @param mount Element to mount the created control on.
                     */
                    protected __$createSubControl<T extends System.baseTcHmiControl>(type: string, name: string, attributes?: object, mount?: JQuery | null): T | null;
                }
                class MapWithAvailability {
                    $available: boolean;
                    constructor(available?: boolean);
                }
                export module TcHmiVnControl {
                    class Properties {
                    }
                    class SubControls extends MapWithAvailability {
                    }
                    class MemberMap extends Object {
                    }
                    module Defaults {
                        const ControlAttributes: {
                            'TcHmi.Controls.Beckhoff.TcHmiTextblock': {
                                'data-tchmi-height': string;
                                'data-tchmi-height-unit': string;
                                'data-tchmi-left': string;
                                'data-tchmi-left-unit': string;
                                'data-tchmi-text': string;
                                'data-tchmi-top': string;
                                'data-tchmi-top-unit': string;
                                'data-tchmi-width': string;
                                'data-tchmi-width-unit': string;
                                'data-tchmi-word-wrap': string;
                            };
                            'TcHmi.Controls.Beckhoff.TcHmiCheckbox': {
                                'data-tchmi-height': string;
                                'data-tchmi-height-unit': string;
                                'data-tchmi-left': string;
                                'data-tchmi-left-unit': string;
                                'data-tchmi-top': string;
                                'data-tchmi-top-unit': string;
                                'data-tchmi-width': string;
                                'data-tchmi-width-unit': string;
                            };
                            'TcHmi.Controls.Beckhoff.TcHmiCombobox': {
                                'data-tchmi-combobox-text': string;
                                'data-tchmi-height': string;
                                'data-tchmi-height-unit': string;
                                'data-tchmi-left': string;
                                'data-tchmi-left-unit': string;
                                'data-tchmi-top': string;
                                'data-tchmi-top-unit': string;
                                'data-tchmi-width': string;
                                'data-tchmi-width-unit': string;
                            };
                        };
                        const AttributeNames: string[];
                    }
                }
                export {};
            }
        }
    }
}
//# sourceMappingURL=TcHmiVnControl.d.ts.map