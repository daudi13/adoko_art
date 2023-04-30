import styles from "@/styles/Navbar.module.scss"
import Link from 'next/link'
import { RxHamburgerMenu } from "react-icons/rx"

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <h1 className={styles.logo}>Adoko Arts</h1>
      <div className={styles.navSection}>
        <ul className={styles.navItems}>
          <li className={styles.navItem}><Link href="/" passHref>Home</Link></li>
          <li className={styles.navItem}><Link href="/paintings" passHref>Paintings</Link></li>
          <li className={styles.navItem}><Link href="/sculptures" passHref>Sculptures</Link></li>
          <li className={styles.navItem}><Link href="/events" passHref>Events</Link></li>
          <li className={styles.navItem}><Link href="/shop" passHref>shop</Link></li>
          <li className={styles.navItem}><Link href="/about" passHref>About me</Link></li>
          <li className={styles.navItem}><Link href="/contacts" passHref>Contacts</Link></li>
        </ul>
      </div>
      <RxHamburgerMenu size={45} className={styles.menuBtn} />
    </div>
  )
}

export default Navbar