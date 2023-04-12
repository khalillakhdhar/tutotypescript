"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Laptop = void 0;
var Device_1 = require("./Device");
var Laptop = /** @class */ (function (_super) {
    __extends(Laptop, _super);
    function Laptop(marque, modele, cpu, ram, prix, autonomie) {
        var _this = _super.call(this, marque, modele, cpu, ram, prix) || this;
        _this.autonomie = autonomie;
        return _this;
    }
    // toString():string
    Laptop.prototype.toString = function () {
        return _super.prototype.toString.call(this) + " Autonomie : " + this.autonomie;
    };
    return Laptop;
}(Device_1.Device));
exports.Laptop = Laptop;
