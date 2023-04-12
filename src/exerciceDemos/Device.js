"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Device = void 0;
var Device = /** @class */ (function () {
    function Device(marque, modele, cpu, ram, prix) {
        this.marque = marque;
        this.modele = modele;
        this.cpu = cpu;
        this.ram = ram;
        this.prix = prix;
    }
    //getters and setters
    Device.prototype.getMarque = function () {
        return this.marque;
    };
    Device.prototype.setMarque = function (marque) {
        this.marque = marque;
    };
    // toString():string
    Device.prototype.toString = function () {
        return "Marque : " + this.marque + " Modele : " + this.modele + " CPU : " + this.cpu + " RAM : " + this.ram + " Prix : " + this.prix;
    };
    return Device;
}());
exports.Device = Device;
//let device =new Device("Dell","Inspiron","i5","8GB",1000);
