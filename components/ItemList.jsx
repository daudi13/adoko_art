import styles from "@/styles/ItemList.module.scss"
import data from "./data"
import ItemCard from "./ItemCard"

const ItemList = () => {
  const newData = data
  return (
    <div className={styles.container}>
      <>
        {
          newData?.map((cardInfo) => {
            return (
              <ItemCard cardInfo={cardInfo} key={cardInfo.id} />
            )
          })
        }
      </>
      <div className={styles.desc} style={{width: "450px"}}>
        <p>Welcome to my website! I'm an artist who loves to work with mixed mediums, sculpturing, and content creation. My general style is inspired by the beauty and complexity of the world around me, and I strive to create art that evokes emotion and captures the imagination.<br/>
        Working with mixed mediums allows me to experiment with different textures, colors, and forms. I love to combine traditional mediums like paint and ink with unconventional materials like paper, fabric, and found objects. The result is a unique and dynamic artwork that engages the senses and sparks curiosity.<br/>
        Sculpturing is another passion of mine, and I enjoy working with a variety of materials, from clay and stone to metal and wood. Sculpting allows me to explore three-dimensional forms and bring my ideas to life in a tangible way. I enjoy the challenge of working with different materials and techniques, and I'm always pushing myself to learn and grow as an artist.<br/>
        In addition to my traditional artwork, I also create digital content, including illustrations, animations, and videos. This allows me to reach a wider audience and share my art in new and exciting ways.
        Overall, my style is characterized by a sense of playfulness and experimentation, and I'm always exploring new mediums and techniques. I believe that art should be accessible and enjoyable for everyone, and I strive to create artwork that is both aesthetically pleasing and thought-provoking.</p>
      </div>
    </div>
  )
}

export default ItemList