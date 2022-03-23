export const SQL_ACCESO_Listar = {
    
    LISTAR: 'select usuarios.nombre_usaurio ,count(ingresos.cod_usuario) from ingresos inner join usuarios ON usuarios.cod_usuario = ingresos.cod_usuario  group by(usuarios.nombre_usaurio)',

}