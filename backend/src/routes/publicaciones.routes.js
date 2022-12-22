import { Router } from "express";

import { getPublic, postPublic, deletePublic } from "../controllers/publicaciones.controllers.js";

const router = Router();

router.get('/publicacion', getPublic);

router.post('/publicacion', postPublic);

router.delete('/publicacion', deletePublic);

export default router;