import {pool} from '../db.js'


export const getOferta = async() => {
    const result = await pool.query("SELEC * FROM ofertas;")
    return result
}

export const postOferta = async(oferta) => {
    const [row] = await pool.query("INSERT INTO oferta (ref_user_oft, tipo, empresa, descripcion, tags) VALUES (?,?,?,?,?)", 
    [oferta.ref_user_oft,
    oferta.tipo,
    oferta.empresa,
    oferta.descripcion,
    oferta.tags ])
    return {row}
}