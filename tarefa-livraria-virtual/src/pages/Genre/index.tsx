import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import type { Book } from "../../types";
import BookCardGenre from "../../components/BookCardGenre";
import SearchBar from "../../components/SearchBar";
import styles from "./styles.module.css";

export default function Genero() {
  const { nome } = useParams<{ nome: string }>();
  const [books, setBooks] = useState<Book[]>([]);

  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/livros?genero=${nome}`)
      .then((response) => setBooks(response.data));
  }, [nome]);

  const livrosFiltrados = books.filter((book) =>
    book.titulo.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <SearchBar
          filtro={filtro}
          onFiltroChange={setFiltro}
          placeholder="Buscar por título..."
        />
      </div>

      <Link to="/home" className={styles.backLink}>
        {`< ${nome}`}
      </Link>

      <div className={styles.cardList}>
        {livrosFiltrados.map((book) => (
          <BookCardGenre
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
  );
}
