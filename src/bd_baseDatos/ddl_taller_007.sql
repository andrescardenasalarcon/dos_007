CREATE TABLE roles(
    cod_rol serial ,
    nombre_rol varchar(200)not null unique,
    estado_rol int2 not null,
    constraint PK_ROLES primary key(cod_rol)
);
Alter table roles owner to user_node;

CREATE TABLE usuarios(
    cod_usuario SERIAL,
    cod_rol int4 not null,
    documento_usuario varchar(50) not null,
    tipodocumento_usuario int2 not null,
    nombre_usaurio varchar(60),
    apellido_usuario varchar(80),
    telefono_usuario varchar(50),
    estado_usuario int2 not null,
    constraint pk_usuarios primary key (cod_usuario)
);
Alter table usuarios owner to user_node;

CREATE  TABLE imagenes(
    cod_imagen SERIAL,
    cod_usuario int4 not null,
    nombrepublico_imagen varchar(200),
    nombreprivado_imagen varchar(200),
    tipo_imagen varchar(50),
    tamano_imagen varchar(50),
    favorita_imagen int2,
    constraint pk_imagenes primary key (cod_imagen)
);
Alter table imagenes owner to user_node;

CREATE TABLE alertas (
    cod_alerta SERIAL,
    cod_usuario int4 not null,
    dias_alerta int2,
    meses_alerta int2,
    titulo_alerta varchar(200),
    detalle_alerta TEXT,
    estado_alerta int2,
    fecha_alerta Date,
    constraint pk_alertas primary key(cod_alerta)
);
Alter table alertas owner to user_node;

CREATE table accesos(
    cod_usuario int4,
    correo_acceso varchar(100) not null unique,
    clave_acceso varchar(200)not null ,
    constraint pk_accesos primary key(cod_usuario)  
);
Alter table accesos owner to user_node;

CREATE TABLE ingresos(
    cod_ingreso SERIAL,
    cod_usuario int4 not null,
    fecha_ingreso DATE,
    hora_ingreso TIME,
    constraint pk_ingresos primary key(cod_ingreso)
);
Alter table ingresos owner to user_node;

ALTER TABLE usuarios
add constraint fk_usuarios_ref_roles foreign key(cod_rol)
references roles(cod_rol)
on delete restrict on update cascade;

ALTER TABLE alertas
add constraint fk_alerta_ref_usuarios foreign key(cod_usuario)
references usuarios(cod_usuario)
on delete restrict on update cascade;

ALTER TABLE imagenes
add constraint fk_imagenes_ref_usuarios foreign key(cod_usuario)
references usuarios(cod_usuario)
on delete restrict on update cascade;

ALTER TABLE accesos
add constraint fk_acceso_ref_usuarios foreign key(cod_usuario)
references usuarios(cod_usuario)
on delete restrict on update cascade;

ALTER TABLE ingresos
add constraint fk_ingresos_ref_accesos foreign key(cod_usuario)
references usuarios(cod_usuario)
on delete restrict on update cascade;