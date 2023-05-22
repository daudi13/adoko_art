import styles from "@/styles/About.module.scss";
import Img from "public/images/portraits.jpg"
import Image from "next/image";

const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Image className={styles.image} src={Img} width="900" />
        <div className={styles.underline} />
        <div className={styles.descbox}>
          <h2 className={styles.artistName}>John Doe</h2>
          <div className={styles.desc}>
            <p>
              John Adoko is a renowned visual artist based in Nairobi, Kenya. He is known for his incredible talent in working with mixed media, sculpting, mural painting, and traditional dish making. His work has been exhibited in numerous galleries across Kenya and beyond.
              <br/>
              Adoko was born and raised in Nairobi, where he developed an interest in art at a young age. His passion for art led him to pursue a Bachelor of Fine Arts degree at the University of Nairobi. During his time at the university, Adoko discovered his love for working with different mediums and experimenting with different techniques.
              <br />
              After completing his degree, Adoko began to create unique pieces of art that showcased his diverse talents. He started working with mixed media, incorporating different materials such as wood, metal, and fabric into his artwork. His mixed media pieces are visually striking and thought-provoking, often exploring themes of identity, culture, and the environment.<br/>
              In addition to mixed media, Adoko is also a skilled sculptor. He creates intricate sculptures that capture the essence of his subjects, whether they are people, animals, or objects. His sculptures are often made from materials such as clay, stone, and metal, and are highly detailed and expressive.
              <br/>
              Adoko's talents also extend to mural painting. He has painted murals in various public spaces across Nairobi, transforming plain walls into vibrant, colorful works of art. His murals often depict scenes from everyday life in Kenya, such as people going about their daily routines, or animals roaming in the wild.
              <br/>
              Apart from his work as a visual artist, Adoko also has a passion for traditional dish making. He has honed his skills over the years, learning from his grandmother and mother, who were both skilled cooks. Adoko's dishes are a fusion of traditional Kenyan cuisine and modern culinary techniques, resulting in a unique and delicious dining experience.
              <br/>
              When he is not working on his art or in the kitchen, Adoko enjoys spending time with his dogs and jogging. He believes that jogging helps him clear his mind and stay focused on his art. He also has a special connection with dogs and often incorporates them into his artwork.
              <br/>
              Overall, John Adoko is a talented and multifaceted artist who has made a significant impact on the Kenyan art scene. His work is a reflection of his diverse interests and talents, and he continues to inspire others with his creativity and passion for art
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index