import Order from "./Order";

test("Não deve criar um pedido com CPF inválido", function () {
  const cpf = "037.522.005-45";
  // const order = ;
  expect(() => new Order(cpf)).toThrow(new Error("Invalid CPF"));
});
