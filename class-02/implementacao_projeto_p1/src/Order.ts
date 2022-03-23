import Cpf from "./Cpf";

export default class Order {
  cpf: Cpf;
  constructor(cpf: string) {
    this.cpf = new Cpf(cpf);
  }

  public getTotal(): number {
    return 0;
  }
}
