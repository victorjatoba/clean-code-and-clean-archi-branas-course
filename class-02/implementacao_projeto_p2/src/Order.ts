import { ImportTypeNode } from "typescript";
import Cpf from "./Cpf";
import Item from "./Item";
import OrderItem from "./OrderItem";

export default class Order {
  coupon?: string;
  cpf: Cpf;
  orderItems: OrderItem[];
  constructor(cpf: string) {
    this.cpf = new Cpf(cpf);
    this.orderItems = [];
  }

  addItem(item: Item, quantity: number = 1) {
    this.orderItems.push(new OrderItem(item.id, item.price, quantity));
  }

  addCoupon(coupon: string) {
    this.coupon = coupon;
  }

  public getTotal(): number {
    let total = this.orderItems.reduce(
      (sum, orderItem) => sum + orderItem.getTotal(),
      0
    );
    if (this.coupon === "10OFF") {
      total -= total * 0.1;
    }
    return total;
  }
}
