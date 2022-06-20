const email = require('../functions/email.js').email; 

test('email correct', () => {
    expect(email('bruno@bruno.pt')).toBe(true);
});

test('email incorrect', () => {
     expect(email('test')).toBe(false);
});

