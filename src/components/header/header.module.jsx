import Logo from '../../assets/fanation-ico-white.svg';
import styles from './header.module.css';

export default function Header() {
    return(
        <header className={styles.header}>
            <img src={Logo} alt="Fanation logo" className={styles.logo} />
        </header>
    )
} 