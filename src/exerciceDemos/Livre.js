var Livre = /** @class */ (function () {
    // si les attributs sont public, pas besoin de définir les getters et setters
    function Livre(auteur, titre, nbpages) {
        this.auteur = auteur;
        this.titre = titre;
        this.nbpages = nbpages;
    }
    Livre.prototype.toString = function () {
        return "Auteur : " + this.auteur + " Titre : " + this.titre + " Nombre de pages : " + this.nbpages;
    };
    return Livre;
}());
var livre = new Livre("J.K Rowling", "Harry Potter", 500);
console.log(livre.toString());
