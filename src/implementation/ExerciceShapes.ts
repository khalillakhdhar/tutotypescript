interface Shape {
    getArea(): number;
  }
  
  class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}
  
    getArea(): number {
      return this.width * this.height;
    }
  }
  
  class Circle implements Shape {
    constructor(private radius: number) {}
  
    getArea(): number {
      return Math.PI * this.radius ** 2;
    }
  }
let circle= new Circle(5);
let rectangle= new Rectangle(5,10);
console.log(circle.getArea());
console.log(rectangle.getArea());