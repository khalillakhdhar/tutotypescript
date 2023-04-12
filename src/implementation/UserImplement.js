var UserImplement = /** @class */ (function () {
    function UserImplement(id, nom, email, password, role) {
        {
            this.id = id;
            this.nom = nom;
            this.email = email;
            this.password = password;
            this.role = role;
        }
    }
    UserImplement.prototype.login = function (email, password) {
        console.log("User logged in");
    };
    // toString():string
    UserImplement.prototype.toString = function () {
        return "Id : " + this.id + " Nom : " + this.nom + " Email : " + this.email + " Password : " + this.password + " Role : " + this.role;
    };
    return UserImplement;
}());
var user = new UserImplement(1, "John", "test@gmail.com", "123456", "admin");
console.log(user.toString());
