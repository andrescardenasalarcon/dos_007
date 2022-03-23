export const SQL_ACCESO_LOGIN = {
    
    CARGAR: 'select usuarios.nombre_usaurio,usuarios.apellido_usuario,roles.nombre_rol from usuarios inner join accesos ON accesos.cod_usuario = usuarios.cod_usuario RIGHT JOIN roles ON roles.cod_rol = usuarios.cod_rol where  correo_acceso = $1 AND clave_acceso = $2',

}