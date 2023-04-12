class Car {
    //field
    private engine:string ;
    //constructor
    constructor(engine:string ) {
    this.engine    = engine
    }
    //encapsulation
    getEngine():string {
    return this.engine;
    }
    setEngine(engine:string ):void {
    this.engine = engine;
    }
    // contrairement à Java, il n'y a pas de mot clé "function" pour définir une méthode et on a un seul constructor
    //function
    disp():void {
    console.log("Engine is    : "+this.engine );
    // this est obligatoire pour accéder aux champs de la classe
    }
    }
    //create an object
    var c1 = new Car("Turbo");
    var c2 = new Car("Normal");
    c1.disp();
    //console.log(c1.engine) // "engine innaccessible car privé"
    console.log(c1.getEngine()); // "engine accessible via getEngine"
    c2.disp();