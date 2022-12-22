import {pool} from '../db.js'

export const getPublicaciones = async() => {
    const result = await pool.query('SELECT * FROM publicaciones');
    return result
}


export const postPublicacion = async(publicacion) => {
    const [row] = await pool.query('INSERT INTO publicaciones (ref_user_publ, descripcion) VALUES (?,?)', [
        publicacion.id_user_publ,
        publicacion.descripcion
    ]);
    return {row}
}

export const deletePublicacion = async (publicacion) => {
    const result = await pool.query('DELETE FROM publicaciones WHERE id_publicacion = ?', [publicacion.id_publicacion]);
    return result
}