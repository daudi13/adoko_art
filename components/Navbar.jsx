import styles from "@/styles/Navbar.module.scss"
import { RxHamburgerMenu } from "react-icons/rx"
import NavSection from "./NavSection"
const Navbar = () => {
  return (
    <div className={styles.nav}>
      <h1 className={styles.logo}>Adoko Arts</h1>
      <NavSection/>
      <RxHamburgerMenu size={45} className={styles.menuBtn} />
    </div>
  )
}

export default Navbar