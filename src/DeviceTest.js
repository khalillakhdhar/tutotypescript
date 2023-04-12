"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Device_1 = require("./Device");
var Laptop_1 = require("./Laptop");
var device = new Device_1.Device("Dell", "Inspiron", "i5", "8GB", 1000);
console.log(device.toString());
var laptop = new Laptop_1.Laptop("Toshiba", "VIP", "i7", "8GB", 1000, 5);
console.log(laptop.toString());
