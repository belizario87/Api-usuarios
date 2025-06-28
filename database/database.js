import { v4 as uuidv4 } from "uuid";

const usuarios = [
  {
    id: uuidv4(),
    nomeCompleto: "Leonardo F Belizario",
    email: "leonardobelizario88@gmail.com",
    nascimento: "17/07/1987",
    cpf: "12419251790",
    telefone: 22988460270,
    nomeUsuario: "Logan123",
    senha: "Scar99@",
  },
  {
    id: uuidv4(),
    nomeCompleto: "Mariana S Oliveira",
    email: "mariana.oliveira@gmail.com",
    nascimento: "05/03/1992",
    cpf: "32165498701",
    telefone: 21987654321,
    nomeUsuario: "MariS92",
    senha: "Mari@2024",
  },
  {
    id: uuidv4(),
    nomeCompleto: "Carlos A Souza",
    email: "carlos.souza@hotmail.com",
    nascimento: "12/11/1985",
    cpf: "98765432100",
    telefone: 21999887766,
    nomeUsuario: "CarlosA85",
    senha: "Car@lso85",
  },
  {
    id: uuidv4(),
    nomeCompleto: "Fernanda P Lima",
    email: "fernanda.lima@yahoo.com",
    nascimento: "23/08/1990",
    cpf: "45612378909",
    telefone: 21988776655,
    nomeUsuario: "FepaLima",
    senha: "Ferna#90",
  },
];

export default usuarios;
