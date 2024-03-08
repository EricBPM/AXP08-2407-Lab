declare module TcHmi {
    module Controls {
        module Beckhoff {
            module Vision {
                class TcHmiVnColor extends TcHmiVnControl {
                    /**
                     * @description Constructor of the control
                     * @param element Element from HTML (internal, do not use)
                     * @param pcElement precompiled Element (internal, do not use)
                     * @param attrs Attributes defined in HTML in a special format (internal, do not use)
                     */
                    constructor(element: JQuery, pcElement: JQuery, attrs: ControlAttributeList);
                    /**
                     * Properties
                     */
                    protected __$props: TcHmiVnColor.Properties;
                    /**
                     * SubControls
                     */
                    protected __$controls: TcHmiVnColor.SubControls;
                    /************************************************************
                     * Custom member variables
                     */
                    /**
                     * Internal representation of the displayed color.
                     * Is held separate from the properties to allow different return types (e.g. number vs. array).
                     */
                    protected __colorValue: [number, number, number, number];
                    /**
                     * The color shall be returned to the bound symbol as this type.
                     * Also acts as a preference for the read-only ColorValue property.
                     */
                    protected __colorReturnType: TcHmiVnColor.ColorType;
                    /**
                     * Dynamic DOM references to knobs of TcHmiLinearGauge controls.
                     * Needed to adjust size of them, if color control is very small.
                     */
                    protected __domSliderKnobs: Array<JQuery>;
                    /**
                     * Destroy function of the watcher of the color symbol.
                     * WDF = Watcher Destroy Function
                     */
                    protected __colorSymbolWDF: TcHmi.DestroyFunction | null;
                    /**
                     * Destroy functions of the watchers of the Values controls.
                     */
                    protected __valuesControlsWDFs: TcHmi.DestroyFunction[];
                    /**
                     * Destroy functions of the watchers of the Slider controls.
                     */
                    protected __sliderControlsWDFs: TcHmi.DestroyFunction[];
                    /************************************************************
                     * Life-cycle
                     */
                    __attach(): void;
                    destroy(): void;
                    /************************************************************
                     * Body
                     */
                    /**
                     * Updates internal representation of the color.
                     * Should be called when color changes through outer actions or user interactions.
                     * Needs to be handled separately from ColorValue property, since dimensionality might not match.
                     * @param color
                     * @param inputMethod
                     */
                    protected __updateMasterColor(color: TcHmiVnColor.Schema.ColorValue, inputMethod: TcHmiVnColor.ColorInputMethod, skipSymbolWrite?: boolean): void;
                    /**
                     * Returns color value adjusted to the color format of the respective channel.
                     * E.g.: Performs flooring for integer formats.
                     * @param value Color value to adjust.
                     */
                    protected __constrainValue(value: number, channel: TcHmiVnColor.Schema.ColorChannel): number;
                    /**
                     * Updates ColorValue property based on internal color value.
                     * Needs some special treatment because of configurable ReturnFormat.
                     */
                    protected __updateColorValue(): void;
                    /**
                     * Update values in the UI
                     * Is designed to be called a lot (again and again) by a binded property.
                     * --> Is pretty efficient
                     */
                    protected __updateUIData(inputMethod: TcHmiVnColor.ColorInputMethod | null): void;
                    /**
                     * Update layout of the UI
                     * Should be called as sparsely as possible, since it's not necessarily very efficient.
                     * --> Only as a setup action!
                     */
                    protected __updateUILayout(): void;
                    /**
                     * Returns sizes of UI elements based on Usage, Orientation properties + control size.
                     */
                    protected __computeLayoutSizes(): TcHmiVnColor.IDOMElementSizes;
                    /**
                     * Computes + return internal color value as a CSS-usable string.
                     */
                    protected __colorStringForHTMLInput(): string;
                    protected __colorStringFromInternalMaxValues(): string;
                    /**
                     * Creates a Textbox sub-control for a color value.
                     * @param index Index used to reference this instance.
                     */
                    protected __createValuesControl(index: number): TcHmiNumericInput | null;
                    /**
                     * Creates a LinearGauge sub-control for a color slider.
                     * @param index Index used to reference this instance.
                     */
                    protected __createSliderControl(index: number): TcHmiLinearGauge | null;
                    /**
                     * Destroys all sub-controls.
                     * Needed for clean-up when this-control is destroyed.
                     */
                    protected __cleanupSubControls(): void;
                    /**
                     * Returns passed usage variable adjusted to maximally allowed value based on user permissions.
                     * @param usage Usage that shall be restricted based on user permissions.
                     */
                    protected __restrictUsage(usage: TcHmiVnColor.Schema.UsageMode): TcHmiVnColor.Schema.UsageMode;
                    protected __writeToColorSymbol(color: TcHmiVnColor.Schema.ColorValue): void;
                    protected __updateColorReturnType(symbol: TcHmi.Symbol): Promise<void>;
                    /************************************************************
                     * API
                     */
                    /************************************************************
                     * Category: Layout
                     */
                    /**
                     * Property: Width
                     * Inherited from TcHmiControl
                     * Will be called by super.setWidth(value);
                     * Applies Width property to root element of this-control.
                     */
                    __processWidth(): void;
                    /**
                     * Property: Height
                     * Inherited from TcHmiControl
                     * Will be called by super.setHeight(value);
                     * Applies Height property to root element of this-control.
                     */
                    __processHeight(): void;
                    /**
                     * Property: Visibility
                     */
                    setVisibility(value: Visibility): void;
                    /************************************************************
                     * Category: Common
                     */
                    /**
                     * Property: ColorSymbol
                     */
                    getColorSymbol(): TcHmi.Symbol | null;
                    setColorSymbol(value: TcHmi.Symbol | null): void;
                    protected __setColorSymbolInternal(value: TcHmi.Symbol | null): void;
                    protected __processColorSymbol(value: TcHmi.Symbol | null): Promise<void>;
                    /**
                     * Property (read-only): ColorValue
                     */
                    getColorValue(): TcHmiVnColor.Schema.ColorValue;
                    protected __setColorValueInternal(value: TcHmiVnColor.Schema.ColorValue): void;
                    /**
                     * Method: ColorValue
                     */
                    setColorValue(value: TcHmiVnColor.Schema.ColorValue): void;
                    /************************************************************
                     * Category: Color
                     */
                    /**
                     * Property: ColorChannels
                     */
                    getColorChannels(): TcHmiVnColor.Schema.ColorChannel[];
                    setColorChannels(value: TcHmiVnColor.Schema.ColorChannel[]): void;
                    protected __processColorChannels(): void;
                    /**
                     * Property: BoxColorConversion
                     */
                    getBoxColorConversion(): TcHmi.IFunction | null;
                    setBoxColorConversion(value: TcHmi.IFunction | null): void;
                    protected __processBoxColorConversion(): void;
                    /************************************************************
                     * Category: Appearance
                     */
                    /**
                     * Property: BoxUsage
                     */
                    getBoxUsage(): TcHmiVnColor.Schema.UsageMode;
                    setBoxUsage(value: TcHmiVnColor.Schema.UsageMode): void;
                    protected __processBoxUsage(): void;
                    /**
                     * Property: ValuesUsage
                     */
                    getValuesUsage(): TcHmiVnColor.Schema.UsageMode;
                    setValuesUsage(value: TcHmiVnColor.Schema.UsageMode): void;
                    protected __processValuesUsage(): void;
                    /**
                     * Property: SliderUsage
                     */
                    getSliderUsage(): TcHmiVnColor.Schema.UsageMode;
                    setSliderUsage(value: TcHmiVnColor.Schema.UsageMode): void;
                    protected __processSliderUsage(): void;
                    /**
                     * Property: Orientation
                     */
                    getOrientation(): TcHmiVnColor.Schema.Orientation;
                    setOrientation(value: TcHmiVnColor.Schema.Orientation): void;
                    protected __processOrientation(): void;
                    /**
                     * Property: BoxSize
                     */
                    getBoxSize(): number;
                    setBoxSize(value: number): void;
                    protected __processBoxSize(): void;
                    /**
                     * Property: BoxSizeUnit
                     */
                    getBoxSizeUnit(): 'px';
                    setBoxSizeUnit(value: 'px'): void;
                    /**
                     * Property: ValuesSize
                     */
                    getValuesSize(): number;
                    setValuesSize(value: number): void;
                    protected __processValuesSize(): void;
                    /**
                     * Property: ValuesSizeUnit
                     */
                    getValuesSizeUnit(): 'px';
                    setValuesSizeUnit(value: 'px'): void;
                }
                module TcHmiVnColor {
                    /**
                     * Property names + default value.
                     */
                    class Properties extends TcHmiVnControl.Properties {
                        ColorSymbol: TcHmi.Symbol | null;
                        ColorValue: Schema.ColorValue;
                        ColorChannels: Schema.ColorChannel[];
                        BoxUsage: Schema.UsageMode;
                        ValuesUsage: Schema.UsageMode;
                        SliderUsage: Schema.UsageMode;
                        Orientation: Schema.Orientation;
                        BoxColorConversion: TcHmi.IFunction | null;
                        BoxSize: number;
                        ValuesSize: number;
                    }
                    /**
                     * Defines names + types of sub-controls.
                     */
                    class SubControls extends TcHmiVnControl.SubControls {
                        ValuesControls: Array<TcHmi.Controls.Beckhoff.TcHmiNumericInput>;
                        SliderControls: Array<TcHmi.Controls.Beckhoff.TcHmiLinearGauge>;
                    }
                    /**
                     * Defines types from the framework schema.
                     */
                    module Schema {
                        type ColorValue = number | Types.Array3<number> | Types.Array4<number>;
                        enum UsageMode {
                            Hide = "Hide",
                            ViewOnly = "ViewOnly",
                            Editable = "Editable"
                        }
                        interface ColorChannel {
                            color: SolidColor;
                            maxValue: number;
                            float: boolean;
                        }
                        enum Orientation {
                            Horizontal = "Horizontal",
                            Vertical = "Vertical"
                        }
                    }
                    module Settings {
                        const SliderWarningThreshold = 50;
                        const Padding = 5;
                        const LinearGaugeAttributes: {
                            'data-tchmi-base-animation-time': string;
                            'data-tchmi-height': string;
                            'data-tchmi-height-unit': string;
                            'data-tchmi-label-range': string;
                            'data-tchmi-left': string;
                            'data-tchmi-left-unit': string;
                            'data-tchmi-show-labels': string;
                            'data-tchmi-show-ticks': string;
                            'data-tchmi-show-value-text': string;
                            'data-tchmi-start-from-zero': string;
                            'data-tchmi-top': string;
                            'data-tchmi-top-unit': string;
                            'data-tchmi-width': string;
                            'data-tchmi-width-unit': string;
                            'data-tchmi-editable': string;
                            'data-tchmi-max-value': string;
                            'data-tchmi-min-value': string;
                            'data-tchmi-value': string;
                            'data-tchmi-orientation': string;
                            'data-tchmi-padding': {
                                left: number;
                                right: number;
                                top: number;
                                bottom: number;
                                leftUnit: string;
                                rightUnit: string;
                                topUnit: string;
                                bottomUnit: string;
                            };
                            'data-tchmi-background-color': {
                                color: string;
                            };
                        };
                        const NumericInputAttributes: {
                            "data-tchmi-height": string;
                            "data-tchmi-height-unit": string;
                            "data-tchmi-left": string;
                            "data-tchmi-left-unit": string;
                            "data-tchmi-text": string;
                            "data-tchmi-top": string;
                            "data-tchmi-top-unit": string;
                            "data-tchmi-width": string;
                            "data-tchmi-width-unit": string;
                            "data-tchmi-is-enabled": string;
                            "data-tchmi-text-horizontal-alignment": string;
                            "data-tchmi-content-padding": {
                                top: number;
                                right: number;
                                bottom: number;
                                left: number;
                            };
                            'data-tchmi-background-color': {
                                color: string;
                            };
                            "data-tchmi-border-color": {
                                color: string;
                            };
                            "data-tchmi-text-font-weight": string;
                        };
                    }
                    interface IDOMElementSizes {
                        totalSize: number;
                        trackSize: number;
                        boxSize: number;
                        valuesSize: number;
                        sliderSize: number;
                    }
                    enum ColorInputMethod {
                        Property = "Property",
                        Box = "Box",
                        Values = "Values",
                        Slider = "Slider"
                    }
                    enum ColorType {
                        None = "None",
                        Number = "Number",
                        Vector3 = "Vector3",
                        Vector4 = "Vector4"
                    }
                }
            }
        }
    }
}
//# sourceMappingURL=TcHmiVnColor.d.ts.map