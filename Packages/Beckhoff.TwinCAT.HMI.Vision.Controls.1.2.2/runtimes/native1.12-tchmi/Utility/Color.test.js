const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

eval(fs.readFileSync(path.join(__dirname, 'Color.js'), 'utf8'));

const Color = TcHmi.Controls.Beckhoff.Vision.Color;

describe('Space enum', () => {
    test('exists', () => {
        expect(Color.Space.Gray).toBe('Gray');
        expect(Color.Space.RGB).toBe('RGB');
        expect(Color.Space.HSV).toBe('HSV');
        expect(Color.Space.HLS).toBe('HLS');
    });
});

describe('convertHexStringToArray(hex)', () => {

    test('works for white', () => {
        const hex = '#ffffff';
        const rgb = [255, 255, 255];
        expect(Color.convertHexStringToArray(hex)).toMatchObject(rgb);
    });

    test('works for black', () => {
        const hex = '#000000';
        const rgb = [0, 0, 0];
        expect(Color.convertHexStringToArray(hex)).toMatchObject(rgb);
    });

    test('works for arbitrary color', () => {
        const hex = '#785acc';
        const rgb = [120, 90, 204];
        expect(Color.convertHexStringToArray(hex)).toMatchObject(rgb);
    });

});

describe('convertArrayToHexString(rgb)', () => {

    test('works for white', () => {
        const hex = '#ffffff';
        const rgb = [255, 255, 255];
        expect(Color.convertArrayToHexString(rgb)).toBe(hex);
    });

    test('works for black', () => {
        const hex = '#000000';
        const rgb = [0, 0, 0];
        expect(Color.convertArrayToHexString(rgb)).toBe(hex);
    });

    test('works for arbitrary color', () => {
        const hex = '#785acc';
        const rgb = [120, 90, 204];
        expect(Color.convertArrayToHexString(rgb)).toBe(hex);
    });

});

describe('isValidColorHexString(hex)', () => {

    test('accepts valid 6-digit strings', () => {
        const f = Color.isValidColorHexString;
        expect(f('#012345')).toBe(true);
        expect(f('#678900')).toBe(true);
        expect(f('#abcdef')).toBe(true);
        expect(f('#ABCDEF')).toBe(true);
        expect(f('#ff8800')).toBe(true);
        expect(f('#000000')).toBe(true);
    });

    test('accepts valid 8-digit strings', () => {
        const f = Color.isValidColorHexString;
        expect(f('#01234567')).toBe(true);
        expect(f('#89abcdef')).toBe(true);
        expect(f('#00ABCDEF')).toBe(true);
        expect(f('#ffff8800')).toBe(true);
        expect(f('#ff000000')).toBe(true);
    });

    test('rejects invalid characters', () => {
        const f = Color.isValidColorHexString;
        expect(f('#00000g')).toBe(false);
        expect(f('#hijklm')).toBe(false);
        expect(f('#nopqrs')).toBe(false);
        expect(f('#tuvwxy')).toBe(false);
        expect(f('#TUVWXY')).toBe(false);
        expect(f('#!@#$%^')).toBe(false);
        expect(f('#&*()_+')).toBe(false);
    });

    test('rejects invalid number of digits', () => {
        const f = Color.isValidColorHexString;
        expect(f('#')).toBe(false);
        expect(f('#0')).toBe(false);
        expect(f('#00')).toBe(false);
        expect(f('#000')).toBe(false);
        expect(f('#0000')).toBe(false);
        expect(f('#00000')).toBe(false);
        expect(f('#0000000')).toBe(false);
        expect(f('#000000000')).toBe(false);
        expect(f('#0000000000')).toBe(false);
    });

    test('rejects string without #', () => {
        const f = Color.isValidColorHexString;
        expect(f('000000')).toBe(false);
    });
});

describe('convertRgbToHls(rgb)', () => {

    test('works for arbitrary RGB values', () => {
        const f = Color.convertRgbToHls;
        const x1 = [52, 85, 235];
        const t1 = [115, 143.5, 209];
        const r1 = f(x1);
        expect(r1[0]).toBeCloseTo(t1[0], 0);
        expect(r1[1]).toBeCloseTo(t1[1], 0);
        expect(r1[2]).toBeCloseTo(t1[2], 0);
    });

    test('works for white', () => {
        const f = Color.convertRgbToHls;
        const x1 = [255, 255, 255];
        const t1 = [0, 255, 0];
        const r1 = f(x1);
        expect(r1[0]).toBeCloseTo(t1[0], 0);
        expect(r1[1]).toBeCloseTo(t1[1], 0);
        expect(r1[2]).toBeCloseTo(t1[2], 0);
    });

    test('works for black', () => {
        const f = Color.convertRgbToHls;
        const x1 = [0, 0, 0];
        const t1 = [0, 0, 0];
        const r1 = f(x1);
        expect(r1[0]).toBeCloseTo(t1[0], 0);
        expect(r1[1]).toBeCloseTo(t1[1], 0);
        expect(r1[2]).toBeCloseTo(t1[2], 0);
    });
});

describe('convertRgbToHsv(rgb)', () => {

    test('works for arbitrary RGB values', () => {
        const f = Color.convertRgbToHsv;
        const x1 = [52, 85, 235];
        const t1 = [115, 199, 235];
        const r1 = f(x1);
        expect(r1[0]).toBeCloseTo(t1[0], 0);
        expect(r1[1]).toBeCloseTo(t1[1], 0);
        expect(r1[2]).toBeCloseTo(t1[2], 0);
    });

    test('works for white', () => {
        const f = Color.convertRgbToHsv;
        const x1 = [255, 255, 255];
        const t1 = [0, 0, 255];
        const r1 = f(x1);
        expect(r1[0]).toBeCloseTo(t1[0], 0);
        expect(r1[1]).toBeCloseTo(t1[1], 0);
        expect(r1[2]).toBeCloseTo(t1[2], 0);
    });

    test('works for black', () => {
        const f = Color.convertRgbToHsv;
        const x1 = [0, 0, 0];
        const t1 = [0, 0, 0];
        const r1 = f(x1);
        expect(r1[0]).toBeCloseTo(t1[0], 0);
        expect(r1[1]).toBeCloseTo(t1[1], 0);
        expect(r1[2]).toBeCloseTo(t1[2], 0);
    });
});

describe('convertHlsToRgb(hsl)', () => {

    test('works for arbitrary RGB values', () => {
        const f = Color.convertHlsToRgb;
        const x1 = [52, 235, 85];
        const t1 = [232, 242, 228];
        const r1 = f(x1);
        expect(r1[0]).toBeCloseTo(t1[0], 0);
        expect(r1[1]).toBeCloseTo(t1[1], 0);
        expect(r1[2]).toBeCloseTo(t1[2], 0);
    });

    test('works for white', () => {
        const f = Color.convertHlsToRgb;
        const hls = [0, 255, 0];
        const rgb = [255, 255, 255];
        const r = f(hls);
        expect(r[0]).toBeCloseTo(rgb[0], 0);
        expect(r[1]).toBeCloseTo(rgb[1], 0);
        expect(r[2]).toBeCloseTo(rgb[2], 0);
    });

    test('works for black', () => {
        const f = Color.convertHlsToRgb;
        const x1 = [0, 0, 0];
        const t1 = [0, 0, 0];
        const r1 = f(x1);
        expect(r1[0]).toBeCloseTo(t1[0], 0);
        expect(r1[1]).toBeCloseTo(t1[1], 0);
        expect(r1[2]).toBeCloseTo(t1[2], 0);
    });
});

describe('convertHsvToRgb(hsv)', () => {

    test('works for arbitrary RGB values', () => {
        const f = Color.convertHsvToRgb;
        const x1 = [52, 85, 235];
        const t1 = [178, 235, 157];
        const r1 = f(x1);
        expect(r1[0]).toBeCloseTo(t1[0], 0);
        expect(r1[1]).toBeCloseTo(t1[1], 0);
        expect(r1[2]).toBeCloseTo(t1[2], 0);
    });

    test('works for white', () => {
        const f = Color.convertHsvToRgb;
        const hsv1 = [0, 0, 255];
        const hsv2 = [180, 0, 255];
        const rgb = [255, 255, 255];
        const r1 = f(hsv1);
        const r2 = f(hsv2);
        expect(r1).toMatchObject(r2);
        expect(r1[0]).toBeCloseTo(rgb[0], 0);
        expect(r1[1]).toBeCloseTo(rgb[1], 0);
        expect(r1[2]).toBeCloseTo(rgb[2], 0);
    });

    test('works for black', () => {
        const f = Color.convertHsvToRgb;
        const hsv1 = [0, 0, 0];
        const hsv2 = [0, 255, 0];
        const rgb = [0, 0, 0];
        const r1 = f(hsv1);
        const r2 = f(hsv2);
        expect(r1).toMatchObject(r2);
        expect(r1[0]).toBeCloseTo(rgb[0], 0);
        expect(r1[1]).toBeCloseTo(rgb[1], 0);
        expect(r1[2]).toBeCloseTo(rgb[2], 0);
    });
});

describe('convertHlsToHsv(hls)', () => {

    test('works for arbitrary RGB values', () => {
        const f = Color.convertHlsToHsv;
        const x1 = [52, 235, 85];
        const t1 = [52, 14, 242];
        const r1 = f(x1);
        expect(r1[0]).toBeCloseTo(t1[0], 0);
        expect(r1[1]).toBeCloseTo(t1[1], 0);
        expect(r1[2]).toBeCloseTo(t1[2], 0);
    });

    test('works for white', () => {
        const f = Color.convertHlsToHsv;
        const hls1 = [0, 255, 0];
        const hsv1 = [0, 0, 255];
        const r1 = f(hls1);
        expect(r1[0]).toBeCloseTo(hsv1[0], 0);
        expect(r1[1]).toBeCloseTo(hsv1[1], 0);
        expect(r1[2]).toBeCloseTo(hsv1[2], 0);
        const hls2 = [180, 255, 0];
        const hsv2 = [180, 0, 255];
        const r2 = f(hls2);
        expect(r2[0]).toBeCloseTo(hsv2[0], 0);
        expect(r2[1]).toBeCloseTo(hsv2[1], 0);
        expect(r2[2]).toBeCloseTo(hsv2[2], 0);
    });

    test('works for black', () => {
        const f = Color.convertHlsToHsv;
        const hsl = [0, 0, 0];
        const hsv = [0, 0, 0];
        const r1 = f(hsl);
        expect(r1[0]).toBeCloseTo(hsv[0], 0);
        expect(r1[1]).toBeCloseTo(hsv[1], 0);
        expect(r1[2]).toBeCloseTo(hsv[2], 0);
    });
});

describe('convertHsvToHls(hsv)', () => {

    test('works for arbitrary RGB values', () => {
        const f = Color.convertHsvToHls;
        const x1 = [52, 85, 235];
        const t1 = [52, 196, 169];
        const r1 = f(x1);
        expect(r1[0]).toBeCloseTo(t1[0], 0);
        expect(r1[1]).toBeCloseTo(t1[1], 0);
        expect(r1[2]).toBeCloseTo(t1[2], 0);
    });

    test('works for white', () => {
        const f = Color.convertHsvToHls;
        const hsv1 = [0, 0, 255];
        const hsl1 = [0, 255, 0];
        const r1 = f(hsv1);
        expect(r1[0]).toBeCloseTo(hsl1[0], 0);
        expect(r1[1]).toBeCloseTo(hsl1[1], 0);
        expect(r1[2]).toBeCloseTo(hsl1[2], 0);
        const hsv2 = [180, 0, 255];
        const hls2 = [180, 255, 0];
        const r2 = f(hsv2);
        expect(r2[0]).toBeCloseTo(hls2[0], 0);
        expect(r2[1]).toBeCloseTo(hls2[1], 0);
        expect(r2[2]).toBeCloseTo(hls2[2], 0);
    });

    test('works for black', () => {
        const f = Color.convertHsvToHls;
        const hsv1 = [0, 0, 0];
        const hsv2 = [0, 255, 0];
        const hls = [0, 0, 0];
        const r1 = f(hsv1);
        const r2 = f(hsv2);
        expect(r1).toMatchObject(r2);
        expect(r1[0]).toBeCloseTo(hls[0], 0);
        expect(r1[1]).toBeCloseTo(hls[1], 0);
        expect(r1[2]).toBeCloseTo(hls[2], 0);
    });
});
