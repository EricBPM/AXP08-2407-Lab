declare module TcHmi {
    module Controls {
        module Beckhoff {
            module Vision {
                abstract class TcHmiVnShape extends TcHmiVnControl {
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
                    protected __$props: TcHmiVnShape.Properties;
                    /**
                     * SubControls
                     */
                    protected __$controls: TcHmiVnShape.SubControls;
                    /************************************************************
                     * Custom member variables
                     */
                    /**
                     * Width of this control after the last change of the Width property.
                     */
                    protected __lastWidth: number;
                    /**
                     * Height of this control after the last change of the Height property.
                     */
                    protected __lastHeight: number;
                    /**
                     * Offset that should be applied to represent the shape's data to the outside.
                     */
                    protected __dataOffset: Vector;
                    /**
                     * Scale that should be applied to represent the shape's data to the outside.
                     */
                    protected __dataScale: number;
                    /************************************************************
                     * Life cycle
                     */
                    /**
                     * Will be called after control is attached to DOM.
                     */
                    __attach(): void;
                    /************************************************************
                     * API
                     */
                    /************************************************************
                     * Category: Color
                     */
                    /**
                     * Property: StrokeColor
                     */
                    getStrokeColor(): SolidColor;
                    setStrokeColor(value: SolidColor): void;
                    protected __processStrokeColor(): void;
                    /**
                     * Property: HandleColor
                     */
                    getHandleColor(): SolidColor;
                    setHandleColor(value: SolidColor): void;
                    protected __processHandleColor(): void;
                    /************************************************************
                     * Category: Layout
                     */
                    /**
                     * Property: Width
                     * Inherited from TcHmiControl
                     * Will be called by super.setWidth(value);
                     */
                    __processWidth(): void;
                    protected abstract __processWidthChange(changeFactor: number): any;
                    /**
                     * Property: Height
                     * Inherited from TcHmiControl
                     * Will be called by super.setHeight(value);
                     */
                    __processHeight(): void;
                    protected abstract __processHeightChange(changeFactor: number): any;
                    /************************************************************
                     * Category: Common
                     */
                    /**
                     * Property: ShapeData
                     */
                    abstract getShapeData(): any;
                    abstract setShapeData(value: any): void;
                    /**
                     * Method: clear
                     */
                    abstract clear(): void;
                    /************************************************************
                     * Category: Appearance
                     */
                    /**
                     * Property: StrokeThickness
                     */
                    getStrokeThickness(): number;
                    setStrokeThickness(value: number): void;
                    protected __processStrokeThickness(): void;
                    /**
                     * Property: StrokeThicknessUnit
                     */
                    getStrokeThicknessUnit(): 'px';
                    setStrokeThicknessUnit(value: 'px'): void;
                    /**
                     * Property: HandleSize
                     */
                    getHandleSize(): number;
                    setHandleSize(value: number): void;
                    protected __processHandleSize(): void;
                    /**
                     * Property: HandleSizeUnit
                     */
                    getHandleSizeUnit(): 'px';
                    setHandleSizeUnit(value: 'px'): void;
                    /**
                     * Property: ClickableSize
                     */
                    getClickableSize(): number;
                    setClickableSize(value: number): void;
                    protected __processClickableSize(): void;
                    /**
                     * Property: ClickableSizeUnit
                     */
                    getClickableSizeUnit(): 'px';
                    setClickableSizeUnit(value: 'px'): void;
                    /************************************************************
                     * Category: Advanced
                     */
                    /**
                     * Property: FollowSize
                     */
                    getFollowSize(): boolean;
                    setFollowSize(value: boolean): void;
                    /**
                     * Property: DataOffset
                     */
                    getDataOffset(): Vector2;
                    setDataOffset(value: Vector2): void;
                    protected __processDataOffset(value: Vector2): void;
                    /**
                     * Property: DataScale
                     */
                    getDataScale(): number;
                    setDataScale(value: number): void;
                    protected __processDataScale(value: number): void;
                }
                module TcHmiVnShape {
                    class Properties extends TcHmiVnControl.Properties {
                        StrokeColor: SolidColor;
                        HandleColor: SolidColor;
                        StrokeThickness: number;
                        HandleSize: number;
                        ClickableSize: number;
                        FollowSize: boolean;
                        DataOffset: Vector2;
                        DataScale: number;
                    }
                    class SubControls extends TcHmiVnControl.SubControls {
                    }
                }
            }
        }
    }
}
//# sourceMappingURL=TcHmiVnShape.d.ts.map