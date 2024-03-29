class Car {
    //field
    private engine:string ;
    readonly portes:number=4; // valeur constante
     model:string; // public par défaut
    
    //constructor (méthode spéciale qui est appelée lors de la création d'un objet)
    constructor(engine:string,model:string) {
    this.engine    = engine;
    this.model = model;
   // this.portes = portes; // readonly ne peut pas être modifié

    }
    // get portes
    getPortes():number {
    return this.portes;
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
    console.log("Engine is : "+this.engine+" and model is : "+this.model);
    // this est obligatoire pour accéder aux champs de la classe
    }
    }
    //create an object
    var c1 = new Car("Turbo","Audi"); // appel du constructeur
    var c2 = new Car("Normal","BMW");
    c1.disp();
    //console.log(c1.engine) // "engine innaccessible car privé"
    console.log(c1.getEngine()); // "engine accessible via getEngine"
    c2.disp();