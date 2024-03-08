declare module TcHmi {
    module Controls {
        module Beckhoff {
            module Vision {
                module Rectangle {
                    /**
                     * Converts rectangle from TcVnRotatedRectangle format to TcVnRectangle format
                     * and ignores the angle.
                     * @param rotatedRect
                     */
                    function convertRotatedToUpright(rotatedRect: Types.TcVnRotatedRectangle): Types.TcVnRectangle_DINT;
                    /**
                     * Converts rectangle from TcVnRectangle format to TcVnRotatedRectangle
                     * @param uprightRect
                     * @param angle
                     */
                    function convertUprightToRotated(uprightRect: Types.TcVnRectangle, angle?: number): Types.TcVnRotatedRectangle;
                    /**
                     * Returns corner points of a TcVnRectangle.
                     * List starts with top left (smallest) point and proceedes clockwise.
                     * Example: x0, y0, w10, h10 -> [[0, 0], [10, 0], [10, 10], [0, 10]]
                     * @param uprightRect
                     */
                    function extractUprightCorners(uprightRect: Types.TcVnRectangle): Types.Array4<Types.Array2<number>>;
                    /**
                     * Returns corner points from TcVnRotatedRectangle.
                     * List starts with point, that would be top left if not rotated, and proceedes clockwise.
                     * Example: c[0,0], w1, h1, a45 -> [[0, -1/sqrt2], [1/sqrt2, 0], [0, 1/sqrt2], [-1/sqrt2, 0]]
                     * @param rotatedRect
                     */
                    function extractRotatedCorners(rotatedRect: Types.TcVnRotatedRectangle): Types.Array4<Types.Array2<number>>;
                }
            }
        }
    }
}
//# sourceMappingURL=Rectangle.d.ts.map