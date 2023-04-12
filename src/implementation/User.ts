interface User { // interface
    // properties
    id: number;
    nom:string;
    email:string;
    password:string;
    role:string;
    // methods
    login:(email:string, password:string)=>void;
    
}
