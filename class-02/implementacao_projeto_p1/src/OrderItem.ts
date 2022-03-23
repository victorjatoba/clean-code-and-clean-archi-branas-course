export default class OrderItem {
    constructor(
        readonly itemId: string,
        readonly price: number,
        readonly quantity: number = 1,
    ) {}
}