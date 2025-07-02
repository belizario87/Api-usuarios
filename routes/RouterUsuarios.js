import { Router } from "express";
import ControllerUsuarios from "../controller/usuarioController.js";

const rotas = Router();

rotas.get("/usuarios", ControllerUsuarios.listarUsuarios);

rotas.post("/usuarios", ControllerUsuarios.salvarUsuario);

rotas.put("/usuario/:id", ControllerUsuarios.atualizarUsuario);

rotas.delete("/usuario:id", ControllerUsuarios.deletarUsuario);

export default rotas;
