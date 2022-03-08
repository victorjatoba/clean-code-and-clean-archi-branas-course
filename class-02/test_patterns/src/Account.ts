import CurrencyAPI from "./CurrencyAPI";

export default class Account {
  private balance: number;

  constructor(readonly currencyAPI: CurrencyAPI) {
    this.balance = 0;
  }

  credit(amount: number, currency?: string): void {
    if (currency) {
      amount = this.currencyAPI.convert(amount, currency);
    }
    this.balance += amount;
  }

  debit(amount: number) {
    this.balance -= amount;
  }

  public getBalance(): number {
    return this.balance;
  }
}
