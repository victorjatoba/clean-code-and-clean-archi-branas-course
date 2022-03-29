import Order from "../../domain/entity/Order";
import ItemRepository from "../../domain/repository/ItemRepository";

interface PlaceOrderInput {
  date: Date;
  cpf: string;
  itemId: number;
  quantity: number;
}

interface PlaceOrderOutput {
  total: number;
}
export default class PlaceOrder {
  constructor(
    readonly itemRepository: ItemRepository,
    readonly orderRepository: OrderRepository
  ) {}

  async execute(input: PlaceOrderInput): Promise<PlaceOrderOutput> {
    const order = new Order(input.cpf);
    order.orderItems.forEach(async (orderItem) => {
      const item = await this.itemRepository.findById(orderItem.itemId);
      if (!item) throw new Error("Item not found");
      order.addItem(item, orderItem.quantity);
    });
    await this.orderRepository.save(order);
    const total = order.getTotal();
    return { total };
  }
}
