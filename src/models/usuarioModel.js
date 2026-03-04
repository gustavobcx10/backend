import { conexao } from"../config/db.js";

export async function ListarUsuarios(){
    const [rows] = await conexao.query(
        "SELECT id, nome, email, criado_em FROM usuarios WHERE id = ?"
    );
    return resultado

}

export async function BusacarUsuarios(){
    const [resultado] = await conexao.query(
        "SELECT id, nome, email, criado_em FROM usuarios WHERE id = ?",[id]
    );
    return resultado[0];

}

export async function criarUsuario({nome, email, senha_hash}) {
  const [resultado] = await conexao.query(
    "INSERT INTO usuarios (nome, email, senha_hash) VALUES (?,?,?)",
    [nome, email, senha_hash]
  );

  return resultado.insertID;
}

export async function buscarUsuarioPorEmail(email) {
    const [resultado] = await conexao.query(
        "SELECT id, nome, email, criado_em FROM usuarios WHERE email = ?",
        [email]
    );
    
    return resultado[0]; 
}