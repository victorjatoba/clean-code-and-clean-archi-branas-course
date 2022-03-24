import OrderItem from "../src/OrderItem";

test("deve criar um item do pedido", () => {
  const orderItem = new OrderItem("1", 10, 1);
  expect(orderItem.getTotal()).toBe(10);
});

