var assert = require('assert');
let calculadora = require('../app.js');

describe('Temperature Conversion', function() {
    describe('cToF', function() {
        it('should convert -40 celsius to -40 fahrenheit', function() {
          assert.equal(-40, calculadora.cToF(-40));
        });
        it('should convert 0 celsius to 32 fahrenheit', function() {
          assert.equal(32, calculadora.cToF(0));
        });
        it('should return undefined if no temperature is input', function() {
          assert.equal(undefined, calculadora.cToF(''));
        });
    });
    describe('fToC', function() {
        it('should convert -40 fahrenheit to -40 celsius', function() {
          assert.equal(-40, calculadora.fToC(-40));
        });
        it('should convert 32 fahrenheit to 0 celsius', function() {
          assert.equal(0, calculadora.fToC(32));
        });
        it('should return undefined if no temperature is input', function() {
          assert.equal(undefined, calculadora.fToC('a'));
        });
    });
});

describe('Operações da Calculadora',function() {
    it('Teste: Deve Somar 2 Números', function() {
        assert.equal(2, calculadora.soma(1,1));
    });
    it('Teste: Deve Subtrair 2 Números', function() {
        assert.equal(calculadora.subtrair(10,5), 5);
    });
    it('Teste: Deve Multiplicar 2 Números', function() {
        assert.equal(calculadora.multiplicar(10,5),50);
    });
    it('Teste: Deve Multiplicar 2 Números', function() {
        assert.equal(calculadora.dividir(18,2),9);
    });
});