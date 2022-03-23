"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AccesosDAO_Login_1 = __importDefault(require("../dos/accesos/AccesosDAO_Login"));
const accesos_login_sql_1 = require("../repositorios/accesos/accesos_login_sql");
class AccesosControlador extends AccesosDAO_Login_1.default {
    busqueUnoAcceso(req, res) {
        const correo = req.body.correoAcceso;
        const contra = req.body.claveAcceso;
        const parametro = [correo, contra];
        AccesosControlador.encontrarIdAcceso(accesos_login_sql_1.SQL_ACCESO_LOGIN.CARGAR, parametro, res);
    }
}
const accesosControlador = new AccesosControlador();
exports.default = accesosControlador;
