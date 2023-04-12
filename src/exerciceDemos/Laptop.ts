import { Device } from "./Device";

export class Laptop extends Device
{
    autonomie:number;   
    constructor(marque:string,modele:string,cpu:string,ram:string,prix:number,autonomie:number)
    {
        super(marque,modele,cpu,ram,prix);
        this.autonomie=autonomie;
    }
    // toString():string
    // @Override
    toString():string{
        return super.toString()+" Autonomie : "+this.autonomie;
    }

}