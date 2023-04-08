import Image from 'next/image'
import styles from "@/styles/ItemCard.module.scss"
import { useState } from 'react'

const ItemCard = ({ cardInfo }) => {
  const [active, setActive] = useState(false);

  const Img = cardInfo.image
  return (
    <div className={styles.cardImage}>
      <Image src={Img} alt="painting" width="450" height="600" className={styles.img} onClick={() => setActive(false)}/>
      <button className={styles.infoButton} onClick={() => setActive(true)}>info</button>
      <div className={active ? styles.desc : styles.none}>
        <p>{cardInfo.desc}</p>
      </div>
    </div>
  )
}

export default ItemCard