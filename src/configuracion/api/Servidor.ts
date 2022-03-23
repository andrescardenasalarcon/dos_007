import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import accesosRutas from '../../rutas/AccesosRutas';

class Servidor {
    public app: express.Application;
    constructor() {
        this.app = express();
        this.iniciarConfiguracion();
        this.activarRutas();

    }
    public iniciarConfiguracion(): void {
        this.app.set('PORT', 8088);
        this.app.use(cors());//Limitar quien entra
        this.app.use(morgan('dev'));
        this.app.use(express.json({ limit: '100mb' }));
        this.app.use(express.urlencoded({ extended: true })); //Para peticiones en rutas de todo tipo


    }
    public activarRutas(): void {
      this.app.use('/appi/accesos',accesosRutas);

    }
    public iniciar(): void {
        this.app.listen(this.app.get('PORT'), () => {
            console.log('YA SIRVE !!!',
                this.app.get('PORT'));
        });
    }
}
export default Servidor;
