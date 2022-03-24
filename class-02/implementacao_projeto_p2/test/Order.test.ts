import Order from "../src/Order";

/**
 * 1 - Não deve aplicar cupom de desconto expirado
 */
test("Deve somente aplicar um cupom de desconto, quando este não estiver expirado", () => {
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

/**
 * 2 - Deve calcular o valor do frete com base nas dimensões (altura, largura e profundidade em cm) e o peso dos produtos (em kg)
 */

/**
 * 3 - Deve retornar o preço mínimo de frete caso ele seja superior ao valor calculado
 */