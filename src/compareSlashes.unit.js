"use strict";
exports.__esModule = true;
var compareSlashes_1 = require("./compareSlashes");
describe('compareSlashes', function () {
    var oneSlash = '/A.md';
    var anotherOneSlash = '/b.md';
    var twoSlashes = '/a/B';
    var threeSlashes = '/B/a/c';
    test('Compares two with different number of slashes ', function () {
        expect(compareSlashes_1.compareSlashes(oneSlash, twoSlashes)).toBe(-1);
        expect(compareSlashes_1.compareSlashes(twoSlashes, oneSlash)).toBe(1);
        expect(compareSlashes_1.compareSlashes(oneSlash, threeSlashes)).toBe(-1);
        expect(compareSlashes_1.compareSlashes(threeSlashes, twoSlashes)).toBe(1);
    });
    test('Compares two with the same number of slashes', function () {
        expect(compareSlashes_1.compareSlashes(oneSlash, anotherOneSlash)).toBe(0);
    });
});
