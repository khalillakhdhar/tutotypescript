class UserImplement implements User // class implements interface
{
    id: number;
    nom: string;
    email: string;
    password: string;
    role: string;

    constructor(id: number, nom: string, email: string, password: string, role: string) {
        {
            this.id = id;
            this.nom = nom;
            this.email = email;
            this.password = password;
            this.role = role;
            
        }
      
}
    login(email: string, password: string): void {
        console.log("User logged in");
    }
    // toString():string
    toString():string{
        return "Id : "+this.id+" Nom : "+this.nom+" Email : "+this.email+" Password : "+this.password+" Role : "+this.role;
    }
}
let user=new UserImplement(1,"John","test@gmail.com","123456","admin");
console.log(user.toString());