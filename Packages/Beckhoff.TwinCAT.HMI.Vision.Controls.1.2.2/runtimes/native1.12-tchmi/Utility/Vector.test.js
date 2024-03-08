
const fs = require('fs');
const path = require('path');

eval(fs.readFileSync(path.join(__dirname, 'Vector.js'), 'utf8'));

const Vector = TcHmi.Controls.Beckhoff.Vision.Vector;

describe('v.x, v.y, v.z', () => {

    test('getters work', () => {
        const v1 = new Vector(1);
        const v2 = new Vector(2, 3);
        const v3 = new Vector(4, 5, 6);
        expect(v1.x).toBe(1);
        expect(v1.y).toBe(0);
        expect(v1.z).toBe(0);
        expect(v2.x).toBe(2);
        expect(v2.y).toBe(3);
        expect(v2.z).toBe(0);
        expect(v3.x).toBe(4);
        expect(v3.y).toBe(5);
        expect(v3.z).toBe(6);
    });

    test('setters work', () => {
        const v1 = new Vector(1);
        const v2 = new Vector(1, 2, 3);
        expect(() => v1.x = 2).not.toThrow();
        expect(() => v1.y = 2).not.toThrow();
        expect(() => v1.z = 2).not.toThrow();
        expect(v1.x).toBe(2);
        expect(v1.y).toBe(2);
        expect(v1.z).toBe(2);
        expect(() => v2.x = 4).not.toThrow();
        expect(() => v2.y = 5).not.toThrow();
        expect(() => v2.z = 6).not.toThrow();
        expect(v2.x).toBe(4);
        expect(v2.y).toBe(5);
        expect(v2.z).toBe(6);
    });

});

describe('v.length', () => {

    test('gives vector length', () => {
        const v0 = new Vector();
        const v1 = new Vector(1);
        const v2 = new Vector(2, 3);
        const v3 = new Vector(4, 5, 6);
        const v4 = new Vector(7, 8, 9, 10);
        expect(v0.length).toBe(0);
        expect(v1.length).toBe(1);
        expect(v2.length).toBe(2);
        expect(v3.length).toBe(3);
        expect(v4.length).toBe(4);
    });

});

describe('v.plus(vector)', () => {

    test('returns sum of vectors', () => {
        const v1 = new Vector(1, 2);
        const v2 = new Vector(3, 4);
        const v3 = new Vector(3, -4);
        const t1 = new Vector(4, 6);
        const t2 = new Vector(4, -2);
        expect(v1.plus(v2)).toMatchObject(t1);
        expect(v1.plus(v3)).toMatchObject(t2);
    });

    test('length of this vector dominates', () => {
        const v1 = new Vector(1, 2);
        const v2 = new Vector(1, 2, 3);
        const t1 = new Vector(2, 4);
        const t2 = new Vector(2, 4, 3);
        expect(v1.plus(v2)).toMatchObject(t1);
        expect(v2.plus(v1)).toMatchObject(t2);
    });

});

describe('v.minus(vector)', () => {

    test('returns diff of vectors', () => {
        const v1 = new Vector(1, 2);
        const v2 = new Vector(3, 4);
        const v3 = new Vector(3, -4);
        const t1 = new Vector(-2, -2);
        const t2 = new Vector(-2, 6);
        expect(v1.minus(v2)).toMatchObject(t1);
        expect(v1.minus(v3)).toMatchObject(t2);
    });

    test('length of this vector dominates', () => {
        const v1 = new Vector(1, 2);
        const v2 = new Vector(1, 2, 3);
        const t1 = new Vector(0, 0);
        const t2 = new Vector(0, 0, 3);
        expect(v1.minus(v2)).toMatchObject(t1);
        expect(v2.minus(v1)).toMatchObject(t2);
    });

});

describe('v.times(scalar)', () => {

    test('returns product with scalar', () => {
        const v1 = new Vector(1, 2, 3);
        const t1 = new Vector(1.5, 3, 4.5);
        const t2 = new Vector(2, 4, 6);
        const t3 = new Vector(-2, -4, -6);
        expect(v1.times(1.5)).toMatchObject(t1);
        expect(v1.times(2)).toMatchObject(t2);
        expect(v1.times(-2)).toMatchObject(t3);
    });

});

describe('norms', () => {

    test('v.l1() gives L1 norm', () => {
        expect((new Vector(0, 0, 0)).l1()).toBe(0);
        expect((new Vector(3, 4)).l1()).toBe(7);
        expect((new Vector(-3, 4)).l1()).toBe(7);
        expect((new Vector(1, 2, 3)).l1()).toBe(6);
    });

    test('v.l2() gives L2 norm', () => {
        expect((new Vector(0, 0, 0)).l2()).toBe(0);
        expect((new Vector(3, 4)).l2()).toBe(5);
        expect((new Vector(-3, 4)).l2()).toBe(5);
        expect((new Vector(1, 2, 3)).l2()).toBeCloseTo(3.74);
    });

    test('v1.distanceTo(v2) gives L2 norm of vector diff', () => {
        const v1 = new Vector(1, 2);
        const v2 = new Vector(3, 4);
        expect(v1.distanceTo(v2)).toBeCloseTo(2 * Math.sqrt(2));
    });

});

describe('v.abs()', () => {

    test('does not change positive elements', () => {
        const v = new Vector(1, 2, 3);
        expect(v.abs()).toMatchObject(v);
    });

    test('makes negative elements positive', () => {
        const v = new Vector(-1, 2, -3);
        const t = new Vector(1, 2, 3);
        expect(v.abs()).toMatchObject(t);
    });

    test('does not change zeros', () => {
        const v = new Vector(0, 0, 0);
        expect(v.abs()).toMatchObject(v);
    });

    test('doesn\'t throw for empty vectors', () => {
        const v = new Vector();
        expect(() => v.abs()).not.toThrow();
    });

});

describe('v.round()', () => {

    test('gives only integer elements', () => {
        const v1 = new Vector(1.5, 2.5, 3.5);
        const r1 = v1.round();
        expect(r1.x).toBe(2);
        expect(r1.y).toBe(3);
        expect(r1.z).toBe(4);
    });

    test('doesn\'t throw', () => {
        const v1 = new Vector();
        const v2 = new Vector(1.5);
        const v3 = new Vector(1.5, 2.5, 3.5);
        expect(() => v1.round()).not.toThrow();
        expect(() => v2.round()).not.toThrow();
        expect(() => v3.round()).not.toThrow();
    });

});

describe('v.toArray()', () => {

    test('removes all remains of the Vector class', () => {
        const v1 = new Vector(1, 2, 3);
        const a1 = v1.toArray();
        expect(a1 instanceof Array).toBe(true);
        expect(a1 instanceof Vector).toBe(false);
        const v2 = new Vector(5);
        const a2 = v2.toArray();
        expect(a2 instanceof Array).toBe(true);
        expect(a2 instanceof Vector).toBe(false);
    });

    test('keeps the elements untouched', () => {
        const v1 = new Vector(1, 2, 3);
        const t1 = [1, 2, 3];
        expect(v1.toArray()).toMatchObject(t1);
        const v2 = new Vector(5);
        const t2 = [5];
        expect(v2.toArray()).toMatchObject(t2);
    });

});

describe('v.copy()', () => {

    test('copies the elements exactly', () => {
        v1 = new Vector(1, 2, 3);
        v2 = new Vector(1, 2, 3);
        c = v1.copy();
        expect(c).toMatchObject(v2);
    });

    test('makes a deep copy, i.e. no reference', () => {
        const v = new Vector(1);
        const c = v.copy();
        c.x = 2;
        expect(v.x).toBe(1);
    });

});

describe('v.compose2d(vector)', () => {

    test('throws for invalid arguments', () => {
        const v1 = new Vector(2, 3);
        const v2 = new Vector(1, 0);
        expect(() => v1.compose2d(v2)).toThrow();
        expect(() => v1.compose2d()).toThrow();
    });

    test('works with zero vector', () => {
        const v1 = new Vector(0, 0);
        const v2 = new Vector(1, 0);
        const v3 = new Vector(0, 1);
        let result;
        expect(() => result = v1.compose2d(v2, v3)).not.toThrow();
        // written this way to accept -0 as 0
        expect(result[0] === 0).toBe(true);
        expect(result[1] === 0).toBe(true);
    });

    test('works in reasonable situation 1', () => {
        const v1 = new Vector(2, 3);
        const v2 = new Vector(1, 0);
        const v3 = new Vector(0, 1);
        const t = new Vector(2, 3);
        expect(v1.compose2d(v2, v3)).toMatchObject(t);
    });

    test('works in reasonable situation 2', () => {
        const v1 = new Vector(269, 112);
        const v2 = new Vector(1, 0);
        const v3 = new Vector(1, 1);
        const t = new Vector(157, 112);
        const r = v1.compose2d(v2, v3)
        expect(r.x).toBeCloseTo(t.x);
        expect(r.y).toBeCloseTo(t.y);
    });

    test('works in reasonable situation 3', () => {
        const v1 = new Vector(269, 112);
        const v2 = new Vector(1, 0);
        const v3 = new Vector(6.123233995736766e-17, 1);
        const t = new Vector(269, 112);
        const r = v1.compose2d(v2, v3)
        expect(r.x).toBeCloseTo(t.x);
        expect(r.y).toBeCloseTo(t.y);
    });

});

describe('v.rotate2d()', () => {

    test('leaves vector untouched for 0 angle', () => {
        const v1 = new Vector(1, 0);
        expect(v1.rotate2d(0)).toMatchObject(v1);
    });

    test('leaves 0 vector untouched for any angle', () => {
        const v1 = new Vector(0, 0);
        expect(v1.rotate2d(0)).toMatchObject([0, 0]);
        expect(v1.rotate2d(1)).toMatchObject([0, 0]);
        expect(v1.rotate2d(2)).toMatchObject([-0, 0]);
    });

    test('works for different angles', () => {
        const v1 = new Vector(1, 0);
        const t1 = new Vector(0.5403023058681398, 0.8414709848078965);
        const t2 = new Vector(-0.4161468365471424, 0.9092974268256817);
        expect(v1.rotate2d(0)).toMatchObject(v1);
        expect(v1.rotate2d(1)).toMatchObject(t1);
        expect(v1.rotate2d(2)).toMatchObject(t2);
    });

});

describe('v.quadrant2d()', () => {

    test('works for each quadrant', () => {
        const v1 = new Vector(1, 1);
        const v2 = new Vector(1, -1);
        const v3 = new Vector(-1, -1);
        const v4 = new Vector(-1, 1);
        expect(v1.quadrant2d()).toBe(1);
        expect(v2.quadrant2d()).toBe(2);
        expect(v3.quadrant2d()).toBe(3);
        expect(v4.quadrant2d()).toBe(4);
    });

    test('works at quadrant edges', () => {
        const v1 = new Vector(0, 1);
        const v2 = new Vector(1, 0);
        const v3 = new Vector(0, -1);
        const v4 = new Vector(-1, 0);
        expect(v1.quadrant2d()).toBe(1);
        expect(v2.quadrant2d()).toBe(1);
        expect(v3.quadrant2d()).toBe(2);
        expect(v4.quadrant2d()).toBe(4);
    });

    test('works at {0,0}', () => {
        const v1 = new Vector(0, 0);
        expect(v1.quadrant2d()).toBe(1);
    });

});

describe('Vector.fromArray(array)', () => {

    test('works in general', () => {
        const a1 = [1, 2, 3];
        const v1 = Vector.fromArray(a1);
        expect(v1 instanceof Vector).toBe(true);
        expect(v1).toMatchObject(a1);
    });

});

describe('Vector.zeros(length)', () => {

    test('works in general', () => {
        const v1 = Vector.zeros(5);
        const t1 = [0, 0, 0, 0, 0];
        expect(v1 instanceof Vector).toBe(true);
        expect(v1).toMatchObject(t1);
    });

});

describe('Vector.fromAngle(angle)', () => {

    test('works with 0 angle', () => {
        const v = Vector.fromAngle(0);
        expect(v.x).toBe(1);
        expect(v.y).toBe(0);
    });

    test('works with pi/2 angle', () => {
        const v = Vector.fromAngle(Math.PI / 2);
        expect(v.x).toBeCloseTo(0);
        expect(v.y).toBeCloseTo(1);
    });

    test('works in 1st quadrant', () => {
        const v = Vector.fromAngle(Math.PI / 4);
        expect(v.x).toBeCloseTo(1/Math.sqrt(2));
        expect(v.y).toBeCloseTo(1/Math.sqrt(2));
    });

    test('works in 2nd quadrant', () => {
        const v = Vector.fromAngle(- Math.PI * 1 / 4);
        expect(v.x).toBeCloseTo(1 / Math.sqrt(2));
        expect(v.y).toBeCloseTo(- 1 / Math.sqrt(2));
    });

    test('works in 3rd quadrant', () => {
        const v = Vector.fromAngle(Math.PI * 5 / 4);
        expect(v.x).toBeCloseTo(- 1 / Math.sqrt(2));
        expect(v.y).toBeCloseTo(- 1 / Math.sqrt(2));
    });

    test('works in 4th quadrant', () => {
        const v = Vector.fromAngle(Math.PI * 3 / 4);
        expect(v.x).toBeCloseTo(- 1 / Math.sqrt(2));
        expect(v.y).toBeCloseTo(1 / Math.sqrt(2));
    });

});

describe('Vector.fromAngleDeg(angle)', () => {

    test('works with 0 angle', () => {
        const v = Vector.fromAngleDeg(0);
        expect(v.x).toBe(1);
        expect(v.y).toBe(0);
    });

    test('works in 1st quadrant', () => {
        const v = Vector.fromAngleDeg(45);
        expect(v.x).toBeCloseTo(1 / Math.sqrt(2));
        expect(v.y).toBeCloseTo(1 / Math.sqrt(2));
    });

    test('works in 2nd quadrant', () => {
        const v = Vector.fromAngleDeg(-45);
        expect(v.x).toBeCloseTo(1 / Math.sqrt(2));
        expect(v.y).toBeCloseTo(- 1 / Math.sqrt(2));
    });

    test('works in 3rd quadrant', () => {
        const v = Vector.fromAngleDeg(225);
        expect(v.x).toBeCloseTo(- 1 / Math.sqrt(2));
        expect(v.y).toBeCloseTo(- 1 / Math.sqrt(2));
    });

    test('works in 4th quadrant', () => {
        const v = Vector.fromAngleDeg(135);
        expect(v.x).toBeCloseTo(- 1 / Math.sqrt(2));
        expect(v.y).toBeCloseTo(1 / Math.sqrt(2));
    });

});
