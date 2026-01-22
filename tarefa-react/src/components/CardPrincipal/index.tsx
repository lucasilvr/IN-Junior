import styles from "./styles.module.css";
import foto1 from "../../assets/react.png";
import foto2 from "../../assets/lucas.jpg";

export default function CardPrincipal() {
  return (
    <>
      <div className={styles.cardPrincipal}>
        <div className={styles.parteCima}>
          <img src={foto1} />
        </div>
        <div>
          <img src={foto2} className={styles.circle} />
        </div>
        <div className={styles.parteBaixo}>
          <h2>Lucas Silveira</h2>
          <h3>Dev Front-end</h3>
        </div>
      </div>
    </>
  );
}
