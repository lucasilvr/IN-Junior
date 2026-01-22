import { useState } from "react";
import styles from "./styles.module.css";
import foto1 from "../../assets/felyppe.jpg";
import foto2 from "../../assets/mellany.jpg";
import foto3 from "../../assets/jessy.jpg";
import BotaoLike from "../BotaoLike";
import BotaoExcluir from "../BotaoExcluir"; 

export default function ComentariosFixo() {
  const [comentarios, setComentarios] = useState([
    {
      id: 1,
      nome: "Felyppe Nunes",
      foto: foto1,
      data: "Cerca de 2h",
      texto: "Est aspernatur quis eos natus dicta et internos",
    },
    {
      id: 2,
      nome: "Mellany Carter",
      foto: foto2,
      data: "Cerca de 2h",
      texto: "Est aspernatur quis eos natus dicta et internos",
    },
    {
      id: 3,
      nome: "Jessy Logan",
      foto: foto3,
      data: "Cerca de 2h",
      texto: "Est aspernatur quis eos natus dicta et internos",
    },
  ]);

  function removerComentario(id: number) {
    setComentarios((anteriores) =>
      anteriores.filter((comentario) => comentario.id !== id)
    );
  }

  return (
    <div className={styles.comentarios}>
      {comentarios.map((comentario) => (
        <div key={comentario.id} className={styles.comentarioBloco}>
          <div className={styles.comentarioCaixa}>
            <img src={comentario.foto} className={styles.comentarioFoto} />
            <div className={styles.comentario}>
              <div className={styles.comentarioHeader}>
                <div>
                  <span className={styles.comentarioNome}>
                    {comentario.nome}
                  </span>
                  <p className={styles.comentarioData}>{comentario.data}</p>
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
  );
}
