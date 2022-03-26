import { cpf as cpfValidator } from "cpf-cnpj-validator";

export default class Cpf {
  constructor(value: string) {
    if (!this.validate(value)) {
      throw new Error("Invalid CPF");
    }
  }

  validate(value: string): boolean {
    return cpfValidator.isValid(value);
  }
}
