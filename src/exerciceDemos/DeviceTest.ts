import { Device } from "./Device";
import { Laptop } from './Laptop';
import { MiniBook } from "./MiniBook";

let device=new Device("Dell","Inspiron","i5","8GB",1000);
console.log(device.toString());
let laptop=new Laptop("Toshiba","VIP","i7","8GB",1000,5); // heritage simple
console.log(laptop.toString()); // polymorphisme
let mini =new MiniBook("dell","mini","i5","8GB",1000,5,23); // heritage multiple
console.log(mini.toString());
