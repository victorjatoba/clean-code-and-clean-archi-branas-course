export default class Circle {
  constructor(public radius: number) {}

  getArea(): number {
    return Math.PI * this.radius * 2;
  }
}