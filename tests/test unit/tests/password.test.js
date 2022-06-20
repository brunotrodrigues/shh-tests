const password = require('../functions/password.js').password; 

test('Password length must be atleast 8 characters', () => {
    expect(password('test')).toBe('Password length must be atleast 8 characters');
});

test('Fill the password please', () => {
    expect(password('')).toBe('Fill the password please');
});

test('Password length cant be more than 15 characters', () => {
    expect(password('1234567890123456')).toBe('Password length cant be more than 15 characters');
});

test('Password is correct', () => {
    expect(password('12345678')).toBe('Password is correct');
});
