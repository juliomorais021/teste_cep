// cepValidator.test.js
const validarCEP = require('./cep');

test('CEP válido deve retornar true', () => {
  expect(validarCEP('12345678')).toBe(true);
});

test('CEP inválido (tamanho menor que 8) deve retornar false', () => {
  expect(validarCEP('1234567')).toBe(false);
});

test('CEP inválido (tamanho maior que 8) deve retornar false', () => {
  expect(validarCEP('123456789')).toBe(false);
});

test('CEP inválido (caracteres não numéricos) deve retornar false', () => {
  expect(validarCEP('12a45678')).toBe(false);
});

test('CEP válido com formatação (com traço) deve retornar true', () => {
  expect(validarCEP('12345-678')).toBe(true);
});

test('CEP válido com formatação (com espaços) deve retornar true', () => {
  expect(validarCEP('12345 678')).toBe(true);
});

