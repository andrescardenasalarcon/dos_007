import { Request, Response } from "express";
import AccesosDAO_Login from "../dos/accesos/AccesosDAO_Login";
import {SQL_ACCESO_LOGIN} from "../repositorios/accesos/accesos_login_sql"

class AccesosControlador extends AccesosDAO_Login {


    public busqueUnoAcceso(req: Request, res: Response): void {
        const correo = req.body.correoAcceso;
        const contra = req.body.claveAcceso;
        const parametro = [correo, contra];
        AccesosControlador.encontrarIdAcceso(SQL_ACCESO_LOGIN.CARGAR, parametro, res);

    }



}
const accesosControlador = new AccesosControlador();
export default accesosControlador;