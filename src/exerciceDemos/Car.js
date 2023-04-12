var Car = /** @class */ (function () {
    //constructor
    function Car(engine, model) {
        this.portes = 4;
        this.engine = engine;
        this.model = model;
        // this.portes = portes; // readonly ne peut pas être modifié
    }
    // get portes
    Car.prototype.getPortes = function () {
        return this.portes;
    };
    //encapsulation
    Car.prototype.getEngine = function () {
        return this.engine;
    };
    Car.prototype.setEngine = function (engine) {
        this.engine = engine;
    };
    // contrairement à Java, il n'y a pas de mot clé "function" pour définir une méthode et on a un seul constructor
    //function
    Car.prototype.disp = function () {
        console.log("Engine is : " + this.engine + " and model is : " + this.model);
        // this est obligatoire pour accéder aux champs de la classe
    };
    return Car;
}());
//create an object
var c1 = new Car("Turbo", "Audi");
var c2 = new Car("Normal", "BMW");
c1.disp();
//console.log(c1.engine) // "engine innaccessible car privé"
console.log(c1.getEngine()); // "engine accessible via getEngine"
c2.disp();
