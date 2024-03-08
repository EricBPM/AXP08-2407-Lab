declare module TcHmi {
    module Controls {
        module Beckhoff {
            module Vision {
                class TcHmiVnPolygon extends TcHmiVnShape {
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
                    protected __$props: TcHmiVnPolygon.Properties;
                    /**
                     * SubControls
                     */
                    protected __$controls: TcHmiVnPolygon.SubControls;
                    /************************************************************
                     * Custom member variables
                     */
                    protected __points: Vector[];
                    protected __pointHandles: JQuery<SVGCircleElement>[];
                    protected __shape: JQuery<SVGPolylineElement> | null;
                    protected __stopNextEndPropagation: boolean;
                    protected __pointDrag: {
                        lastPoint: Vector;
                        active: boolean;
                        pointIndex: number;
                    };
                    protected __shapeDrag: {
                        lastPoint: Vector;
                        active: boolean;
                    };
                    protected __shapeRotation: {
                        active: boolean;
                        lastAngle: number;
                        center: Vector;
                    };
                    protected __polygonComplete: boolean;
                    protected __rotationHandle: JQuery<SVGCircleElement> | null;
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
                     * Registers elements for handles.
                     */
                    protected __registerHandleElements(): void;
                    /************************************************************
                     * Handlers for UI events
                     */
                    protected __handleSVGClick(event: JQuery.Event): void;
                    protected __handleTouchStart(event: JQuery.Event): void;
                    protected __handleMouseMove(event: JQuery.Event): void;
                    protected __handleNewPointerPosition(position: Vector): void;
                    protected __handleMouseEnd(event: JQuery.Event): void;
                    protected __handleCircleMouseDown(index: number, event: JQuery.Event): void;
                    protected __handleShapeMouseDown(event: JQuery.Event): void;
                    protected __handleRotationMouseDown(event: JQuery.Event): void;
                    /************************************************************
                     * UI updates
                     */
                    /**
                     * Updates the line shape based on data in this.__points
                     */
                    protected __updateShapeUI(): void;
                    protected __createPointAndHandle(position: Vector): void;
                    protected __createHandle(position: Vector, index: number): void;
                    /************************************************************
                     * Data updates
                     */
                    /**
                     * Updates the ShapeData property based on the points.
                     * @param actualChange
                     */
                    protected __updateShapeData(actualChange: boolean): void;
                    /************************************************************
                     * Tools
                     */
                    /**
                     * Returns the position of a UI event. Takes into account the different calculation methods for mouse and touch events.
                     * @param event
                     */
                    protected __positionFromEvent(event: JQuery.Event): Vector;
                    /**
                     * Clears the state of the polygon as if none was ever created.
                     */
                    protected __clearShape(): void;
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
                    getShapeData(): Polygon;
                    setShapeData(value: Polygon): void;
                    protected __setShapeDataInternal(value: Polygon): void;
                    protected __processShapeData(value: Polygon, oldValue: Polygon, internal: boolean): void;
                    /**
                     * Property: MaxPoints
                     */
                    getNumPoints(): number;
                    setNumPoints(value: number): void;
                    protected __processNumPoints(value: number): void;
                    /**
                     * Property: Closed
                     */
                    getClosed(): boolean;
                    setClosed(value: boolean): void;
                    protected __processClosed(): void;
                    /**
                     * Method: clear
                     */
                    clear(): void;
                    /************************************************************
                     * Category: Usage
                     */
                    /**
                     * Property: RotationHandle
                     */
                    getRotationHandle(): boolean;
                    setRotationHandle(value: boolean): void;
                    /**
                     * Property: AngleInterval
                     */
                    getAngleInterval(): number;
                    setAngleInterval(value: number): void;
                    /************************************************************
                     * Category: Appearance
                     */
                    /**
                     * Property: ClickableSize
                     */
                    protected __processClickableSize(): void;
                }
                /************************************************************
                 * Associated definitions
                 */
                module TcHmiVnPolygon {
                    class Properties extends TcHmiVnShape.Properties {
                        ShapeData: Polygon;
                        NumPoints: number;
                        Closed: boolean;
                        RotationHandle: boolean;
                        AngleInterval: number;
                    }
                    class SubControls extends TcHmiVnShape.SubControls {
                    }
                }
            }
        }
    }
}
//# sourceMappingURL=TcHmiVnPolygon.d.ts.map