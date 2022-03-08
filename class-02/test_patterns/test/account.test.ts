import sinon from "sinon";
import Account from "../src/Account";
import CurrencyAPIFake from "../src/CurrencyAPIFake";

let account: Account;
let currencyAPI: CurrencyAPIFake;

beforeEach(() => {
  currencyAPI = new CurrencyAPIFake();
  account = new Account(currencyAPI);
});

test("Should create an account", () => {
  const balance = account.getBalance();
  expect(balance).toBe(0);
});

test("Should create a credit of $ 100.0", () => {
  account.credit(100);
  const balance = account.getBalance();
  expect(balance).toBe(100);
});

test("Should create a debit of $ 50.0", () => {
  account.credit(100);
  account.debit(50);
  const balance = account.getBalance();
  expect(balance).toBe(50);
});

test("Should create a debit of R$ 50.0 BRL", () => {
  sinon.stub(currencyAPI, "convert").returns(500);
  account.credit(100, "BRL");
  const balance = account.getBalance();
  expect(balance).toBe(500);
});
