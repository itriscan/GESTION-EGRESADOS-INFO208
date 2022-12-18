CREATE DATABASE IF NOT EXISTS proyecto;

use proyecto;

CREATE TABLE `user`(
    `id_user` INT NOT NULL AUTO_INCREMENT,
    `rut` varchar(255),
    `nombres` varchar(255),
    `apellidos` varchar(255),
    `carrera` varchar(255),
    `telefono`  varchar(255),
    `mail`  varchar(255),
    `password` varchar(255),
    `pais` varchar(255),
    `region` varchar(255),
    `comuna` varchar(255),
    `situacion_laboral` varchar(255),
    `empresa` varchar(255),
    `cargo` varchar(255),
    `direccion` varchar(255),
    `anio_egreso` INT,
    `instagram`  varchar(255),
    `twitter`  varchar(255),
    `facebook`  varchar(255),
    `linkedin`  varchar(255),
    `acerca_de` TEXT,
    PRIMARY KEY (`id_user`)

);

CREATE TABLE IF NOT EXISTS `trabajo_formal`(
    `id_trabajo` INT NOT NULL AUTO_INCREMENT,
    `ref_user_tra` INT,
    `empresa` varchar(255),
    `descripcion` varchar(255),
    `tags` varchar(255),
    FOREIGN KEY (`ref_user_tra`) REFERENCES  `user` (`id_user`),
    PRIMARY KEY (`id_trabajo`)
);

CREATE TABLE IF NOT EXISTS `practica`(
    `id_practica` INT NOT NULL AUTO_INCREMENT,
    `ref_user_pra` INT,
    `empresa` varchar(255),
    `descripcion` TEXT,
    `tags` varchar(255),
    FOREIGN KEY (`ref_user_pra`) REFERENCES  `user` (`id_user`),
    PRIMARY KEY (`id_practica`)
);

CREATE TABLE IF NOT EXISTS `publicaciones`(
    `id_publicacion` INT NOT NULL AUTO_INCREMENT,
    `ref_user_publ` INT,
    `descripcion` TEXT,
    FOREIGN KEY (`ref_user_publ`) REFERENCES  `user` (`id_user`),
    PRIMARY KEY (`id_publicacion`)
);