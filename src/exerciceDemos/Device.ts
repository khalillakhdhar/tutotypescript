export class Device
{
  private  marque:string;
    modele:string; // public par défaut
     cpu:string;
    ram:string;
    prix:number;
    constructor(marque:string,modele:string,cpu:string,ram:string,prix:number)
    {
        this.marque=marque;
        this.modele=modele;
        this.cpu=cpu;
        this.ram=ram;
        this.prix=prix;
    }
//getters and setters
    getMarque():string
    {
        return this.marque;
    }
    setMarque(marque:string):void
    {
        this.marque=marque;
    }
    // toString():string
    
    toString():string{
        return "Marque : "+this.marque+" Modele : "+this.modele+" CPU : "+this.cpu+" RAM : "+this.ram+" Prix : "+this.prix;
    }
}
//let device =new Device("Dell","Inspiron","i5","8GB",1000);