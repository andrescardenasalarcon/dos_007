"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AccesosDAO_Listar_1 = __importDefault(require("../dos/accesos/AccesosDAO_Listar"));
const accesos_listar_sql_1 = require("../repositorios/accesos/accesos_listar_sql");
class AccesosControladores_Listar extends AccesosDAO_Listar_1.default {
    demeLasListas(req, res) {
        AccesosControladores_Listar.obtenerListas(accesos_listar_sql_1.SQL_ACCESO_Listar.LISTAR, [], res);
    }
}
const accesosControladores_Listar = new AccesosControladores_Listar();
exports.default = accesosControladores_Listar;
