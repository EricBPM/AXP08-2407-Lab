declare module TcHmi.Controls.Beckhoff {
    class TcHmiPdfViewer extends TcHmi.Controls.System.TcHmiControl {
        #private;
        /**
         * Constructor
         * @param element
         * @param pcElement
         * @param attrs
         */
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __viewerPath: string;
        protected __elementTemplateRoot: JQuery;
        protected __elementFrame: JQuery<HTMLIFrameElement>;
        protected __file: string | null | undefined;
        protected __fileAbsolute: string | null | undefined;
        protected __page: number | null | undefined;
        protected __namedDestination: string | null | undefined;
        protected __zoom: 'auto' | 'page-fit' | 'page-width' | 'page-height' | string | null | undefined;
        protected __pageMode: 'none' | 'thumbs' | 'bookmarks' | 'attachments' | null | undefined;
        protected __destroyOnLocaleChanged: DestroyFunction | null | undefined;
        /**
         * If raised, the control object exists in control cache and constructor of each inheritation level was called.
         */
        __previnit(): void;
        /**
         * If raised, all attributes have been set to it's default or dom values.
         */
        __init(): void;
        /**
         * Is called after the control instance gets part of the current DOM.
         */
        __attach(): void;
        /**
         * Is called after the control instance is no longer part of the current DOM.
         */
        __detach(): void;
        /**
         * Destroy the current control instance.
         * Will be called automatically if system destroys control!
         */
        destroy(): void;
        /**
         * Raised if locale is changed.
         */
        protected __onLocaleChanged(): () => void;
        /**
         * Overrides pdfjs locale by localStorage of iframes window
         */
        protected __processLocaleOverride(): void;
        /**
         * Creates absolute file path based on this.__file and stores it in this.__fileAbsolute.
         */
        protected __processFileAbsolute(): void;
        /**
         * Updates the viewer based on known attribute values.
         */
        protected __processViewerUpdate(): void;
        /**
         * Sets the File attribute to a new value.
         * @param valueNew The new value for the File attribute;
         */
        setFile(valueNew: string | null): void;
        /**
         * Returns the current value of the File attribute.
         */
        getFile(): string | null | undefined;
        /**
         * Processes the current value of attribute File.
         */
        protected __processFile(): void;
        /**
         * Sets the Page attribute to a new value.
         * @param valueNew The new value for the Page attribute;
         */
        setPage(valueNew: number | null): void;
        /**
         * Returns the current value of the Page attribute.
         */
        getPage(): string | null | undefined;
        /**
         * Processes the current value of attribute Page.
         */
        protected __processPage(): void;
        /**
         * Sets the NamedDestination attribute to a new value.
         * @param valueNew The new value for the NamedDestination attribute;
         */
        setNamedDestination(valueNew: string | null): void;
        /**
         * Returns the current value of the NamedDestination attribute.
         */
        getNamedDestination(): string | null | undefined;
        /**
         * Processes the current value of attribute NamedDestination.
         */
        protected __processNamedDestination(): void;
        /**
         * Sets the Zoom attribute to a new value.
         * @param valueNew The new value for the Zoom attribute;
         */
        setZoom(valueNew: 'auto' | 'page-fit' | 'page-width' | 'page-height' | string | null): void;
        /**
         * Returns the current value of the Zoom attribute.
         */
        getZoom(): string | null | undefined;
        /**
         * Processes the current value of attribute Zoom.
         */
        protected __processZoom(): void;
        /**
         * Sets the PageMode attribute to a new value.
         * @param valueNew The new value for the Zoom attribute;
         */
        setPageMode(valueNew: 'none' | 'thumbs' | 'bookmarks' | 'attachments' | null): void;
        /**
         * Returns the current value of the Zoom attribute.
         */
        getPageMode(): "none" | "thumbs" | "bookmarks" | "attachments" | null | undefined;
        /**
         * Processes the current value of attribute Zoom.
         */
        protected __processPageMode(): void;
    }
}
//# sourceMappingURL=TcHmiPdfViewer.d.ts.map