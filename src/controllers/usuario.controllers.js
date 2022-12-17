import { User } from '../model/usuario.model.js'
import { createUser, getUsuario } from '../persistence/usuario.persistence.js'


export const postUser = async (req, res) => {
    let informacion = new User(req.params)
    res.send(informacion)
    const result = await createUser(informacion);
    res.send(informacion)
}

export const getUser = async (req, res) => {
    const result = await getUsuario()
    res.json(result[0]);
}
