declare module TcHmi {
    module Controls {
        module Beckhoff {
            module Vision {
                module Color {
                    /**
                     * Enum used to specify conversions between color formats.
                     */
                    enum Space {
                        Gray = "Gray",
                        RGB = "RGB",
                        HSV = "HSV",
                        HLS = "HLS"
                    }
                    /**
                     * Converts hex string to array with 8bit elements.
                     * Example: '#ff0000' -> [255, 0, 0]
                     * @param hex '#' prefix optional | even number of hex digits will be used
                     */
                    function convertHexStringToArray(hex: string): number[];
                    /**
                     * Converts array with 8bit elements to hex string
                     * Example: [255, 0, 0] -> '#ff0000'
                     * @param rgb
                     */
                    function convertArrayToHexString(rgb: number[]): string;
                    /**
                     * Returns true if passed string is a valid hex string and false otherwise.
                     * @param hex string to test
                     */
                    function isValidColorHexString(hex: string): boolean;
                    /**
                     * Converts RGB values to HLS values.
                     * Input ranges: [0,255], [0,255], [0,255]
                     * Output ranges: [0,180], [0,255], [0,255]
                     * Source: https://en.wikipedia.org/wiki/HSL_and_HSV#From_RGB
                     * @param rgb array representing the R, G, B channels
                     */
                    function convertRgbToHls(rgb: [number, number, number]): [number, number, number];
                    /**
                     * Converts RGB values to HSV values.
                     * Input ranges: [0,255], [0,255], [0,255]
                     * Output ranges: [0,180], [0,255], [0,255]
                     * Source: https://en.wikipedia.org/wiki/HSL_and_HSV#From_RGB
                     * @param rgb array representing the R, G, B channels
                     */
                    function convertRgbToHsv(rgb: [number, number, number]): [number, number, number];
                    /**
                     * Converts HLS values to RGB values.
                     * Input ranges: [0,180], [0,255], [0,255]
                     * Output ranges: [0,255], [0,255], [0,255]
                     * Source: https://en.wikipedia.org/wiki/HSL_and_HSV#HSL_to_RGB
                     * @param hls array representing the H, L, S channels
                     */
                    function convertHlsToRgb(hls: [number, number, number]): [number, number, number];
                    /**
                     * Converts HSV values to RGB values.
                     * Input ranges: [0,180], [0,255], [0,255]
                     * Output ranges: [0,255], [0,255], [0,255]
                     * Source: https://en.wikipedia.org/wiki/HSL_and_HSV#HSV_to_RGB
                     * @param hsv array representing the H, S, V channels
                     */
                    function convertHsvToRgb(hsv: [number, number, number]): [number, number, number];
                    /**
                     * Converts HLS values to HSV values.
                     * Input ranges: [0,180], [0,255], [0,255]
                     * Output ranges: [0,180], [0,255], [0,255]
                     * Source: https://en.wikipedia.org/wiki/HSL_and_HSV#HSL_to_HSV
                     * @param hls array representing the H, L, S channels
                     */
                    function convertHlsToHsv(hls: [number, number, number]): [number, number, number];
                    /**
                     * Converts HSV values to HLS values.
                     * Input ranges: [0,180], [0,255], [0,255]
                     * Output ranges: [0,180], [0,255], [0,255]
                     * @param hsv array representing the H, S, V channels
                     */
                    function convertHsvToHls(hsv: [number, number, number]): [number, number, number];
                }
            }
        }
    }
}
//# sourceMappingURL=Color.d.ts.map