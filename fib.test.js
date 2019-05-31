const fibSeq = require('./fib');

test('first call must return 0', () => {
    expect(fibSeq()).toBe(0)
})

