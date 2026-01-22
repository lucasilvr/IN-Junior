import styles from "./styles.module.css";
import ComentariosInput from "../ComentariosInput";
import ComentariosFixo from "../ComentariosFixo";
import React from "react";

interface CardProps {
  fotoPerfil: string;
  nome: string;
  cargo: string;
  texto: React.ReactNode;
}

export default function Card({ fotoPerfil, nome, cargo, texto }: CardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.informacoes}>
        <div className={styles.info1}>
          <img src={fotoPerfil} className={styles.circle} />
          <div>
            <h2>{nome}</h2>
            <h3>{cargo}</h3>
          </div>
        </div>
        <div className={styles.info2}>
          <p>Publicado há 1h</p>
        </div>
      </div>

      <div className={styles.texto}>{texto}</div>
      <ComentariosInput />
      <ComentariosFixo />
    </div>
  );
}
