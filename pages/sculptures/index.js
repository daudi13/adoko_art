import styles from "@/styles/Paintings.module.scss"
import data from "@/components/data";
import ArtCard from "@/components/ArtCard"

const index = () => {
  const { sculptures } = data;
  return (
    <div className={styles.container}>
      {sculptures?.map((card) => {
        return (
          <ArtCard card={card} key={card.id} />
        )
      }) }
    </div>
  )
}

export default index