import { Device } from "./Device";
import { Laptop } from './Laptop';

let device=new Device("Dell","Inspiron","i5","8GB",1000);
console.log(device.toString());
let laptop=new Laptop("Toshiba","VIP","i7","8GB",1000,5);
console.log(laptop.toString()); // polymorphisme