type Personnes = {
    name: string;
    age: number;
    }
    type Employee = {
    id: number;
    department: string;
    }
    type    PersonEmployee = Person & Employee; // Intersection type => héritage
    type    PersonOrEmployee = Person | Employee; // Union type