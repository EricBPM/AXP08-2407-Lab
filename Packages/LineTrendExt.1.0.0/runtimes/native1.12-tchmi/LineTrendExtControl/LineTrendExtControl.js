/*
 * Generated 2/9/2024 10:27:15 AM
 * Copyright (C) 2024
 */
var TcHmi;
(function (TcHmi) {
    let Controls;
    (function (Controls) {
        let LineTrendExt;
        (function (LineTrendExt) {
            class LineTrendExtControl extends TcHmi.Controls.Beckhoff.TcHmiTrendLineChart {
                /*
                Attribute philosophy
                --------------------
                - Local variables are not set while definition in class, so they have the value 'undefined'.
                - On compile the Framework sets the value from HTML or from theme (possibly 'null') via normal setters.
                - The "changed detection" in the setter will result in processing the value only once while compile.
                - Attention: If we have a Server Binding on an Attribute the setter will be called once with null to initialize and later with the correct value.
                */
                /**
                 * Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element, pcElement, attrs) {
                    /** Call base class constructor */
                    super(element, pcElement, attrs);
                    // event ids
                    this.guid = tchmi_create_guid();
                    this.__eventAutoScaleChange = 'change.' + this.guid;
                    this.__eventYMinChange = 'focusout.' + this.guid;
                    this.__eventYMaxChange = 'focusout.' + this.guid;
                }
                /**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  */
                __previnit() {
                    // Fetch template root element
                    this.__elementTemplateRoot = this.__element.find('.TcHmi_Controls_LineTrendExt_LineTrendExtControl-Template');
                    if (this.__elementTemplateRoot.length === 0) {
                        throw new Error('Invalid Template.html');
                    }
                    // get elements
                    this.__elementAutoScale = this.__elementTemplateRoot.find('#checkboxAutoscale');
                    this.__elementYMin = this.__elementTemplateRoot.find('#inputMinTick');
                    this.__elementYMax = this.__elementTemplateRoot.find('#inputMaxTick');
                    // Call __previnit of base class
                    super.__previnit();
                }
                /**
                 * Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values.
                 * @returns {void}
                 */
                __init() {
                    super.__init();
                }
                /**
                * Is called by the system after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __attach() {
                    super.__attach();
                    // subscribe element event listeners
                    this.__elementAutoScale.on(this.__eventAutoScaleChange, (e) => this.__onAutoScaleChange(e));
                    this.__elementYMin.on(this.__eventYMinChange, (e) => this.__onYMinChanged(e));
                    this.__elementYMax.on(this.__eventYMaxChange, (e) => this.__onYMaxChanged(e));
                    // init element values
                    const yAxes = this.getYAxis();
                    if (yAxes) {
                        this.__elementAutoScale[0].checked = yAxes[0].autoScaling;
                        this.__elementYMin.val(yAxes[0].mainTickMinValue || 0);
                        this.__elementYMax.val(yAxes[0].mainTickMaxValue || 0);
                    }
                    /**
                     * Initialize everything which is only available while the control is part of the active dom.
                     */
                }
                /**
                * Is called by the system after the control instance is no longer part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __detach() {
                    super.__detach();
                    /**
                     * Disable everything which is not needed while the control is not part of the active dom.
                     * No need to listen to events for example!
                     */
                    // unsubscribe event listeners
                    this.__elementAutoScale.off(this.__eventAutoScaleChange);
                    this.__elementYMin.off(this.__eventYMinChange);
                    this.__elementYMax.off(this.__eventYMaxChange);
                }
                // auto-scale checkbox
                __onAutoScaleChange(e) {
                    const autoScale = e.target.checked;
                    const yAxes = JSON.parse(JSON.stringify(this.getYAxis()));
                    if (yAxes) {
                        yAxes[0].autoScaling = autoScale;
                    }
                    this.setYAxis(yAxes);
                }
                // min/max y scale
                __onYMinChanged(e) {
                    // get element value
                    const yMin = parseFloat(e.target.value);
                    // get current y axis definitions
                    const yAxes = this.getYAxis();
                    if (yAxes) {
                        // if value is different
                        if (yMin !== yAxes[0].mainTickMinValue) {
                            // perform deep copy
                            const copy = JSON.parse(JSON.stringify(yAxes));
                            // set value
                            copy[0].mainTickMinValue = yMin;
                            // call control setter
                            this.setYAxis(copy);
                        }
                    }
                }
                __onYMaxChanged(e) {
                    const yMax = parseFloat(e.target.value);
                    const yAxes = this.getYAxis();
                    if (yAxes) {
                        if (yMax !== yAxes[0].mainTickMaxValue) {
                            const copy = JSON.parse(JSON.stringify(yAxes));
                            copy[0].mainTickMaxValue = yMax;
                            this.setYAxis(copy);
                        }
                    }
                }
                /**
                * Destroy the current control instance.
                * Will be called automatically if system destroys control!
                */
                destroy() {
                    /**
                    * While __keepAlive is set to true control must not be destroyed.
                    */
                    if (this.__keepAlive) {
                        return;
                    }
                    super.destroy();
                    /**
                    * Free resources like child controls etc.
                    */
                }
            }
            LineTrendExt.LineTrendExtControl = LineTrendExtControl;
        })(LineTrendExt = Controls.LineTrendExt || (Controls.LineTrendExt = {}));
    })(Controls = TcHmi.Controls || (TcHmi.Controls = {}));
})(TcHmi || (TcHmi = {}));
/**
* Register Control
*/
TcHmi.Controls.registerEx('LineTrendExtControl', 'TcHmi.Controls.LineTrendExt', TcHmi.Controls.LineTrendExt.LineTrendExtControl);
//# sourceMappingURL=LineTrendExtControl.js.map