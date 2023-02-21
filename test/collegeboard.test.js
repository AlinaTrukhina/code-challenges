const compose = require('../cbthp');

describe('compose function', () => {
    test('returns "18 s"', () => {
        expect(compose(
            x => x - 1,
            x => x * 2,
            x => x + ' s'
          )(10)).toEqual('18 s')
    });

    test('returns 4', () => {
        expect(compose(
            arg => arg.reduce((a, b) => a + b),
            x => x * x
          )([-7, 1, 8])
          ).toEqual(4)
    });
});