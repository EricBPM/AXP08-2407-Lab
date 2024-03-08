declare module TcHmi {
    module Controls {
        module Beckhoff {
            module Vision {
                module Position {
                    /**
                     * Returns the position of the passed HTML element
                     * @param element
                     */
                    function fromElement(element: HTMLElement): Vector;
                    /**
                     * Returns the position of the passed JQuery event
                     * @param event
                     */
                    function fromEvent(event: JQuery.Event): Vector;
                    /**
                     * Returns the position of the passed touch event
                     * @param touch
                     */
                    function fromTouch(touch: Touch): Vector;
                    /**
                     * Returns the central position between the two passed points
                     * @param p1 first point
                     * @param p2 second point
                     */
                    function fromCenter(p1: Vector, p2: Vector): Vector;
                }
            }
        }
    }
}
//# sourceMappingURL=Position.d.ts.map