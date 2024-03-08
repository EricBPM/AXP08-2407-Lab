declare module TcHmi {
    module Controls {
        module Beckhoff {
            module Vision {
                class TcHmiVnImage extends TcHmiVnControl {
                    /**
                     * Constructs the control and registers events
                     * @param element Element from HTML (internal, do not use)
                     * @param pcElement precompiled Element (internal, do not use)
                     * @param attrs Attributes defined in HTML in a special format (internal, do not use)
                     */
                    constructor(element: JQuery, pcElement: JQuery, attrs: ControlAttributeList);
                    /**
                     * Properties
                     */
                    protected __$props: TcHmiVnImage.Properties;
                    /**
                     * SubControls
                     */
                    protected __$controls: TcHmiVnImage.SubControls;
                    /************************************************************
                     * Custom member variables
                     *
                     * Look at type definitions at the bottom for further explanation!
                     */
                    /**
                     * Info on how to display the image
                     */
                    protected __viewer: TcHmiVnImage.IViewer;
                    /**
                     * Tracks interactive gestures.
                     */
                    protected __gestures: TcHmiVnImage.IGestures;
                    /**
                     * Data that is relevant for diagnostics
                     */
                    protected __diagnostics: TcHmiVnImage.IDiagnostics;
                    /************************************************************
                     * Destroy functions
                     */
                    /**
                     * Destroy function for the ScalingSelection event listener
                     */
                    protected __destroyScalingSelectionEventListener: DestroyFunction | null;
                    /**
                     * Destroy function for the FreezeButton event listener
                     */
                    protected __destroyFreezeEventListener: DestroyFunction | null;
                    /**
                     * Destroy function for the DownloadButton event listener
                     */
                    protected __destroyDownloadEventListener: DestroyFunction | null;
                    /**
                     * Destroy function for the Shape (sub-control) event listener
                     */
                    protected __destroyShapeEventListener: DestroyFunction | null;
                    /**
                     * Destroy function for the Shape symbol listener
                     */
                    protected __destroyShapeSymbolListener: DestroyFunction | null;
                    /************************************************************
                     * Life-cycle
                     */
                    /**
                     * Will be called after control is attached to DOM.
                     */
                    __attach(): void;
                    /************************************************************
                     * Event listeners
                     *
                     * "pointer" terminology refers to only single-touches --> multitouch must not call this!
                     */
                    /**
                     * Registers callbacks for all UI events relevant to interaction with the image itself;
                     * e.g. Dragging, ShapeSelection, or PixelInfo
                     */
                    private __registerGestureEventListeners;
                    /**
                     * Gesture: Drag
                     * Sets necessary parameters for tracking dragging, when it starts.
                     * Is supposed to be called, when dragging might start (TouchStart or MouseDown).
                     * @param startPoint First point of the drag gesture.
                     * @param withTouch Whether dragging happens through touch or mouse.
                     */
                    protected __onDragStart(startPoint: Vector): void;
                    /**
                     * Gesture: Drag
                     * Handles dragging movement of the displayed image.
                     * Updates necessary parameters.
                     * Is supposed to be called, when dragging is going on (TouchMove or MouseMove).
                     * @param currentPoint
                     */
                    protected __onDragMove(currentPoint: Vector): void;
                    /**
                     * Gesture: Drag
                     * Sets necessary parameters to stop actions associated with dragging.
                     * Is supposed to be called, when dragging has to stop (TouchEnd or MouseUp).
                     */
                    protected __onDragEnd(): void;
                    /**
                     * Event Handler: Single-finger touch or mouse click starts.
                     * @param event original JQuery event
                     */
                    private __handlePointerStart;
                    /**
                     * Event Handler: Single-finger touch or mouse click moves.
                     * @param event original JQuery event
                     */
                    private __handlePointerMove;
                    /**
                     * Event Handler: Single-finger touch or mouse click ends.
                     * @param event original JQuery event
                     */
                    private __handlePointerEnd;
                    /**
                     * Event Handler: Single-finger touch or mouse click was cancelled.
                     * (e.g. mouse moves out of element)
                     * @param event original JQuery event
                     */
                    private __handlePointerCancel;
                    /**
                     * Event Handler: Mouse wheel is turned.
                     * @param event original JQuery event
                     */
                    private __handleWheel;
                    /**
                     * Event Handler: Touch starts.
                     * @param event original JQuery event
                     */
                    private __handleTouchStart;
                    /**
                     * Event Handler: Touch moves.
                     * @param event original JQuery event
                     */
                    private __handleTouchMove;
                    /**
                     * Event Handler: Touch ends.
                     * @param event original JQuery event
                     */
                    private __handleTouchEnd;
                    /**
                     * Event Handler: Touch is cancelled.
                     * @param event original JQuery event
                     */
                    private __handleTouchCancel;
                    /**
                     * Event Handler: Pinch (touch with two fingers) starts.
                     * @param event original JQuery event
                     */
                    private __handlePinchStart;
                    /**
                     * Event Handler: Pinch (touch with two fingers) moves.
                     * @param event original JQuery event
                     */
                    private __handlePinchMove;
                    /**
                     * Event Handler: Pinch (touch with two fingers) ends.
                     * @param event original JQuery event
                     */
                    private __handlePinchEnd;
                    /**
                     * Event Handler: Pinch (touch with two fingers) is cancelled.
                     * @param event original JQuery event
                     */
                    private __handlePinchCancel;
                    /**
                     * Calculates the position of an event considering necessary adjustments due to
                     * mouse vs. touch usage and clicking "through" the shape control
                     * @param event
                     */
                    private __adjustedEventPosition;
                    /************************************************************
                     * ?
                     */
                    /**
                     * Emits a PixelInfo event (i.e. position + color-value of clicked image spot).
                     * Uses the respective JQuery event and the stored image data to to calculate wanted info.
                     * Is supposed to be called, only if the PixelInfo event shall be issue (e.g. when a click happened).
                     * @param event Original event that led to calling this method. Must contain positional info.
                     */
                    private __computePixelInfo;
                    /**
                     * Loads image from data-URI asynchronously.
                     * @param dataUri
                     */
                    protected __loadImage(dataUri: string): Promise<HTMLImageElement>;
                    /**
                     * Determines if event is a "pointer" event (i.e. finger touch or left mouse-click).
                     * Mostly prevents right-clicks from being counted as valid "pointer" events.
                     * Should not be called for "end" events, since the button state is already changed then.
                     * @param event
                     */
                    private __isValidPointer;
                    /************************************************************
                     * UI Updates
                     */
                    /**
                     * Remove text from pixel info (position + color) DOM elements.
                     */
                    protected __clearPixelInfo(): void;
                    /**
                     * This should be called everytime, you want to make sure that the image that should be displayed actually is displayed.
                     */
                    protected __updateViewer(): Promise<void>;
                    /**
                     * Updates image dataUri + determines if image can be displayed.
                     */
                    protected __updateImageDataUri(): void;
                    /**
                     * Updates the UI according to current image data + settings.
                     */
                    protected __updateImageUI(): Promise<void>;
                    /**
                     * Updates + returns original size of image.
                     * @param dataUri
                     */
                    protected __updateImageData(dataUri: string): Promise<[number, number]>;
                    /**
                     * Updates UI elements other than the image itself (i.e. control bars and preview map).
                     */
                    protected __updateAppearance(): void;
                    /**
                     * Updates UI elements associated with the control bars and updates the image frame accordingly.
                     * Only updates the appearance of those UI elements, not the data.
                     */
                    protected __updateLayout(): void;
                    /**
                     * Updates preview map (little thumbnail overlaying the image).
                     */
                    protected __updateThumbnail(): void;
                    /**
                     * Updates the position of the thumbnail.
                     */
                    protected __updateThumbnailPosition(): void;
                    /**
                     * Updates toolbar.
                     * This mostly includes the existence + position of the elements.
                     */
                    protected __updateToolbar(): void;
                    /**
                     * Updates infobar.
                     * This mostly includes the existence + position of the elements.
                     */
                    protected __updateInfobar(): void;
                    /**
                     * Updates the string value representing the selected shape in the infobar.
                     */
                    protected __updateShapeInfo(shapeType: ShapeType): void;
                    /**
                     * Creates and adds shape button to the Toolbar.
                     * Position and state will not be adjusted.
                     */
                    protected __createShapeButton(): void;
                    /**
                     * Updates the icon of the ShapeButton according to the ShapeSelectionActive property.
                     */
                    protected __updateShapeButtonIcon(): void;
                    /**
                     * Destroys and removes shape button from the Toolbar.
                     */
                    protected __destroyShapeButton(): void;
                    /**
                     * Creates and adds freeze button to the Toolbar.
                     * Position and state will not be adjusted.
                     */
                    protected __createFreezeButton(): void;
                    /**
                     * Updates the icon of the FreezeButton according to the FreezeCurrent property.
                     */
                    protected __updateFreezeButtonIcon(): void;
                    /**
                     * Destroys and removes freeze button from the Toolbar.
                     */
                    protected __destroyFreezeButton(): void;
                    /**
                     * Creates and adds DownloadButton to the Toolbar.
                     */
                    protected __createDownloadButton(): void;
                    /**
                     * Destroys and removes DownloadButton from the Toolbar.
                     */
                    protected __destroyDownloadButton(): void;
                    /**
                     * Creates and adds ScalingSelection to the Toolbar.
                     */
                    protected __createScaleSelection(): void;
                    /**
                     * Updates zoom levels in TopBar.
                     */
                    protected __updateScaleSelectionOptions(): void;
                    /**
                     * Updates the text of the ScalingSelection Combobox based on the Scale property.
                     */
                    protected __updateScaleSelectionValue(): void;
                    /**
                     * Destroys and removes DownloadButton from the Toolbar.
                     */
                    protected __destroyScaleSelection(): void;
                    /**
                     * Creates and adds ImageSelection to the Toolbar.
                     */
                    protected __createImageSelection(): void;
                    /**
                     * Updates options of the ImageSelection combobox in the Toolbar.
                     */
                    protected __updateImageSelectionOptions(): void;
                    /**
                     * Destroys and removes DownloadButton from the Toolbar.
                     */
                    protected __destroyImageSelection(): void;
                    /**
                     * Updates aid elements on top of the image
                     */
                    protected __updateOverlayElements(): void;
                    /**
                     * Updates PixelColor in the Infobar.
                     */
                    protected __updatePixelColorInfo(): void;
                    /**
                     * Updates PixelPosition in the Infobar.
                     */
                    protected __updatePixelPositionInfo(): void;
                    /************************************************************
                     * Diagnostics
                     */
                    /**
                     * Updates the readonly DataRate property based on the size of new incoming data.
                     * @param byteNo Number of bytes of new incoming data.
                     */
                    protected __updateDataRate(byteNo: number): void;
                    /**
                     * Updates ImageRate property.
                     * Assumes newly received image for each call of this method.
                     */
                    protected __updateImageRate(): void;
                    /************************************************************
                     * Misc
                     */
                    /**
                     * Downloads the currently displayed image.
                     * @param fileName If no file name is provided, it will be calculated from 1) the ImageSource symbol or 2) this control's ID.
                     */
                    protected __downloadImage(fileName?: string): void;
                    /**
                     * Downloads an image in the JS' way^^.
                     * @param imageData
                     * @param fileName
                     */
                    private __triggerImageDownload;
                    /**
                     * Initializes the DOM.
                     */
                    private __registerDomElements;
                    /**
                     * Adjusts Scale property and resets Offset property so that image fits into image frame.
                     */
                    protected __fitImageToControl(center?: boolean): void;
                    /**
                     * End the automatic fitting of new images.
                     */
                    protected __cancelFitImageToControl(): void;
                    /**
                     * Adjusts the Offset property, so that the image is centered in the image frame.
                     */
                    protected __centerImageToControl(): void;
                    /**
                     * Make sure that image is not out of bounds and possibly adjust the offset.
                     * @param offset
                     * @param scale
                     */
                    protected __constrainOffset(offset: [number, number], scale: number): [number, number];
                    /************************************************************
                     * Shapes
                     */
                    /**
                     * Activates shape selection.
                     * This means a shape control of given type will be created.
                     * After this, user can select a shape on top of the image.
                     */
                    protected __activateShape(): void;
                    /**
                     * Deactivates the shape selection.
                     * The shape will be cleared and the user cannot select a new shape after this.
                     */
                    protected __deactivateShape(): void;
                    /**
                     * Reset the shape (control).
                     * The shape will still be active after after this, but needs to be selected anew.
                     */
                    protected __clearShape(): void;
                    /**
                     * Resets properties associated with the shape data to their default values.
                     * The shape control itself is not affected.
                     */
                    protected __clearShapeProperties(): void;
                    /**
                     * Adjusts the Scale and Offset properties in such a way, that the user sees the area of the image specified by the "view" parameter.
                     * @param view
                     */
                    protected __setView(view: Types.Array4<number>): void;
                    /**
                     * Method: updateShapeIsInImageArea
                     * updates the ShapeIsInImageArea property
                     */
                    protected __updateShapeIsInImageArea(): void;
                    /**
                     * Method: shapeIsInImageArea
                     * Returns false, if shape is not entirely inside the image area or if the ShapeData is not valid.
                     */
                    protected __shapeIsInImageArea(): boolean;
                    /************************************************************
                     * API
                     */
                    /************************************************************
                     * Category: Color
                     */
                    /**
                     * Property: BarColor
                     */
                    getBarColor(): SolidColor;
                    setBarColor(value: SolidColor): void;
                    protected __processBarColor(): void;
                    /**
                     * Property: ShapeStrokeColor
                     */
                    getShapeStrokeColor(): SolidColor;
                    setShapeStrokeColor(value: SolidColor): void;
                    protected __processShapeStrokeColor(value: SolidColor): void;
                    /**
                     * Property: ShapeHandleColor
                     */
                    getShapeHandleColor(): SolidColor;
                    setShapeHandleColor(value: SolidColor): void;
                    protected __processShapeHandleColor(value: SolidColor): void;
                    /************************************************************
                     * Category: Layout
                     */
                    /**
                     * Property: Width
                     * Inherited from TcHmiControl
                     * Will be called by super.setWidth(value);
                     */
                    __processWidth(): void;
                    /**
                     * Property: Height
                     * Inherited from TcHmiControl
                     * Will be called by super.setHeight(value);
                     */
                    __processHeight(): void;
                    /************************************************************
                     * Category: Common
                     */
                    /**
                     * Property: Image
                     */
                    getImage(): string | null;
                    setImage(value: string | null): void;
                    protected __processImage(value: string | null): void;
                    protected __updateImageBinding(): void;
                    /**
                     * Property: ImageList
                     */
                    getImageList(): TcHmiVnImage.Schema.ImageList;
                    setImageList(value: TcHmiVnImage.Schema.ImageList): void;
                    protected __processImageList(): void;
                    /**
                     * Property: ImageIndex
                     */
                    getImageIndex(): number;
                    setImageIndex(value: number): void;
                    protected __processImageIndex(value: number): void;
                    /**
                     * Property: Alt
                     */
                    getAlt(): string;
                    setAlt(value: string): void;
                    protected __processAlt(): void;
                    /**
                     * Method: downloadImage
                     * @param fileName Filename to download image as
                     */
                    downloadImage(fileName?: string): void;
                    /************************************************************
                     * Category: View
                     */
                    /**
                     * Property: ImageFreeze
                     */
                    getImageFreeze(): boolean;
                    setImageFreeze(value: boolean): void;
                    protected __setImageFreezeInternal(value: boolean): void;
                    protected __processImageFreeze(value: boolean): void;
                    /**
                     * Property: Offset
                     */
                    getOffset(): Vector2;
                    setOffset(value: Vector2): void;
                    protected __setOffsetInternal(value: Vector2): void;
                    protected __processOffset(): void;
                    /**
                     * Property: Scale
                     */
                    getScale(): number;
                    setScale(value: number): void;
                    protected __setScaleInternal(value: number): void;
                    protected __processScale(newValue: any, oldValue: any, internal: any): void;
                    /**
                     * Property: ScaleUnit
                     */
                    getScaleUnit(): '%';
                    setScaleUnit(value: '%'): void;
                    /**
                     * Property: ScaleReference
                     */
                    getScaleReference(): TcHmiVnImage.Schema.ScaleReference;
                    setScaleReference(value: TcHmiVnImage.Schema.ScaleReference): void;
                    protected __processScaleReference(value: TcHmiVnImage.Schema.ScaleReference): void;
                    /**
                     * Property: Draggable
                     */
                    getDraggable(): boolean;
                    setDraggable(value: boolean): void;
                    /**
                     * Property: Scalable
                     */
                    getScalable(): boolean;
                    setScalable(value: boolean): void;
                    /**
                     * Property: ScaleMin
                     */
                    getScaleMin(): number;
                    setScaleMin(value: number): void;
                    /**
                     * Property: ScaleMax
                     */
                    getScaleMax(): number;
                    setScaleMax(value: number): void;
                    /**
                     * Property: ScalingCenter
                     */
                    getScalingCenter(): TcHmiVnImage.Schema.ScalingCenter;
                    setScalingCenter(value: TcHmiVnImage.Schema.ScalingCenter): void;
                    /**
                     * Property: View
                     */
                    getView(): Vector4;
                    /**
                     * Method: setView
                     */
                    setView(view: Types.Array4<number>): void;
                    /**
                     * Method: fitImageToControl
                     */
                    fitImageToControl(center?: boolean): void;
                    /**
                     * Method: centerImageToControl
                     */
                    centerImageToControl(): void;
                    /************************************************************
                     * Category: Toolbar
                     */
                    /**
                     * Property: ToolbarVisible
                     */
                    getToolbarVisible(): boolean;
                    setToolbarVisible(value: boolean): void;
                    protected __processToolbarVisible(value: any): void;
                    /**
                     * Property: ToolbarItems
                     */
                    getToolbarItems(): TcHmiVnImage.Schema.ToolbarItems;
                    setToolbarItems(value: TcHmiVnImage.Schema.ToolbarItems): void;
                    protected __processToolbarItems(value: any): void;
                    /**
                     * Property: ScaleOptions
                     */
                    getScaleOptions(): number[];
                    setScaleOptions(value: number[]): void;
                    protected __processScaleOptions(): void;
                    /**
                     * Property: ToolbarHeight
                     */
                    getToolbarHeight(): number;
                    setToolbarHeight(value: number): void;
                    protected __processToolbarHeight(): void;
                    /**
                     * Property: ToolbarHeightUnit
                     */
                    getToolbarHeightUnit(): 'px';
                    setToolbarHeightUnit(value: 'px'): void;
                    /**
                     * Property: ImageSelectionWidth
                     */
                    getImageSelectionWidth(): number;
                    setImageSelectionWidth(value: number): void;
                    protected __processImageSelectionWidth(): void;
                    /**
                     * Property: ImageSelectionWidthUnit
                     */
                    getImageSelectionWidthUnit(): 'px';
                    setImageSelectionWidthUnit(value: 'px'): void;
                    /**
                     * Property: ScaleSelectionWidth
                     */
                    getScaleSelectionWidth(): number;
                    setScaleSelectionWidth(value: number): void;
                    protected __processScaleSelectionWidth(): void;
                    /**
                     * Property: ScaleSelectionWidthUnit
                     */
                    getScaleSelectionWidthUnit(): 'px';
                    setScaleSelectionWidthUnit(value: 'px'): void;
                    /**
                     * Property: ScaleSelectionEditable
                     */
                    getScaleSelectionEditable(): boolean;
                    setScaleSelectionEditable(value: boolean): void;
                    protected __processScaleSelectionEditable(value: boolean): void;
                    /************************************************************
                     * Category: Infobar
                     */
                    /**
                     * Property: InfobarVisible
                     */
                    getInfobarVisible(): boolean;
                    setInfobarVisible(value: boolean): void;
                    protected __processInfobarVisible(): void;
                    /**
                     * Property: InfobarItems
                     */
                    getInfobarItems(): TcHmiVnImage.Schema.InfobarItems;
                    setInfobarItems(value: TcHmiVnImage.Schema.InfobarItems): void;
                    protected __processInfobarItems(): void;
                    /**
                     * Property: PixelColorFormat
                     */
                    getPixelColorFormat(): TcHmi.IFunction | null;
                    setPixelColorFormat(value: TcHmi.IFunction | null): void;
                    /**
                     * Property: InfobarHeight
                     */
                    getInfobarHeight(): number;
                    setInfobarHeight(value: number): void;
                    protected __processInfobarHeight(): void;
                    /**
                     * Property: InfobarHeightUnit
                     */
                    getInfobarHeightUnit(): 'px';
                    setInfobarHeightUnit(value: 'px'): void;
                    /**
                     * Property: ShapeValueFormat
                     */
                    getShapeValueFormat(): TcHmi.IFunction | null;
                    setShapeValueFormat(value: TcHmi.IFunction | null): void;
                    protected __processInfobarShapeFormat(): void;
                    /************************************************************
                     * Category: Shapes
                     */
                    /**
                     * Property: ShapeSelectionActive
                     */
                    getShapeSelectionActive(): boolean;
                    setShapeSelectionActive(value: boolean): void;
                    protected __setShapeSelectionActiveInternal(value: boolean): void;
                    protected __processShapeSelectionActive(newValue: boolean, oldValue: boolean): void;
                    /**
                     * Property: ShapeType
                     */
                    getShapeType(): ShapeType;
                    setShapeType(value: ShapeType): void;
                    protected __processShapeType(newValue: ShapeType, oldValue: ShapeType): void;
                    /**
                     * Property: ShapeIsRotatable
                     */
                    getShapeIsRotatable(): boolean;
                    setShapeIsRotatable(value: boolean): void;
                    protected __processShapeIsRotatable(newValue: boolean, oldValue: boolean): void;
                    /**
                     * Property: ShapeData
                     */
                    getShapeData(): any;
                    setShapeData(value: any): void;
                    /**
                     * Property: ShapeAutoClear
                     */
                    getShapeAutoClear(): boolean;
                    setShapeAutoClear(value: boolean): void;
                    /**
                     * Method: clearShape
                     */
                    clearShape(): void;
                    /**
                     * Property: ShapeStrokeThickness
                     */
                    getShapeStrokeThickness(): number;
                    setShapeStrokeThickness(value: number): void;
                    protected __processShapeStrokeThickness(value: number): void;
                    /**
                     * Property: ShapeStrokeThicknessUnit
                     */
                    getShapeStrokeThicknessUnit(): 'px';
                    setShapeStrokeThicknessUnit(value: 'px'): void;
                    /**
                     * Property: ShapeHandleSize
                     */
                    getShapeHandleSize(): number;
                    setShapeHandleSize(value: number): void;
                    protected __processShapeHandleSize(value: number): void;
                    /**
                     * Property: ShapeHandleSizeUnit
                     */
                    getShapeHandleSizeUnit(): 'px';
                    setShapeHandleSizeUnit(value: 'px'): void;
                    /**
                     * Property: ShapeClickableSize
                     */
                    getShapeClickableSize(): number;
                    setShapeClickableSize(value: number): void;
                    protected __processShapeClickableSize(value: number): void;
                    /**
                     * Property: ShapeClickableSizeUnit
                     */
                    getShapeClickableSizeUnit(): 'px';
                    setShapeClickableSizeUnit(value: 'px'): void;
                    /**
                     * Property: ShapeAngleInterval
                     */
                    getShapeAngleInterval(): number;
                    setShapeAngleInterval(value: number): void;
                    /**
                     * Property (read-only): ShapeIsInImageArea
                     */
                    getShapeIsInImageArea(): boolean;
                    setShapeIsInImageArea(value: boolean): void;
                    protected __setShapeIsInImageAreaInternal(value: boolean): void;
                    /************************************************************
                     * Category: Thumbnail
                     */
                    /**
                     * Property: ThumbnailVisible
                     */
                    getThumbnailVisible(): boolean;
                    setThumbnailVisible(value: boolean): void;
                    protected __processThumbnailVisible(): void;
                    /**
                     * Property: ThumbnailPosition
                     */
                    getThumbnailPosition(): TcHmiVnImage.Schema.ThumbnailPosition;
                    setThumbnailPosition(value: TcHmiVnImage.Schema.ThumbnailPosition): void;
                    protected __processThumbnailPosition(value: any): void;
                    /**
                     * Property: ThumbnailSize
                     */
                    getThumbnailSize(): number;
                    setThumbnailSize(value: number): void;
                    protected __processThumbnailSize(): void;
                    /**
                     * Property: ThumbnailSizeUnit
                     */
                    getThumbnailSizeUnit(): 'px';
                    setThumbnailSizeUnit(value: 'px'): void;
                    /************************************************************
                     * Category: Overlay
                     */
                    /**
                     * Property: OverlayVisible
                     */
                    getOverlayVisible(): boolean;
                    setOverlayVisible(value: boolean): void;
                    protected __processOverlayVisible(): void;
                    /**
                     * Property: OverlayImage
                     */
                    getOverlayImage(): string | null;
                    setOverlayImage(value: string | null): void;
                    protected __processOverlayImage(): void;
                    /**
                     * Property: OverlayElements
                     */
                    getOverlayElements(): TcHmiVnImage.Schema.OverlayElements;
                    setOverlayElements(value: TcHmiVnImage.Schema.OverlayElements): void;
                    protected __processOverlayElements(): void;
                    /************************************************************
                     * Category: Info
                     */
                    /**
                     * Property: PixelInfoUpdate
                     */
                    getPixelInfoUpdate(): TcHmiVnImage.Schema.PixelInfoUpdate;
                    setPixelInfoUpdate(value: TcHmiVnImage.Schema.PixelInfoUpdate): void;
                    protected __setPixelInfoUpdateInternal(value: TcHmiVnImage.Schema.PixelInfoUpdate): void;
                    /**
                     * Property (readOnly): ImageSize
                     */
                    getImageSize(): Vector2;
                    protected __setImageSizeInternal(value: Vector2): void;
                    protected __processImageSize(value: Vector2): void;
                    /**
                     * Property (readOnly): ImageDisplaySize
                     */
                    getImageDisplaySize(): Vector2;
                    protected __setImageDisplaySizeInternal(value: Vector2): void;
                    /**
                     * Property (readOnly): PixelPosition
                     */
                    getPixelPosition(): Vector2;
                    protected __setPixelPositionInternal(value: Vector2): void;
                    protected __processPixelPosition(): void;
                    /**
                     * Property (readOnly): PixelColor
                     */
                    getPixelColor(): Vector4;
                    protected __setPixelColorInternal(value: Vector4): void;
                    protected __processPixelColor(): void;
                    /************************************************************
                     * Category: History
                     */
                    /**
                     * Property (readOnly): QueueIndex
                     */
                    getQueueIndex(): number;
                    setQueueIndex(value: number): void;
                    protected __setQueueIndexInternal(value: number): void;
                    protected __processQueueIndex(value: number): void;
                    /**
                     * Property (readOnly): QueueSize
                     */
                    getQueueSize(): number;
                    setQueueSize(value: number): void;
                    protected __setQueueSizeInternal(value: number): void;
                    protected __processQueueSize(value: number): void;
                    /************************************************************
                     * Category: Diagnostics
                     */
                    /**
                     * Returns available diagnostics.
                     * This is no official method of the control and only supposed to be directly called via JavaScript.
                     */
                    GetDiagnostics(): Object;
                    /**
                     * Property: AveragingInterval
                     */
                    getAveragingInterval(): number;
                    setAveragingInterval(value: number): void;
                    /**
                     * Property (readOnly): ImageRate
                     */
                    getImageRate(): number;
                    protected __setImageRateInternal(value: number): void;
                    /**
                     * Property (readOnly): ImagesReceived
                     */
                    getImagesReceived(): number;
                    protected __setImagesReceivedInternal(value: number): void;
                    /**
                     * Method: resetImagesReceived
                     */
                    resetImagesReceived(): void;
                    /**
                     * Property: ResetImagesReceived
                     */
                    getDataRate(): number;
                    protected __setDataRateInternal(value: number): void;
                    /**
                     * Property (readOnly): DataReceived
                     */
                    getDataReceived(): number;
                    protected __setDataReceivedInternal(value: number): void;
                    /**
                     * Method: resetDataReceived
                     */
                    resetDataReceived(): void;
                    /**
                     * Property (readOnly): ImageRenderTime
                     */
                    getImageRenderTime(): number;
                    protected __setImageRenderTimeInternal(value: number): void;
                    /************************************************************
                     * Quick access to sub-controls
                     */
                    get SubControls(): any;
                }
                /************************************************************
                 * Associated definitions
                 */
                module TcHmiVnImage {
                    /**
                     * Sets names and default values of this-control's properties.
                     */
                    class Properties extends TcHmiVnControl.Properties {
                        BarColor: SolidColor;
                        ShapeStrokeColor: SolidColor;
                        ShapeHandleColor: SolidColor;
                        Image: string | null;
                        ImageList: Schema.ImageList;
                        ImageIndex: number;
                        Alt: string;
                        ImageFreeze: boolean;
                        Offset: Vector2;
                        Scale: number;
                        ScaleReference: Schema.ScaleReference;
                        Draggable: boolean;
                        Scalable: boolean;
                        ScaleMin: number;
                        ScaleMax: number;
                        ScalingCenter: Schema.ScalingCenter;
                        View: Vector4;
                        ToolbarVisible: boolean;
                        ToolbarItems: Schema.ToolbarItems;
                        ScaleOptions: number[];
                        ToolbarHeight: number;
                        ImageSelectionWidth: number;
                        ScaleSelectionWidth: number;
                        ScaleSelectionEditable: boolean;
                        InfobarVisible: boolean;
                        InfobarItems: Schema.InfobarItems;
                        PixelColorFormat: TcHmi.IFunction | null;
                        InfobarHeight: number;
                        ShapeValueFormat: TcHmi.IFunction | null;
                        ShapeSelectionActive: boolean;
                        ShapeType: ShapeType;
                        ShapeIsRotatable: boolean;
                        ShapeData: any;
                        ShapeAutoClear: boolean;
                        ShapeStrokeThickness: number;
                        ShapeHandleSize: number;
                        ShapeClickableSize: number;
                        ShapeAngleInterval: number;
                        ShapeIsInImageArea: boolean;
                        ThumbnailVisible: boolean;
                        ThumbnailPosition: Schema.ThumbnailPosition;
                        ThumbnailSize: number;
                        OverlayVisible: boolean;
                        OverlayImage: string | null;
                        OverlayElements: Schema.OverlayElements;
                        ImageSize: Vector2;
                        ImageDisplaySize: Vector2;
                        PixelPosition: Vector2;
                        PixelColor: Vector4;
                        PixelInfoUpdate: Schema.PixelInfoUpdate;
                        QueueIndex: number;
                        QueueSize: number;
                        AveragingInterval: number;
                        ImageRate: number;
                        ImagesReceived: number;
                        DataRate: number;
                        DataReceived: number;
                        ImageRenderTime: number;
                    }
                    /**
                     * Defines names and types of sub-controls.
                     */
                    class SubControls extends TcHmiVnControl.SubControls {
                        ImageSelection: TcHmi.Controls.Beckhoff.TcHmiCombobox | null;
                        ScaleSelection: TcHmi.Controls.Beckhoff.TcHmiCombobox | null;
                        ShapeButton: TcHmi.Controls.Beckhoff.TcHmiToggleButton | null;
                        FreezeButton: TcHmi.Controls.Beckhoff.TcHmiToggleButton | null;
                        DownloadButton: TcHmi.Controls.Beckhoff.TcHmiButton | null;
                        Shape: TcHmiVnShape | null;
                    }
                    /**
                     * Defines types from the framework schema.
                     * Refer to ./Schema/Types.Schema.json for more information!
                     */
                    module Schema {
                        type ImageList = {
                            name: string;
                            image: string;
                        }[];
                        enum ScaleReference {
                            ImageSize = "ImageSize",
                            ControlWidth = "ControlWidth",
                            ControlHeight = "ControlHeight",
                            ControlSize = "ControlSize"
                        }
                        enum ScalingCenter {
                            TopLeftCorner = "TopLeftCorner",
                            ImageCenter = "ImageCenter",
                            ControlCenter = "ControlCenter"
                        }
                        type ScaleOptions = number[];
                        enum ThumbnailPosition {
                            TopLeft = "TopLeft",
                            TopRight = "TopRight",
                            BottomLeft = "BottomLeft",
                            BottomRight = "BottomRight"
                        }
                        enum OverlayElementShape {
                            Circle = "Circle",
                            Cross = "Cross",
                            Rectangle = "Rectangle",
                            Frame = "Frame"
                        }
                        type OverlayElements = {
                            shape: OverlayElementShape;
                            color: TcHmi.SolidColor;
                            size: number;
                            thickness: number;
                        }[];
                        enum PixelInfoUpdate {
                            None = "Never",
                            AtClick = "AtClick",
                            AtCursor = "AtCursor"
                        }
                        type ToolbarItems = {
                            imageSelectionVisible?: boolean;
                            scaleSelectionVisible?: boolean;
                            shapeButtonVisible?: boolean;
                            freezeButtonVisible?: boolean;
                            downloadButtonVisible?: boolean;
                        };
                        type InfobarItems = {
                            shapeValueVisible?: boolean;
                            pixelColorVisible?: boolean;
                            pixelPositionVisible?: boolean;
                            imageSizeVisible?: boolean;
                        };
                    }
                    /**
                     * Defines interface for objects needed for diagnostics (DataRate in particular).
                     */
                    interface DataReceivedInfo {
                        /**
                         * Amount of received data in bytes
                         */
                        DataAmount: number;
                        /**
                         * Timestamp of the data receival (in milliseconds)
                         */
                        Timestamp: Milliseconds;
                    }
                    /**
                     * Interface + Defaults for variables associated with viewing the image.
                     */
                    interface IViewer {
                        /**
                         * "Frame" = area in which the image can be displayed,
                         * i.e. control's area minus Toolbar and Infobar.
                         * x and y are relative to the controls' position.
                         */
                        frame: {
                            width: number;
                            height: number;
                            x: number;
                            y: number;
                        };
                        /**
                         * data + scaling options for the image
                         */
                        image: {
                            /**
                             * dataUri of image which is displayed (can theoretically be URL)
                             */
                            dataUri: string;
                            /**
                             * dataUri of image which is currently loaded for color and position analysis
                             */
                            lastLoadedUri: string;
                            /**
                             * whether or not image is displayed
                             */
                            visible: boolean;
                            /**
                             * size in which the image is displayed
                             */
                            screenSize: [number, number];
                            /**
                             * scalingFactor for the image, when ScalingReference if FitToControl
                             */
                            scaleFactor: number;
                            /**
                             * flag indicated that ScalingReference is FitToControl
                             */
                            autoScaling: boolean;
                            /**
                             * queue of last displayed dataUris
                             */
                            historyQueue: Array<string>;
                            /**
                             * if true, all new images should be fitted to the control until the image scale/position was changed
                             */
                            fitActive: boolean;
                            /**
                             * flag to prevent an infinite execution loop when fitting the image
                             */
                            fitDone: boolean;
                            /**
                             * image object just to obtain image size and extract pixel colors
                             */
                            canvas: CanvasRenderingContext2D | null;
                        };
                    }
                    /**
                     * Defines interface to store gesture state in.
                     */
                    interface IGestures {
                        /**
                         * Gesture information related to single-point interactions
                         * (i.e. mouse or single-touch), includes both click as well
                         * as long presses
                         */
                        pointer: {
                            assumedPressState: boolean;
                            mouseDownTime: number;
                            lastKnownPosition: Vector | null;
                        };
                        /**
                         * Gesture info related to dual-touch interactions
                         */
                        pinch: {
                            assumedPinch: boolean;
                            activeTouchIds: Types.Array2<number>;
                            startTouchCenter: Vector;
                            startTouchDistance: number;
                            startImageOffset: Vector;
                            startImageScale: number;
                            startImageSpot: Vector;
                            startTime: Milliseconds;
                        };
                        /**
                         * Similar to pointer, but intended for long long interactions
                         * (relatively speaking)
                         */
                        drag: {
                            inProgress: boolean;
                            lastPosition: Vector;
                        };
                    }
                    /**
                     * Defines interface to store diagnostics state in.
                     */
                    interface IDiagnostics {
                        /**
                         * Tracks amount of image data (bytes) received by the control
                         * (in the form or dataUris, i.e. doesn't word for normal Urls)
                         */
                        dataReceivalList: Array<TcHmiVnImage.DataReceivedInfo>;
                        /**
                         * Tracks images receivals
                         */
                        imageReceivalList: Array<Milliseconds>;
                        /**
                         * Tracks number of lost images (due to slow rendering)
                         */
                        imagesLost: number;
                        /**
                         * Helper variable help the tracking
                         */
                        sourceWasSetEvent: {
                            Time: Milliseconds;
                            Id: number;
                            Last: number;
                        };
                    }
                }
            }
        }
    }
}
//# sourceMappingURL=TcHmiVnImage.d.ts.map