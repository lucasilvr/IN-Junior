// Header.tsx
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"
import botaoLogin from "../../assets/login.png";
import botaoShop from "../../assets/shop.png";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      
      <Link to="/home" className={styles.logo}>
        <img src={logo} alt="Logo" />
      </Link>

      
      <div className={styles.headerButtons}>
        <Link to="/">
          <img src={botaoLogin} alt="login" className={styles.iconBtn} />
        </Link>

        <Link to="#">
          <img src={botaoShop} alt="shop" className={styles.iconBtn} />
        </Link>
      </div>
    </header>
  );
}
