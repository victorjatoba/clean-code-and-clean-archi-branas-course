export default class OrderItem {
  constructor(
    readonly itemId: number,
    readonly price: number,
    readonly quantity: number = 1
  ) {}
  getTotal() {
    return this.price * this.quantity;
  }
}
