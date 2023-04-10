import styles from "@/styles/Paintings.module.scss"
import data from "@/components/data"
import ArtCard from "@/components/ArtCard"

const index = () => {
  return (
    <div className={styles.container}>
      {data?.map((card) => {
        return (
          <ArtCard card={card} key={card.id} />
        )
      }) }
    </div>
  )
}

export default index