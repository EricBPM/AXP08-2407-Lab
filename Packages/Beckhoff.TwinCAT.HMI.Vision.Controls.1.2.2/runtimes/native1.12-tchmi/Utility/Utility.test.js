const fs = require('fs');
const path = require('path');

eval(fs.readFileSync(path.join(__dirname, 'Utility.js'), 'utf8'));

const Vision = TcHmi.Controls.Beckhoff.Vision;

describe('timestamp()', () => {
    test('doesn\'t return old timestamps', () => {
        // 1623324951970 is Thu Jun 10 2021 13:35:51 GMT+0200 (Central European Summer Time)
        expect(Vision.timestamp()).toBeGreaterThan(1623324951970);
    });
});

describe('between(...)', () => {
    test('works for values inside', () => {
        expect(Vision.between(1, 0, 2)).toBe(true);
    });
    test('works for values outside', () => {
        expect(Vision.between(3, 0, 2)).toBe(false);
    });
    test('works for bounds included', () => {
        expect(Vision.between(2, 0, 2, true)).toBe(true);
    });
    test('works for bounds excluded', () => {
        expect(Vision.between(2, 0, 2, false)).toBe(false);
    });
});

describe('leadingZeros(value)', () => {
    test('works for normal case', () => {
        expect(Vision.leadingZeros(0, 3)).toBe('000');
        expect(Vision.leadingZeros(5, 3)).toBe('005');
        expect(Vision.leadingZeros(55, 3)).toBe('055');
        expect(Vision.leadingZeros(555, 3)).toBe('555');
    });
    test('works for standard of digits = 2', () => {
        expect(Vision.leadingZeros(0)).toBe('00');
        expect(Vision.leadingZeros(5)).toBe('05');
        expect(Vision.leadingZeros(55)).toBe('55');
    });
    test('throws when no value is provided', () => {
        expect(() => Vision.leadingZeros()).toThrow();
    });
    test('doesn\'t cut value when digits is too small', () => {
        expect(Vision.leadingZeros(555, 2)).toBe('555');
    });
});

describe('ShapeType enum', () => {
    test('exists', () => {
        expect(Vision.ShapeType.Point).toBe('Point');
        expect(Vision.ShapeType.Line).toBe('Line');
        expect(Vision.ShapeType.Rectangle).toBe('Rectangle');
        expect(Vision.ShapeType.Ellipse).toBe('Ellipse');
        expect(Vision.ShapeType.Polygon).toBe('Polygon');
    });
});

describe('GetEmptyCoordinatesFromShapeType(shapeType)', () => {
    const G = Vision.GetEmptyCoordinatesForShapeType;
    test('yields espected values for all shape types', () => {
        const rotatedRect = {
            aCenter: [0, 0],
            fAngle: 0,
            stSize: {
                fWidth: 0,
                fHeight: 0,
            },
        };
        expect(G(Vision.ShapeType.Point)).toMatchObject([[0, 0]]);
        expect(G(Vision.ShapeType.Line)).toMatchObject([[0, 0], [0, 0]]);
        expect(G(Vision.ShapeType.Square)).toMatchObject(rotatedRect);
        expect(G(Vision.ShapeType.Rectangle)).toMatchObject(rotatedRect);
        expect(G(Vision.ShapeType.Circle)).toMatchObject(rotatedRect);
        expect(G(Vision.ShapeType.Ellipse)).toMatchObject(rotatedRect);
        expect(G(Vision.ShapeType.Polygon)).toMatchObject([]);
    });
});

// CreateSVG(tag) is not tested, because JQuery is currently
// not available in this test suite.
