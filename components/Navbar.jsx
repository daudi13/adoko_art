import styles from "@/styles/Navbar.module.scss"
import { RxHamburgerMenu } from "react-icons/rx"
import NavSection from "./NavSection"
import { useDispatch, useSelector } from "react-redux"
import { open } from "@/redux/switchSlice";


const Navbar = () => {
  const switchValue = useSelector((state) => state.navSwitch.value);
  const dispatch = useDispatch();
  // const scrnWidth = window.innerWidth;
  // console.log(scrnWidth);
  return (
    <div className={styles.nav}>
      <h1 className={styles.logo}>Adoko Arts</h1>
      {switchValue && <NavSection/>}
      <RxHamburgerMenu size={45} className={styles.menuBtn} onClick={() => dispatch(open())} />
      {switchValue && console.log("open")}
    </div>
  )
}

export default Navbar