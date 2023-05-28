// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('function isPhoneNumber test 1', () => {expect(functions.isPhoneNumber('(123)123-1234')).toBe(true)});
test('function isPhoneNumber test 2', () => {expect(functions.isPhoneNumber('123-123-1234')).toBe(true)});
test('function isPhoneNumber test 3', () => {expect(functions.isPhoneNumber('123(123)1234')).toBe(false)});
test('function isPhoneNumber test 4', () => {expect(functions.isPhoneNumber('1231231234')).toBe(false)});

test('function isEmail test 1', () => {expect(functions.isEmail('asdf@ucsd.edu')).toBe(true)});
test('function isEmail test 2', () => {expect(functions.isEmail('asdf@ucsd.ed')).toBe(true)});
test('function isEmail test 3', () => {expect(functions.isEmail('asdf@ucsd.e')).toBe(false)});
test('function isEmail test 4', () => {expect(functions.isEmail('asdf@edu.ucsd')).toBe(false)});

test('function isStrongPassword 1', () => {expect(functions.isStrongPassword('Aa_1')).toBe(true)});
test('function isStrongPassword 2', () => {expect(functions.isStrongPassword('AaaA')).toBe(true)});
test('function isStrongPassword 3', () => {expect(functions.isStrongPassword('a')).toBe(false)});
test('function isStrongPassword 4', () => {expect(functions.isStrongPassword('@asdf')).toBe(false)});

test('function isDate 1', () => {expect(functions.isDate('1/1/1111')).toBe(true)});
test('function isDate 2', () => {expect(functions.isDate('99/99/9999')).toBe(true)});
test('function isDate 3', () => {expect(functions.isDate('111/111/1111')).toBe(false)});
test('function isDate 4', () => {expect(functions.isDate('11/11/11')).toBe(false)});

test('function isHexColor 1', () => {expect(functions.isHexColor('abc')).toBe(true)});
test('function isHexColor 2', () => {expect(functions.isHexColor('#abcdfe')).toBe(true)});
test('function isHexColor 3', () => {expect(functions.isHexColor('0000')).toBe(false)});
test('function isHexColor 4', () => {expect(functions.isHexColor('asdf')).toBe(false)});