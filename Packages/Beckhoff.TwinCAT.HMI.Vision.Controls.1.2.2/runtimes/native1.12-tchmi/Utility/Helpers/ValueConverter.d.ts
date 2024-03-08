declare module TcHmi {
    module Controls {
        module Beckhoff {
            module Vision {
                module Helpers {
                    class ValueConverter {
                        static convertArrayItems<T = any>(value: any, length: number, elementsConverter?: CallableFunction): Array<T> | null;
                        static toArray2<T = any>(value: any, elementsConverter?: CallableFunction): Types.Array2<T> | null;
                        static toArray3<T = any>(value: any, elementsConverter?: CallableFunction): Types.Array3<T> | null;
                        static toArray4<T = any>(value: any, elementsConverter?: CallableFunction): Types.Array4<T> | null;
                        static toSolidColor(value: any): TcHmi.SolidColor | null;
                    }
                }
            }
        }
    }
}
//# sourceMappingURL=ValueConverter.d.ts.map