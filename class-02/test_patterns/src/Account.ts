export default class Account {
    private balance: number;
    
    constructor(balance: number) {
        this.balance = balance;
    }
    
    public getBalance(): number {
        return this.balance;
    }
}