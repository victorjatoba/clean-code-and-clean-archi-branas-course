import Order from "../src/Order";

test("Deve criar um pedido com CPF válido", () => {
    const cpf = "123.456.789-10";
    const order = new Order(cpf)
    const total = order.getTotal();
    expect(total).toBe(0);
})