const assert = require("assert");
const calc = require("../src/models/Calculadora");

describe("Teste Calculadora", function() {
  it("Testando Soma de 5+5=10", function() {
    let result = calc.soma(5, 5);
    assert.equal(result, 10);
  });
  it("Testando Subtracao de 25-10=15", function() {
    let result = calc.subtracao(25, 10);
    assert.equal(result, 15);
  });
  it("Testando Multiplicacao de 5*5=25", function() {
    let result = calc.multiplicacao(5, 5);
    assert.equal(result, 25);
  });
  it("Testando Divisao de 100/5=20", function() {
    let result = calc.divisao(100, 5);
    assert.equal(result, 20);
  });

  it("Testando Fatorial de 5=120", function() {
    let result = calc.fatorial(5);
    assert.equal(result, 120);
  });
  it("Testando Raiz quadrada", function() {
    let result = calc.raizQuadrada(100);
    assert.equal(result, 10);
  });
});
