import { Router } from "express";
import ControllerUsuarios from "../controller/usuarioController.js";

const rotas = Router();

rotas.get("/usuarios", (req, res) => {
  res.json(ControllerUsuarios.listarUsuarios());
});

export default rotas;
