import { Link } from "react-router-dom";
import styles from "./styles.module.css";

interface BookCardGenreProps {
  id: number;
  titulo: string;
  autor: string;
  preco: number;
  capa: string;
}

export default function BookCardGenre({ id, titulo, autor, preco, capa }: BookCardGenreProps) {
  return (
    <Link to={`/livro/${id}`} className={styles.card}>
      <img src={capa} alt={titulo} className={styles.cardImage} />

      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{titulo}</h3>
        <div className={styles.cardFooter}>
          <p className={styles.cardAuthor}>{autor}</p>
          <p className={styles.cardPrice}>R$ {preco.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
}
