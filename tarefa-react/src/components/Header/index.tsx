import './styles.module.css';
import logo from '../../assets/logo.svg';

export default function Header() {
    return (
        <header>
            <img src={logo} alt="logo injunior" />
        </header>
    );
}