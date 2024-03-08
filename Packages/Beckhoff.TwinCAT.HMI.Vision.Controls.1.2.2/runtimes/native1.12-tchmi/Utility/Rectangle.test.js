const fs = require('fs');
const path = require('path');

eval(fs.readFileSync(path.join(__dirname, 'Rectangle.js'), 'utf8'));

const Rectangle = TcHmi.Controls.Beckhoff.Vision.Rectangle;

describe('convertRotatedToUpright(rotatedRect)', () => {

    test('works in simplest case', () => {
        const f = Rectangle.convertRotatedToUpright;
        const rect = {
            aCenter: [0, 0],
            stSize: {
                fWidth: 20,
                fHeight: 10,
            },
            fAngle: 45,
        };
        const target = {
            nX: -10,
            nY: -5,
            nWidth: 20,
            nHeight: 10,
        };
        expect(f(rect)).toMatchObject(target);
    });

});

describe('convertUprightToRotated(uprightRect)', () => {

    test('works in simplest case', () => {
        const f = Rectangle.convertUprightToRotated;
        const rect = {
            nX: -10,
            nY: -5,
            nWidth: 20,
            nHeight: 10,
        };
        const target = {
            aCenter: [0, 0],
            stSize: {
                fWidth: 20,
                fHeight: 10,
            },
            fAngle: 0,
        };
        expect(f(rect)).toMatchObject(target);
    });

});

describe('extractUprightCorners(uprightRect)', () => {

    test('works', () => {
        const f = Rectangle.extractUprightCorners;
        const rect = {
            nX: -10,
            nY: -5,
            nWidth: 20,
            nHeight: 10,
        };
        const target = [
            [-10, -5],
            [10, -5],
            [10, 5],
            [-10, 5],
        ];
        expect(f(rect)).toMatchObject(target);
    });

});

describe('extractRotatedCorners(rotatedRect)', () => {

    test('works for non-rotated square', () => {
        const rect = {
            aCenter: [0, 0],
            stSize: {
                fWidth: 2,
                fHeight: 2,
            },
            fAngle: 0,
        };
        const target = [
            [-1, -1],
            [1, -1],
            [1, 1],
            [-1, 1],
        ];
        const result = Rectangle.extractRotatedCorners(rect);
        expect(result[0][0]).toBeCloseTo(target[0][0]);
        expect(result[0][1]).toBeCloseTo(target[0][1]);
        expect(result[1][0]).toBeCloseTo(target[1][0]);
        expect(result[1][1]).toBeCloseTo(target[1][1]);
        expect(result[2][0]).toBeCloseTo(target[2][0]);
        expect(result[2][1]).toBeCloseTo(target[2][1]);
        expect(result[3][0]).toBeCloseTo(target[3][0]);
        expect(result[3][1]).toBeCloseTo(target[3][1]);
    });

    test('works for 45deg rotated square', () => {
        const rect = {
            aCenter: [0, 0],
            stSize: {
                fWidth: 1,
                fHeight: 1,
            },
            fAngle: 45,
        };
        const target = [
            [0, -1 / Math.sqrt(2)],
            [1 / Math.sqrt(2), 0],
            [0, 1 / Math.sqrt(2)],
            [-1 / Math.sqrt(2), 0],
        ];
        const result = Rectangle.extractRotatedCorners(rect);
        expect(result[0][0]).toBeCloseTo(target[0][0]);
        expect(result[0][1]).toBeCloseTo(target[0][1]);
        expect(result[1][0]).toBeCloseTo(target[1][0]);
        expect(result[1][1]).toBeCloseTo(target[1][1]);
        expect(result[2][0]).toBeCloseTo(target[2][0]);
        expect(result[2][1]).toBeCloseTo(target[2][1]);
        expect(result[3][0]).toBeCloseTo(target[3][0]);
        expect(result[3][1]).toBeCloseTo(target[3][1]);
    });

});
