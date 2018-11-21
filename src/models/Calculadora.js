class Calculadora {
  static soma(num1, num2) {
    return num1 + num2;
  }

  static subtracao(num1, num2) {
    return num1 - num2;
  }

  static divisao(num1, num2) {
    return num1 / num2;
  }

  static multiplicacao(num1, num2) {
    return num1 * num2;
  }

  static fatorial(num1) {
    let result = 1;
    do {
      result = result * num1;
      num1--;
    } while (num1 > 1);
    return result;
  }

  static raizQuadrada(num1) {
    return Math.sqrt(num1);
  }

  potencializacao(num1, potencia) {
    return Math.pow(num1, potencia);
  }
}
module.exports = Calculadora;
