import {pool} from '../db.js'

export const getUsuario = async() => {
    const result = await pool.query("SELECT * FROM user")
    return result
}

export const postUsuario = async(user) => {
    const [row] = await pool.query("INSERT INTO user (rut, nombres, apellidos) VALUES (?,?,?)", [user.rut, user.nombres, user.apellidos])
    return {row}
} 