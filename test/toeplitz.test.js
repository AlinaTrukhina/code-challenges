const isToeplitz = require('../toeplitz');

describe('toeplitz', () => {
    test('returns true', () => {
        expect(isToeplitz([[1 ,2, 3, 4], [5, 1, 2, 3], [6, 5, 1, 2], [7, 6, 5, 1]])).toBeTruthy()
    });

    test('returns false', () => {
        expect(isToeplitz([[2 ,2, 3, 4], [5, 1, 2, 3], [6, 5, 1, 2], [7, 6, 5, 1]])).toBeFalsy()
    });

    test('chars, returns false', () => {
        expect(isToeplitz([['a', 'a'],['b', 'a']])).toBeTruthy();
    });

    test('chars, returns false', () => {
        expect(isToeplitz([[]])).toBeFalsy();
    });
});