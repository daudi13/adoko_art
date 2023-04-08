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
      <div className={styles.desc}>
        <p>Meet John, a talented Kenyan artist who embarked on a creative journey two years ago that resulted in a stunning project that captivated art enthusiasts across the country. Inspired by his personal experiences and cultural background, John sought to create a collection of paintings that would not only showcase his artistic abilities but also convey a powerful message about the importance of preserving African traditions and identity.</p>
        <p>John's project, titled "Echoes of the Ancestors," was a culmination of months of hard work and dedication. He spent countless hours researching and exploring various African cultures and traditions, drawing inspiration from ancient artifacts, folklore, and tribal rituals. He also sought the guidance of local elders and historians, who shared their knowledge and insights into the rich heritage of Kenya and its people.</p>
        <p>The project took shape over the course of a year, with John meticulously creating each piece of artwork by hand. He experimented with various techniques and mediums, including oil paints, watercolors, and charcoal, to bring his vision to life. Each painting was a masterpiece in its own right, capturing the essence of African culture and conveying a sense of history and tradition.</p>
        <p>When the project was finally completed, John held a grand exhibition that attracted art enthusiasts and critics from all over the country. The response was overwhelming, with many praising John's unique style and creative vision. His project not only showcased his artistic abilities but also served as a powerful reminder of the importance of preserving African heritage and identity.</p>
        <p>Looking back on his project, John reflects on the inspiration and passion that drove him to create something truly remarkable. He hopes that his work will inspire others to explore their own cultural heritage and embrace the rich diversity of African traditions.</p>
      </div>
    </div>
  )
}

export default ItemList