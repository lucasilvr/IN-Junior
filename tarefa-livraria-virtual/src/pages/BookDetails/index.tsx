import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import type { Book } from "../../types";
import styles from "./styles.module.css";

export default function BookDetails() {
  const navigate = useNavigate();
  const { bookId } = useParams<{ bookId: string }>();
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    if (!bookId) return;

    const fetchBookDetails = async () => {
      try {
        const response = await api.get<Book>(`/livros/${bookId}`);
        setBook(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBookDetails();
  }, [bookId]);

  if (!book) {
    return <p className={styles.loading}>Carregando...</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.bookDetailsWrapper}>
        <button onClick={() => navigate(-1)} className={styles.backButton}>
          &lt; Detalhes do livro
        </button>

        <div className={styles.bookDetails}>
          <div className={styles.coverWrapper}>
            <img src={book.capa} className={styles.cover} alt={book.titulo} />
          </div>
          <div className={styles.info}>
            <h1>{book.titulo}</h1>
            <h2>{book.autor}</h2>

            <h3>Sinopse</h3>
            <p>{book.sinopse}</p>

            <button className={styles.addToCartButton}>
              R$ {book.preco} | Adicionar ao carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
