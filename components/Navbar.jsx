import React from 'react'
import styles from "@/styles/Navbar.module.scss"
import Link from 'next/link'

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
          <li className={styles.navItem}><Link href="/About" passHref>About me</Link></li>
          <li className={styles.navItem}><Link href="/Contacts" passHref>Contacts</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar