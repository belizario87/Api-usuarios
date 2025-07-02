import usuarios from "../database/database.js";
import { v4 as uuidv4 } from "uuid";

const arrayUsuarios = usuarios;

const listarUsuarios = function (req, res) {
  return res.json(usuarios);
};

const salvarUsuario = function (req, res) {
  const usuarioDTO = {
    id: uuidv4(),
    ...req.body,
  };

  arrayUsuarios.push(usuarioDTO);
  return res.sendStatus(201);
};

const atualizarUsuario = function (req, res) {
  const { id } = req.params;

  const usuarioIndex = arrayUsuarios.findIndex((usuario) => usuario.id === id);
  if (usuarioIndex === -1) {
    return res.status(404).json({ message: "Usuário nao encontrado" });
  }
  //atualiza dados do usuario
  arrayUsuarios[usuarioIndex] = {
    ...arrayUsuarios[usuarioIndex], //mantem os dados existentes
    ...req.body, //substitiu pelos novos dados
  };

  return res.status(200).json(arrayUsuarios[usuarioIndex]);
};

const deletarUsuario = function (req, res) {
  const { id } = req.params;
  const usuarioIndex = arrayUsuarios.findIndex((usuario) => usuario.id === id);
  if (usuarioIndex === -1) {
    return res.status(404).json({ message: "Usuário nao encontrado" });
  }

  arrayUsuarios.splice(usuarioIndex, 1);
  return res.status(200).json({ message: "Usuário deletado com sucesso" });
};

export default {
  listarUsuarios,
  salvarUsuario,
  atualizarUsuario,
  deletarUsuario,
};
