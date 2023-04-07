import Image from 'next/image'
import styles from "@/styles/ItemCard.module.scss"

const ItemCard = ({ cardInfo }) => {
  const Img = cardInfo.image
  return (
    <div className={styles.cardImage}>
      <Image src={Img} alt="painting" width="550"  />
    </div>
  )
}

export default ItemCard