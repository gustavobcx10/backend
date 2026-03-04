import { Router } from "express";
import * as usuarioController from "../controller/usuario.Controller.js"

const router = Router ()

router.post("/login", usuarioControlle.login);
router.get("/", usuarioController.listar);
router.get("/:id", usuarioController.buscarPorId);
router.post("/", usuarioController.criar);

export default router