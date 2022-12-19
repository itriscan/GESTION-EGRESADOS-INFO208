import {Router} from 'express'
import {deleteUser ,putUser, getUser, postUser} from '../controllers/usuario.controllers.js'

const router = Router()

router.get('/user', getUser);

router.post('/user', postUser);

router.put('/user', putUser);

router.delete('/user', deleteUser);

export default router;