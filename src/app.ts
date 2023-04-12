import { genererTableauAleatoire } from "./tableau";
import { affichageMessage } from "./affichage";
/**
 * @description Cette fonction permet de générer un tableau de personnes aléatoires
 * @param {number} nombreElements
 */
const tableauPersonnes = genererTableauAleatoire(10); // 10 personnes
for( const personne of tableauPersonnes) // 10 personnes à parcourir
{
    affichageMessage(personne); // affichage de la personne
}