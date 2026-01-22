import searchIcon from "../../assets/Search.png";
import styles from "./styles.module.css";

interface SearchBarProps {
  filtro: string;
  onFiltroChange: (novoFiltro: string) => void;
  placeholder: string;
}

export default function SearchBar({
  filtro,
  onFiltroChange,
  placeholder,
}: SearchBarProps) {
  return (
    <div className={styles.inputWrapper}>
      <img src={searchIcon} className={styles.inputIcon} />

      <input
        type="text"
        className={styles.searchInput}
        placeholder={placeholder}
        value={filtro}
        onChange={(e) => onFiltroChange(e.target.value)}
      />
    </div>
  );
}
