import express from "express";
import dotenv from "dotenv";
import usuarios from "./database/database.js";
import ControllerUsuarios from "./controller/usuarioController.js";

dotenv.config();

const app = express();
app.use(express.json());

app.get("/usuarios", (req, res) => {
  res.json(ControllerUsuarios.listarUsuarios());
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
