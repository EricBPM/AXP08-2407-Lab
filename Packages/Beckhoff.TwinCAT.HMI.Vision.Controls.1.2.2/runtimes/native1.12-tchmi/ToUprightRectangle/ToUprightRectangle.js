var TcHmi;
(function (TcHmi) {
    let Functions;
    (function (Functions) {
        let Beckhoff;
        (function (Beckhoff) {
            let Vision;
            (function (Vision) {
                function ToUprightRectangle(rectangle) {
                    if (rectangle == null) {
                        throw new Error('Rectangle invalid.');
                    }
                    return TcHmi.Controls.Beckhoff.Vision.Rectangle.convertRotatedToUpright(rectangle);
                }
                Vision.ToUprightRectangle = ToUprightRectangle;
            })(Vision = Beckhoff.Vision || (Beckhoff.Vision = {}));
        })(Beckhoff = Functions.Beckhoff || (Functions.Beckhoff = {}));
        Functions.registerFunctionEx('ToUprightRectangle', 'TcHmi.Functions.Beckhoff.Vision', Beckhoff.Vision.ToUprightRectangle);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi || (TcHmi = {}));
