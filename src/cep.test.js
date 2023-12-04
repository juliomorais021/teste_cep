// cepValidator.test.js
// cepValidator.test.js
const validarCEP = require('./cep');

// ... (testes anteriores)

test('VerificarCEPValido', () => {
  expect(validarCEP('12345-678')).toBe(true);
});

test('VerificarOutroCEPValido', () => {
  expect(validarCEP('54321-987')).toBe(true);
});

test('VerificarCEPInvalido', () => {
  expect(validarCEP('1234-567')).toBe(false);
});

test('VerificarCEPInvalidoCaracteresEspeciais', () => {
  expect(validarCEP('ABCDE-FGH')).toBe(false);
});


test('VerificarCEPVazio', () => {
  expect(validarCEP('')).toBe(false);
});

test('VerificarCEPComExcessoDeDigitos', () => {
  expect(validarCEP('12345-6789-0')).toBe(false);
});

test('VerificarCEPComMenosDeOitoDigitos', () => {
  expect(validarCEP('123-456')).toBe(false);
});

test('VerificarCEPFormatoInvalido', () => {
  expect(validarCEP('12345-6789-0')).toBe(false);
});

test('VerificarCEPComLetrasMinusculas', () => {
  expect(validarCEP('abcde-fghi')).toBe(false);
});

test('VerificarCEPComTraçosExtras', () => {
  expect(validarCEP('12--34--567')).toBe(false);
});

