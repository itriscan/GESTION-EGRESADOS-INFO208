export class User{
    constructor({rut, nombres, apellidos, carrera, telefono, mail, password, pais, region, comuna, situacion_laboral, empresa, cargo, direccion, anio_egreso, instagram, twitter, facebook, linkedin, acerca_de}){
        this.rut = rut;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.carrera = carrera;
        this.telefono = telefono;
        this.mail = mail;
        this.password = password;
        this.pais = pais;
        this.region = region;
        this.comuna = comuna;
        this.situacion_laboral = situacion_laboral;
        this.empresa = empresa;
        this.cargo = cargo;
        this.direccion = direccion;
        this.anio_egreso = anio_egreso;
        this.instagram = instagram;
        this.facebook = facebook;
        this.twitter = twitter;
        this.linkedin = linkedin;
        this.acerca_de = acerca_de;
    }
}