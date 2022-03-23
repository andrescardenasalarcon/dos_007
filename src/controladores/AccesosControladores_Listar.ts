import { Request,Response } from "express";
import AccesosDAO_Listar from "../dos/accesos/AccesosDAO_Listar";
import { SQL_ACCESO_Listar } from "../repositorios/accesos/accesos_listar_sql";

class AccesosControladores_Listar extends AccesosDAO_Listar{
    public demeLasListas(req: Request, res: Response): void {
        AccesosControladores_Listar.obtenerListas(SQL_ACCESO_Listar.LISTAR, [], res);
    }
}
const accesosControladores_Listar = new AccesosControladores_Listar();
export default accesosControladores_Listar;