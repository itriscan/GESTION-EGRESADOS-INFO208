export class Oferta{
    constructor({ref_user_oft, tipo, empresa, descripcion, tags}){
        this.ref_user_oft = ref_user_oft;
        this.empresa = empresa;
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.tags = tags;

    }
}