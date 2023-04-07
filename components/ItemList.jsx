import styles from "@/styles/ItemList.module.scss"
import data from "./data"
import ItemCard from "./ItemCard"

const ItemList = () => {
  console.log(data)
  const newData = data
  return (
    <div className={styles.container}>
      {
        newData?.map((cardInfo) => {
          return (
            <ItemCard cardInfo={cardInfo} key={cardInfo.id} />
          )
        })
      }
    </div>
  )
}

export default ItemList