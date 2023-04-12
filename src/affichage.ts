import { Personne } from "./Person";

export function affichageMessage(personne: Personne):void {
const estMineur = personne.age < 18; // estMineur est un boolean 
if(personne.sexe=== "masculin")
{
    if(estMineur)
    {
        console.log("Le garçon " + personne.nom + " est mineur");
    }
    else
    {
        console.log("L'homme ' " + personne.nom + " est majeur");
    }
}
else
{
    if(estMineur)
    {
        console.log("La fille " + personne.nom + " est mineure");
    }
    else
    {
        console.log("La femme " + personne.nom + " est majeure");
    }

}
}