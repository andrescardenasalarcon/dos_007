"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AccesosControlador_1 = __importDefault(require("../controladores/AccesosControlador"));
const AccesosControladores_Listar_1 = __importDefault(require("../controladores/AccesosControladores_Listar"));
class AccesosRutas {
    constructor() {
        this.rutaAccesoApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutaAccesoApi.post('/accesos', AccesosControlador_1.default.busqueUnoAcceso);
        this.rutaAccesoApi.get('/listar', AccesosControladores_Listar_1.default.demeLasListas);
    }
}
const accesosRutas = new AccesosRutas();
exports.default = accesosRutas.rutaAccesoApi;
