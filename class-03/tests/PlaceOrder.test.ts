test("Shoud place an order", () => {
  const placeOrder = new PlaceOrder();
  const input = {
    cpf: "839.435.452-10",
    orderItems: [
      { idItem: 1, quantity: 1 },
      { idItem: 2, quantity: 1 },
      { idItem: 3, quantity: 3 },
    ],
    date: new Date("2022-03-26"),
  };

  const output = placeOrder.execute(input);
  expect(output.total).toEqual(1000);
});
