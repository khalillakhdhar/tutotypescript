import { Personne } from "./Person"; // importation de la structure person
/**
 * @constructor
 * @param {number} nombreElements
 * @returns {Personne[]}
 * @description Cette fonction permet de générer un tableau de personnes aléatoires
 */
export function genererTableauAleatoire(nombreElements: number): Personne[] {
  const personnes: Personne[] = [];
  for (let i = 0; i < nombreElements; i++) {
    const sexe = Math.random() < 0.5 ? "masculin" : "féminin"; // "masculin" ou "féminin" avec une personne 0 ou 1
    const age = Math.floor(Math
        .random() * 100) + 1;
        const nom = sexe === "masculin" ? genererNomMasculin() : genererNomFeminin();
        const personne: Personne = { nom, age, sexe };
        personnes.push(personne);
        }
        return personnes;
        }
        
        function genererNomMasculin(): string {
        const prenoms = ["Jean", "Pierre", "Marc", "Paul", "Luc", "Thierry"];
        const noms = ["Dubois", "Dupont", "Lefebvre", "Durand", "Martin", "Besson"];
        const prenom = prenoms[Math.floor(Math.random() * prenoms.length)];
        const nom = noms[Math.floor(Math.random() * noms.length)];
        return `${prenom} ${nom}`;
        }
        
        function genererNomFeminin(): string {
        const prenoms = ["Marie", "Sophie", "Céline", "Julie", "Elodie", "Aurélie"];
        const noms = ["Dubois", "Dupont", "Lefebvre", "Durand", "Martin", "Besson"];
        const prenom = prenoms[Math.floor(Math.random() * prenoms.length)];
        const nom = noms[Math.floor(Math.random() * noms.length)];
        return `${prenom} ${nom}`;
        }