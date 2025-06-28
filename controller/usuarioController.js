import usuarios from "../database/database.js";

const listarUsuarios = function () {
  return usuarios;
};

export default {
  listarUsuarios,
};
