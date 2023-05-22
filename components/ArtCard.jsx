import Image from 'next/image'
import styles from "@/styles/ArtCard.module.scss"

const ArtCard = ({ card }) => {
  const img = card.image
  return (
    <div className={styles.container}>
      <Image src={img} alt="painting" width="490" className={styles.img} />
      <div className={styles.desc}>
        <p>{card.desc}</p>
      </div>
    </div>
  )
}

export default ArtCard