import styles from "./styles.module.css";
import iconeLixeira from "../../assets/lixeira.png";

interface BotaoExcluirProps {
  onDelete: () => void;
}

export default function BotaoExcluir({ onDelete }: BotaoExcluirProps) {
  return (
    <button onClick={onDelete} className={styles.btnLixeira}>
      <img src={iconeLixeira} />
    </button>
  );
}
