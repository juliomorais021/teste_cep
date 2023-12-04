// cepValidator.js

function validarCEP(cep) {
    // Remove caracteres não numéricos do CEP
    const cepLimpo = cep.replace(/\D/g, '');
  
    // Verifica se o CEP tem o tamanho correto
    if (cepLimpo.length !== 8) {
      return false;
    }
  
    return true;
  }
  
  module.exports = validarCEP;
  