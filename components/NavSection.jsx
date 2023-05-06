import styles from "@/styles/Navbar.module.scss"
import Link from 'next/link'
import { AiOutlineCloseCircle } from 'react-icons/ai';

const NavSection = () => {
  return (
    <div className={styles.navSection}>
      <AiOutlineCloseCircle size={30} className={styles.close} />
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
  )
}

export default NavSection