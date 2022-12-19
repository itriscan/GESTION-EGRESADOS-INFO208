import { User } from '../model/usuario.model.js'
import {deleteUsuario, updateUsuario , postUsuario, getUsuario } from '../persistence/usuario.persistence.js'


export const postUser = async (req, res) => {
    let user = new User(req.body)
    const result = await postUsuario(user);
    res.json(user)
}

export const getUser = async (req, res) => {
    const result = await getUsuario(req.body)
    res.json(result[0]);
}

export const putUser = async(req, res) => {
    const result = await updateUsuario(req.body);
    res.json(result[0])
}

export const deleteUser = async(req, res) => {
    const result = await deleteUsuario(req.body) 
    res.send("Eliminado correctamente")
}