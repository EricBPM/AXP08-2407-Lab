declare module TcHmi {
    module Controls {
        module LineTrendExt {
            class LineTrendExtControl extends TcHmi.Controls.Beckhoff.TcHmiTrendLineChart {
                /**
                 * Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elementTemplateRoot: JQuery;
                protected __elementAutoScale: JQuery;
                protected __elementYMin: JQuery;
                protected __elementYMax: JQuery;
                private guid;
                protected __eventAutoScaleChange: string;
                protected __eventYMinChange: string;
                protected __eventYMaxChange: string;
                /**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  */
                __previnit(): void;
                /**
                 * Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values.
                 * @returns {void}
                 */
                __init(): void;
                /**
                * Is called by the system after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __attach(): void;
                /**
                * Is called by the system after the control instance is no longer part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __detach(): void;
                private __onAutoScaleChange;
                private __onYMinChanged;
                private __onYMaxChanged;
                /**
                * Destroy the current control instance.
                * Will be called automatically if system destroys control!
                */
                destroy(): void;
            }
        }
    }
}
