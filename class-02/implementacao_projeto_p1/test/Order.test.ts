import Order from "../src/Order";

test("Deve criar um pedido com CPF válido", () => {
  const cpf = "487.501.680-88";
  const order = new Order(cpf);
  const total = order.getTotal();
  expect(total).toBe(0);
});

test("Deve criar um pedido vazio com CPF inválido", () => {
  const cpf = "111.111.111-11";
  expect(() => new Order(cpf)).toThrow(new Error("Invalid CPF"));
});

test("Deve criar um pedido com 3 itens", () => {
  const cpf = "487.501.680-88";
  const order = new Order(cpf);
  order.addItem(
    {
      id: "1",
      name: "Item 1",
      price: 10,
    },
    1
  );
  order.addItem(
    {
      id: "2",
      name: "Item 2",
      price: 20,
    },
    1
  );
  order.addItem(
    {
      id: "3",
      name: "Item 3",
      price: 30,
    },
    1
  );
  const total = order.getTotal();
  expect(total).toBe(60);
});

test("Deve criar uma venda com cupom de desconto", () => {
  const cpf = "487.501.680-88";
  const order = new Order(cpf);
  order.addItem(
    {
      id: "1",
      name: "Item 1",
      price: 10,
    },
    1
  );
  order.addCoupon("10OFF");
  const total = order.getTotal();
  expect(total).toBe(9);
});
