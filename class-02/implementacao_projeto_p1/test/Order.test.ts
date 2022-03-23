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
