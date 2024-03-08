var TcHmi;
(function (TcHmi) {
    let Functions;
    (function (Functions) {
        let Beckhoff;
        (function (Beckhoff) {
            let Vision;
            (function (Vision) {
                function ToRotatedRectangle(rectangle) {
                    if (rectangle == null) {
                        throw new Error('Rectangle invalid.');
                    }
                    return TcHmi.Controls.Beckhoff.Vision.Rectangle.convertUprightToRotated(rectangle);
                }
                Vision.ToRotatedRectangle = ToRotatedRectangle;
            })(Vision = Beckhoff.Vision || (Beckhoff.Vision = {}));
        })(Beckhoff = Functions.Beckhoff || (Functions.Beckhoff = {}));
        Functions.registerFunctionEx('ToRotatedRectangle', 'TcHmi.Functions.Beckhoff.Vision', Beckhoff.Vision.ToRotatedRectangle);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi || (TcHmi = {}));
