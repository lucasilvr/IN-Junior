import { useState } from "react";
import styles from "./styles.module.css";
import foto from "../../assets/lucas.jpg";
import BotaoLike from "../BotaoLike";
import BotaoExcluir from "../BotaoExcluir";

interface Comentario {
  id: number;
  texto: string;
}

export default function ComentariosInput() {
  const [comentario, setComentario] = useState("");
  const [comentarios, setComentarios] = useState<Comentario[]>([]);

  function envio(e: React.FormEvent) {
    e.preventDefault();
    if (comentario.trim() === "") {
      return;
    }
    const novoComentario = {
      id: Date.now(),
      texto: comentario,
    };
    setComentarios((anteriores) => [...anteriores, novoComentario]);
    setComentario("");
  }

  function removerComentario(id: number) {
    setComentarios((anteriores) =>
      anteriores.filter((comentario) => comentario.id !== id)
    );
  }

  return (
    <>
      <form onSubmit={envio} className={styles.comentarioBox}>
        <p className={styles.comentariosTitulo}>Deixe seu Feedback</p>
        <input
          type="text"
          placeholder="Escreva um comentário..."
          className={styles.inputComentario}
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
        />
        <button type="submit" className={styles.btnComentar}>
          Comentar
        </button>
      </form>

      <div className={styles.comentarios}>
        {comentarios.map((comentario) => (
          <div key={comentario.id} className={styles.comentarioBloco}>
            <div className={styles.comentarioCaixa}>
              <img src={foto} className={styles.comentarioFoto} />
              <div className={styles.comentario}>
                <div className={styles.comentarioHeader}>
                  <div>
                    <span className={styles.comentarioNome}>
                      Lucas Silveira
                    </span>
                    <p className={styles.comentarioData}>agora mesmo</p>
                  </div>
                  <BotaoExcluir
                    onDelete={() => removerComentario(comentario.id)}
                  />
                </div>
                <p className={styles.comentarioTexto}>{comentario.texto}</p>
              </div>
            </div>
            <div className={styles.likeArea}>
              <BotaoLike />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
