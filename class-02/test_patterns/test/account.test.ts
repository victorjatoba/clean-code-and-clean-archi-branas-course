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

test("Should create a debit of $ 50.0", () => {
  account.credit(100);
  account.debit(50);
  const balance = account.getBalance();
  expect(balance).toBe(50);
});

test("Should create a credit of $ 100.0 with fake", () => {
  account.credit(100);
  const balance = account.getBalance();
  expect(balance).toBe(100);
});

test("Should create a credit of R$ 50.0 BRL with stub", () => {
  sinon.stub(currencyAPI, "convert").returns(500);
  account.credit(100, "BRL");
  const balance = account.getBalance();
  expect(balance).toBe(500);
});

test("Should create a spy", () => {
  const spy = sinon.spy(account, "getBalance");
  account.getBalance();
  sinon.assert.calledOnce(spy);
});

test("Should create a mock like stub", () => {
  const mock = sinon.mock(account);
  mock.expects("getBalance").once().returns(500);
  const balance = account.getBalance();
  expect(balance).toBe(500);
});
test("Should create a mock like spy", () => {
  const mock = sinon.mock(account);
  mock.expects("credit").once().withArgs(100);
  account.credit(100);
});
