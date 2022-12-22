import {Router} from 'express'
import {getUserLogin, deleteUser ,putUser, getUser, postUser} from '../controllers/usuario.controllers.js'

const router = Router()

router.get('/user', getUser);

router.post('/user', postUser);

router.put('/user', putUser);

router.delete('/user', deleteUser);

router.post('/user/login', getUserLogin);


export default router;