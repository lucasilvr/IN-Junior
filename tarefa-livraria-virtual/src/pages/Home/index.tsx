import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookCardHome from "../../components/BookCardHome";
import banner from "../../assets/banner-area.png";
import styles from "./styles.module.css";
import type { Book } from "../../types";
import api from "../../services/api";

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await api.get<Book[]>("/livros");
      setBooks(response.data);
    };
    fetchBooks();
  }, []);

  const generos = [...new Set(books.map((book) => book.genero))];

  return (
    <div className={styles.container}>
      <img src={banner} className={styles.banner} alt="Banner" />

      {generos.map((genero) => (
        <section key={genero} className={styles.section}>
          <div className={styles.contentWrapper}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{genero}</h2>
              <Link to={`/genero/${genero}`} className={styles.verMaisBtn}>
                Ver mais
              </Link>
            </div>

            <div className={styles.cardList}>
              {books
                .filter((book) => book.genero === genero)
                .slice(0, 4)
                .map((book) => (
                  <BookCardHome
                    key={book.id}
                    id={book.id}
                    titulo={book.titulo}
                    autor={book.autor}
                    preco={book.preco}
                    capa={book.capa}
                  />
                ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
