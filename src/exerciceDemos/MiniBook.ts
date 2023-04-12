import { Laptop } from "./Laptop";

 export class MiniBook extends Laptop {
 screen: number;
    constructor(marque: string, modele: string, cpu: string, ram: string, prix: number, autonomie: number, screen: number) {
        super(marque, modele, cpu, ram, prix, autonomie);
        this.screen = screen;
    }
    toString(): string {
        return super.toString() + " Screen : " + this.screen;
    }


}