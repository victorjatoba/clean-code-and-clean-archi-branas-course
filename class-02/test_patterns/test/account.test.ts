import Account from "../src/Account";

test("Should create an account", () => {
  const account = new Account(0);
  const balance = account.getBalance();
  expect(balance).toBe(0);
});

test("Should create a debit of $ 50.0", () => {
    const account = new Account(100);
    account.debit(50);
    const balance = account.getBalance();
    expect(balance).toBe(50);
})