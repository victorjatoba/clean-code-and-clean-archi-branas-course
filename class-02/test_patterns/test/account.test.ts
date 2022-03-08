import Account from "../src/Account";
test("Should create an account", () => {
  const account = new Account(0);
  const balance = account.getBalance();
  expect(balance).toBe(0);
});
