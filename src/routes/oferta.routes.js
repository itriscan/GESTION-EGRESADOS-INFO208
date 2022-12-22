import { Router } from "express";

import { getOfer, postOfer } from "../controllers/oferta.controllers.js";

const router = Router();

router.get('/oferta', getOfer);

router.post('/oferta', postOfer);

export default router;