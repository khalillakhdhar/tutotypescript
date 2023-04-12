 interface Person {
    name: string;
    age: number;
    }
 type  PersonOrString = Person | String; // String or Object
let ps1: PersonOrString = {name: "John", age: 25};
let ps2: PersonOrString = "yes this is possible"; // advanced Type
// PersonOrString est l'union de deux types