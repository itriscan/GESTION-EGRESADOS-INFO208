import {Oferta} from "../model/oferta.model.js"

import {postOferta, getOferta } from "../persistence/oferta.persistence.js"

export const getOfer = async(req, res) => {
    const result = await getOferta();
    res.send("ofertas encontradas...")
    res.json(result[0]);
    
}

export const postOfer = async(req, res) => {
    let oferta = new Oferta(req.body)
    const result = await postOferta(oferta);
    res.send("Oferta posteada correctamente")
}