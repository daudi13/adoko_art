import styles from "@/styles/contacts.module.scss"
import { HiLocationMarker } from "react-icons/hi";
import { AiTwotonePhone, AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import {BsPeopleFill} from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import Link from "next/link";
import mapSnap from "public/images/Screenshot.png"
import Image from "next/image";
import Form from "@/components/Form";
import { useState } from "react";

const index = () => {
  const [open, setOpen] = useState(false);

  const map = "https://www.google.com/maps/place/Chondo+Chema/@-1.1551132,36.919464,18.84z/data=!4m9!1m2!10m1!1e1!3m5!1s0x182f3f3cf18e2abb:0x135b4039b9139dd6!8m2!3d-1.1557853!4d36.9183177!16s%2Fg%2F11k3pxr6zt"
  return (
    <div className={styles.container}>
      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <HiLocationMarker size={50} className={styles.icons} /> 
            <h3>Location</h3>
          </div>
          <div className={styles.content}>
          <Link href={map} target="blank"><Image src={mapSnap} width="300" className={styles.image}/></Link>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <BsPeopleFill size={50} className={styles.icons} />
            <h3>Socials</h3>
          </div>
          <div className={styles.contentOne}>
            <Link href="#">
              <AiFillFacebook size={45} className={styles.icons} style={{color: "#3b5998"}}/>
            </Link>
            <Link href="#">
              <AiFillInstagram size={45} className={styles.icons} style={{color: "rgb(214,41,118)"}}/>
            </Link>
            <Link href="#">
              <FaTiktok size={40} className={styles.icons} />
            </Link>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <AiTwotonePhone size={45} className={styles.icons} />
            <h3>Contacts</h3>
          </div>
          <div className={styles.contentTwo}>
            <Link href="tel:+254 745294210">+254 745294210</Link>
            <Link href="mailto:info@adokoarts.com">info@adokoarts.com</Link>
          </div>
        </div>
      </div>
      <button className={styles.btn} onClick={() => setOpen(true)}>Write to us</button>
      <div className={styles.contactForm}>
      </div>
      {open && <div className={styles.overlay} onClick={() => setOpen(false)}><Form/></div>}
    </div>
  )
}

export default index