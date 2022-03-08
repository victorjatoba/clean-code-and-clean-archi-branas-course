export default class Account {
  private balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  credit(amount: number): void {
    this.balance += amount;
  }

  debit(amount: number) {
    this.balance -= amount;
  }

  public getBalance(): number {
    return this.balance;
  }
}
