import CurrencyAPI from "./CurrencyAPI";

export default class CurrencyAPIFake implements CurrencyAPI {
  convert(amount: number, currency: string): number {
    let convertedAmount = amount;
    if (currency === "BRL") {
      convertedAmount /= 5;
    }
    return convertedAmount;
  }
}
