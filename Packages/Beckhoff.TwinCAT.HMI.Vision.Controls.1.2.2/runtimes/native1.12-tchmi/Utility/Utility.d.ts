declare module TcHmi {
    module Controls {
        module Beckhoff {
            module Vision {
                type Milliseconds = number;
                /**
                 * Returns current timestamp in milliseconds.
                 */
                function timestamp(): Milliseconds;
                /**
                 * Returns true if passed value is between min and max and false otherwise.
                 * @param value value to compare
                 * @param min lower edge
                 * @param max upper edge
                 * @param includeBounds if true, comparison is done with >= and <=; > and < else
                 */
                function between(value: number, min: number, max: number, includeBounds?: boolean): boolean;
                /**
                 * Returns string of passed value with passed number of digits.
                 * Missing digits are filled with leading zeros.
                 * Example: leadingZeros(5, 3) -> '005'
                 * @param value value to be represented as string
                 * @param digits number of total digits of the resulting string
                 */
                function leadingZeros(value: number, digits?: number): string;
                /**
                 * Enum used to specify the shape that can be selected in the TcHmiVnImage control.
                 */
                enum ShapeType {
                    Point = "Point",
                    Line = "Line",
                    Square = "Square",
                    Rectangle = "Rectangle",
                    Circle = "Circle",
                    Ellipse = "Ellipse",
                    Polygon = "Polygon"
                }
                /**
                 * Returns empty coordinates corresponding to the passed shape type.
                 * @param shapeType
                 */
                function GetEmptyCoordinatesForShapeType(shapeType: ShapeType): any;
                /**
                 * Type alias for number vectors
                 */
                type Vector2 = [number, number];
                type Vector4 = [number, number, number, number];
                /**
                 * Type alias for polygons
                 */
                type Polygon = [number, number][];
                /**
                 * Returns a DOM element with the passed tag in the SVG namespace.
                 * @param tag HTML tag of the desired DOM element, e.g. 'circ'
                 */
                function CreateSVG<T>(tag: string): JQuery<T>;
            }
        }
    }
}
//# sourceMappingURL=Utility.d.ts.map