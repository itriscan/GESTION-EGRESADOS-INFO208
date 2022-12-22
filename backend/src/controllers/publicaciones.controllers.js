import {Publicacion} from '../model/publicaciones.model.js'

import { getPublicaciones, postPublicacion, deletePublicacion } from '../persistence/publicaciones.persistence.js';

export const getPublic = async(req, res) =>{
    const result = await getPublicaciones(req.body);
    res.json(result[0])
}


export const postPublic = async(req, res) => {
    let publicacion = new Publicacion(req.body)
    const result = await postPublicacion(publicacion);
    res.send("Publicacion posteada correctamente")
}

export const deletePublic = async (req, res) => {
    const result = await deletePublicacion(req.body);
    res.send("Publicacion eliminada correctamente")
}