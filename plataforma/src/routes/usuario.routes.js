import {Router} from 'express'
import {getUser, postUser} from '../controllers/usuario.controllers.js'

const router = Router()

router.get('/user', getUser)

router.post('/user', postUser);

router.get( '/secreto', (req,res) => {
    console.log("hola")
    res.send("aquí no es :(")
})

export default router;