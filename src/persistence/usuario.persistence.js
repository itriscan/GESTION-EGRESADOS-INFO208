import {pool} from '../db.js'

export const getUsuario = async() => {
    const result = await pool.query("SELECT * FROM egresado")
    return result
}

export const createUser = async(egresado) => {
    const [row] = await pool.query("INSERT INTO egresado (rut) VALUES (?)", [egresado.rut])
    return {row};
} 