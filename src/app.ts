import { genererTableauAleatoire } from "./tableau";
import { affichageMessage } from "./affichage";

const tableauPersonnes = genererTableauAleatoire(10); // 10 personnes
for( const personne of tableauPersonnes) // 10 personnes à parcourir
{
    affichageMessage(personne); // affichage de la personne
}