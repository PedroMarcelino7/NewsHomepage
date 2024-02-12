import styles from './Navbar.module.css'

import Logo from '../../assets/images/logo.svg'
import Menu from '../../assets/images/icon-menu.svg'
import MenuClose from '../../assets/images/icon-menu-close.svg'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div>
                <img src={Logo} alt="Logo" />
            </div>

            <div className={styles.menu_container}>
                <img className={styles.menu} src={Menu} alt="Menu" />
            </div>
        </nav>
    )
}