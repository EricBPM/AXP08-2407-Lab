declare module TcHmi {
    module Controls {
        module Beckhoff {
            module Vision {
                /**
                 * Vector that supports arithmetic operations
                 *
                 * The first three elements of the vector are accessible via x, y and z getters/setters.
                 *
                 * Input checks are mostly omitted for performance reasons and because typescript covers most of it.
                 */
                class Vector extends Array<number> {
                    /**
                     * @param items All items (rest parameters) will be the elements of the new vector.
                     */
                    constructor(...items: Array<number>);
                    /**
                     * similar to vector[0]
                     */
                    get x(): number;
                    set x(newX: number);
                    /**
                     * similar to vector[1]
                     */
                    get y(): number;
                    set y(newY: number);
                    /**
                     * similar to vector[2]
                     */
                    get z(): number;
                    set z(newZ: number);
                    /**
                     * Returns the sum of this vector and the passed vector.
                     * The length of this vector is dominant.
                     * @param vector summand
                     */
                    plus(vector: Vector): Vector;
                    /**
                     * Returns the difference between the passed vector and this vector.
                     * The length of this vector is dominant.
                     * @param vector subtrahend
                     */
                    minus(vector: Vector): Vector;
                    /**
                     * Returns the product of this vector and the passed scalar
                     * @param scalar factor
                     */
                    times(scalar: number): Vector;
                    /**
                     * Returns L1 norm of this vector.
                     */
                    l1(): number;
                    /**
                     * Returns L2 norm of this vector.
                     */
                    l2(): number;
                    /**
                     * Returns L2 distance between this vector and passed vector.
                     * @param vector
                     */
                    distanceTo(vector: Vector): number;
                    /**
                     * Returns this vector with Math.abs() applied to all elements.
                     */
                    abs(): Vector;
                    /**
                     * Returns this vector with Math.round() applied to all elements.
                     */
                    round(): Vector;
                    /**
                     * Returns array with the same elements as this vector.
                     */
                    toArray(): Array<number>;
                    /**
                     * Returns deep copy of this vector.
                     */
                    copy(): Vector;
                    /**
                     * Composes the current vector out of a linear combination of two other vectors v1 and v2.
                     * Therefore, v1 and v2 must be linearly independent!
                     * Input checks are omitted for performance reasons.
                     * @param v1 first vector of linear combination
                     * @param v2 first vector of linear combination
                     * @param target vector to be composed
                     */
                    compose2d(v1: Vector, v2: Vector): Vector;
                    /**
                     * Returns this vector rotated by the passed angle.
                     * @param angle angle in radians
                     */
                    rotate2d(angle: number): Vector;
                    /**
                     * Returns the quadrant number [1-4] of this vector.
                     */
                    quadrant2d(): number;
                    /**
                     * Returns vector with the same elements as the passed array.
                     * @param array array of numbers
                     */
                    static fromArray(array: Array<number>): Vector;
                    /**
                     * Returns vector with only 0 elements of passed length.
                     * @param length length of returned vector
                     */
                    static zeros(length: number): Vector;
                    /**
                     * Returns unit vector in direction of passed angle.
                     * @param angle 0 is (1, 0) | goes clockwise in radians
                     */
                    static fromAngle(angle: number): Vector;
                    /**
                     * Returns unit vector in direction of passed angle.
                     * @param angle 0 is (1, 0) | goes clockwise in degrees
                     */
                    static fromAngleDeg(angle: number): Vector;
                }
            }
        }
    }
}
//# sourceMappingURL=Vector.d.ts.map