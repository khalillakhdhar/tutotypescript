var Car = /** @class */ (function () {
    //constructor
    function Car(engine) {
        this.engine = engine;
    }
    // contrairement à Java, il n'y a pas de mot clé "function" pour définir une méthode et on a un seul constructor
    //function
    Car.prototype.disp = function () {
        console.log("Engine is    : " + this.engine);
        // this est obligatoire pour accéder aux champs de la classe
    };
    return Car;
}());
//create an object
var c1 = new Car("Turbo");
var c2 = new Car("Normal");
c1.disp();
console.log(c1.engine);
c2.disp();
