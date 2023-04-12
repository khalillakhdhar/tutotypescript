class Livre{
    auteur: string;
    titre: string;
    nbpages: number;
    // si les attributs sont public, pas besoin de définir les getters et setters
    constructor(auteur:string,titre:string,nbpages:number){
        this.auteur=auteur;
        this.titre=titre;
        this.nbpages=nbpages;
    }
    toString():string{
        return "Auteur : "+this.auteur+" Titre : "+this.titre+" Nombre de pages : "+this.nbpages;
    }
}
let livre=new Livre("J.K Rowling","Harry Potter",500);
console.log(livre.toString());