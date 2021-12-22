export default class Order {
  cpf: string;
  constructor(cpf: string) {
    if (!this.validate(cpf)) {
      throw new Error("Invalid CPF");
    }
    this.cpf = cpf;
  }

  validate(cpf: string): boolean {
    if (cpf.length !== 11) {
      return false;
    }
    let first = cpf.substr(0, 9);
    let second = cpf.substr(9, 10);
    let sum = 0;
    for (let i = 0; i < first.length; i++) {
      sum += parseInt(first[i]) * (11 - i);
    }
    for (let i = 0; i < second.length; i++) {
      sum += parseInt(second[i]) * (12 - i);
    }
    return sum % 11 === 0;
  }
}
