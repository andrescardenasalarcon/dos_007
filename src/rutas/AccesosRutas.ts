import { Router } from "express";
import accesosControlador from "../controladores/AccesosControlador";
import accesosControladores_Listar from "../controladores/AccesosControladores_Listar";
class AccesosRutas {
    public rutaAccesoApi: Router;
    constructor() {
        this.rutaAccesoApi = Router();
        this.configuracion();
    }
    public configuracion(){
        this.rutaAccesoApi.post('/accesos',accesosControlador.busqueUnoAcceso);
        this.rutaAccesoApi.get('/listar',accesosControladores_Listar.demeLasListas);
    }
}

const accesosRutas = new AccesosRutas();
export default accesosRutas.rutaAccesoApi;