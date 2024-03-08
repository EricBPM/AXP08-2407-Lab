declare module TcHmi {
    module Controls {
        module Beckhoff {
            module Vision {
                class TcHmiVnRectangle extends TcHmiVnShape {
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
                    protected __$props: TcHmiVnRectangle.Properties;
                    /**
                     * SubControls
                     */
                    protected __$controls: TcHmiVnRectangle.SubControls;
                    /************************************************************
                     * Custom member variables
                     */
                    /**
                     * DOM element for rectangle shape
                     */
                    protected __domRect: JQuery<SVGRectElement> | null;
                    /**
                     * DOM element for ellipse shape
                     */
                    protected __domEllipse: JQuery<SVGEllipseElement> | null;
                    /**
                     * DOM element of origin handle
                     */
                    protected __originElement: JQuery<SVGCircleElement> | null;
                    /**
                     * Positions of all handles
                     */
                    protected __handleData: TcHmiVnRectangle.HandleData;
                    /**
                     * DOM elements of all handles
                     */
                    protected __handleElements: TcHmiVnRectangle.HandleElements;
                    /**
                     * Data regarding the origin handle
                     */
                    protected __origin: {
                        isActive: boolean;
                        position: Vector;
                        timestamp: number;
                        isTouching: boolean;
                    };
                    protected __rectangle: {
                        isActive: boolean;
                        center: Vector;
                        size: Vector;
                        angle: number;
                    };
                    protected __cornerDrag: TcHmiVnRectangle.CornerDrag;
                    protected __edgeDrag: TcHmiVnRectangle.EdgeDrag;
                    protected __centerDrag: {
                        isActive: boolean;
                        lastPosition: Vector;
                    };
                    protected __rotationDrag: {
                        isActive: boolean;
                        lastAngle: number;
                    };
                    protected __shapeDrag: {
                        isActive: boolean;
                        lastPosition: Vector;
                    };
                    /************************************************************
                     * Life cycle
                     */
                    /**
                     * Will be called after control is attached to DOM.
                     */
                    __attach(): void;
                    /************************************************************
                     * Initial UI setups
                     */
                    /**
                     * Registers listeners for various events on the SVG element.
                     */
                    protected __registerStaticListeners(): void;
                    /**
                     * Registers DOM elements for shapes.
                     */
                    protected __registerShapeElements(): void;
                    /**
                     * Registers DOM elements for handles.
                     */
                    protected __registerHandleElements(): void;
                    /**
                     * Registers listeners for events on the handles.
                     */
                    protected __registerHandleEventListeners(): void;
                    /************************************************************
                     * Handlers for UI events
                     */
                    /**
                     * Should be trigger when pointing device enters the observed area
                     * (either by starting to press the mouse button or by starting a touch).
                     * @param event
                     */
                    protected __handleSurfaceTouch(event: JQuery.Event): void;
                    /**
                     * Should be trigger when pointing device moves on the observed area.
                     * @param event
                     */
                    protected __handleSurfaceMove(event: JQuery.Event): void;
                    /**
                     * Should be trigger when pointing device leaves the observed area
                     * (either by ending a click or by moving out to the side).
                     * @param event
                     */
                    protected __handleSurfaceEnd(event: JQuery.Event): void;
                    /************************************************************
                     * UI updates
                     */
                    /**
                     * Updates all UI elements.
                     */
                    protected __updateUI(): void;
                    /**
                     * Updates the shape element in the UI.
                     */
                    protected __updateShapeUI(): void;
                    /**
                     * Updates all handle elements in the UI.
                     */
                    protected __updateHandleUI(): void;
                    /************************************************************
                     * Data updates
                     */
                    /**
                     * Updates the ShapeData property based on the values in this.__rectangle.
                     * @param actualChange True if the shape was changed through direct user editing (dragging a handle) and false otherwise (resizing from outside)
                     */
                    protected __updateShapeData(actualChange: boolean): void;
                    /**
                     * Updates this.__handleData based on the values in this.__rectangle.
                     */
                    protected __updateHandleData(): void;
                    /************************************************************
                     * Tools
                     */
                    /**
                     * Returns the position of a UI event. Takes into account the different calculation methods for mouse and touch events.
                     * @param event
                     */
                    protected __positionFromEvent(event: JQuery.Event): Vector;
                    /**
                     * Clears the state of the rectangle as if none was ever created.
                     */
                    protected __clearRectangle(): void;
                    /**
                     * Returns the validity of the current shape data property
                     */
                    protected __shapeDataIsValid(): boolean;
                    /************************************************************
                     * API
                     */
                    /************************************************************
                     * Category: Color
                     */
                    /**
                     * Property: HandleColor
                     */
                    protected __processHandleColor(): void;
                    /**
                     * Property: StrokeColor
                     */
                    protected __processStrokeColor(): void;
                    /************************************************************
                     * Category: Layout
                     */
                    /**
                     * Inherited from TcHmiVnShape
                     * Will be called by super.__processWidth(value);
                     */
                    protected __processWidthChange(changeFactor: number): void;
                    /**
                     * Inherited from TcHmiVnShape
                     * Will be called by super.__processHeight(value);
                     */
                    protected __processHeightChange(changeFactor: number): void;
                    /************************************************************
                     * Category: Common
                     */
                    /**
                     * Property: ShapeData
                     */
                    getShapeData(): Types.TcVnRotatedRectangle;
                    setShapeData(value: Types.TcVnRotatedRectangle): void;
                    protected __setShapeDataInternal(value: Types.TcVnRotatedRectangle): void;
                    protected __processShapeData(value: Types.TcVnRotatedRectangle, oldValue?: Types.TcVnRotatedRectangle, internal?: boolean): void;
                    /**
                     * Property: AspectRatio
                     */
                    getAspectRatio(): number;
                    setAspectRatio(value: number): void;
                    /**
                     * Method: clear
                     */
                    clear(): void;
                    /************************************************************
                     * Category: Usage
                     */
                    /**
                     * Property: InitialSelection
                     */
                    getInitialSelection(): TcHmiVnRectangle.Schema.InitialSelection;
                    setInitialSelection(value: TcHmiVnRectangle.Schema.InitialSelection): void;
                    /**
                     * Property: CornerHandles
                     */
                    getCornerHandles(): boolean;
                    setCornerHandles(value: boolean): void;
                    /**
                     * Property: EdgeHandles
                     */
                    getEdgeHandles(): boolean;
                    setEdgeHandles(value: boolean): void;
                    /**
                     * Property: CenterHandle
                     */
                    getCenterHandle(): boolean;
                    setCenterHandle(value: boolean): void;
                    /**
                     * Property: RotationHandle
                     */
                    getRotationHandle(): boolean;
                    setRotationHandle(value: boolean): void;
                    /**
                     * Property: ShapeDragging
                     */
                    getShapeDragging(): boolean;
                    setShapeDragging(value: boolean): void;
                    /**
                     * Property: AngleInterval
                     */
                    getAngleInterval(): number;
                    setAngleInterval(value: number): void;
                    /************************************************************
                     * Category: Appearance
                     */
                    /**
                     * Property: StrokeShape
                     */
                    getStrokeShape(): TcHmiVnRectangle.Schema.StrokeShape;
                    setStrokeShape(value: TcHmiVnRectangle.Schema.StrokeShape): void;
                    protected __processClickableSize(): void;
                }
                module TcHmiVnRectangle {
                    /**
                     * Sets names and default values of this-control's properties.
                     */
                    class Properties extends TcHmiVnShape.Properties {
                        ShapeData: Types.TcVnRotatedRectangle;
                        AspectRatio: number;
                        InitialSelection: Schema.InitialSelection;
                        CornerHandles: boolean;
                        EdgeHandles: boolean;
                        CenterHandle: boolean;
                        RotationHandle: boolean;
                        ShapeDragging: boolean;
                        AngleInterval: number;
                        StrokeShape: Schema.StrokeShape;
                    }
                    class SubControls extends TcHmiVnShape.SubControls {
                    }
                    module Schema {
                        enum StrokeShape {
                            Rectangle = "Rectangle",
                            Ellipse = "Ellipse"
                        }
                        enum InitialSelection {
                            OnlyViaClicks = "OnlyViaClicks",
                            OnlyViaDrag = "OnlyViaDrag",
                            ViaBoth = "ViaBoth"
                        }
                    }
                    type HandleData = {
                        p: Vector[];
                        e: Vector[];
                        c: Vector | null;
                        r: Vector | null;
                    };
                    type HandleElements = {
                        p: JQuery<SVGCircleElement>[];
                        e: JQuery<SVGCircleElement>[];
                        c: JQuery<SVGCircleElement> | null;
                        r: JQuery<SVGCircleElement> | null;
                    };
                    type CornerDrag = {
                        isActive: boolean;
                        fixedIndex: number;
                        fixedPosition: Vector;
                    };
                    type EdgeDrag = {
                        isActive: boolean;
                        fixedIndex: number;
                        fixedPosition: Vector;
                    };
                }
            }
        }
    }
}
//# sourceMappingURL=TcHmiVnRectangle.d.ts.map