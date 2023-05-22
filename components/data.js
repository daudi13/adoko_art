import img1 from "../public/images/boston-public-library-_f9cP4_unmg-unsplash.jpg"
import img2 from "../public/images/europeana-5TK1F5VfdIk-unsplash.jpg"
import img3 from "../public/images/andres-herrera-iOYbUXPNTCI-unsplash.jpg"
import img4 from "../public/images/tamara-menzi-n-vnWQmmVoY-unsplash.jpg"
import img5 from "../public/images/wilhelm-gunkel-ZIQb1OkI7Ss-unsplash.jpg"
import img6 from "../public/images/miti-7O_x-zaM_ug-unsplash.jpg"
import img7 from "../public/images/birmingham-museums-trust-e0wBK0xJXYQ-unsplash.jpg"
import img8 from "../public/images/geordanna-cordero-2Qg4y32pdCc-unsplash.jpg"


const paintings = [
  {
    id: 1,
    image: img1,
    desc: "This delightful painting captures the joy and freedom of nature, with a group of brightly colored birds perched on a tree branch. The birds are a riot of color, with feathers of blue, green, yellow, and red. They are depicted in mid-flight, as if frozen in time, with their wings outstretched in a moment of pure freedom. The tree branch is intricately detailed, with gnarled wood and delicate leaves adding texture to the painting. The overall effect is one of whimsy and happiness, capturing the spirit of nature in all its glory.", 
    dimensions: "100cm x 70cm"
  },
  {
    id: 2,
    image: img2,
    desc: "In this mesmerizing painting, a gorgeous bouquet of vibrant flowers is on display against a serene background. The colors of the flowers burst forth from the canvas, with shades of pink, yellow, orange, and red creating a beautiful tapestry of petals. The flowers are arranged in a way that draws the eye towards the center of the painting, where a particularly striking bloom takes center stage. The background is a tranquil sea of blue, with just a hint of greenery peeking through the corners. The overall effect is one of peacefulness and natural beauty.",
    dimensions: "120cm X 80cm",
  },
  // {
  //   id: 3,
  //   image: img3,
  //   desc: "In this mesmerizing painting, a gorgeous bouquet of vibrant flowers is on display against a serene background. The colors of the flowers burst forth from the canvas, with shades of pink, yellow, orange, and red creating a beautiful tapestry of petals. The flowers are arranged in a way that draws the eye towards the center of the painting, where a particularly striking bloom takes center stage. The background is a tranquil sea of blue, with just a hint of greenery peeking through the corners. The overall effect is one of peacefulness and natural beauty.",
  //   dimensions: "120cm X 80cm",
  // },
  {
    id: 3,
    image: img4,
    desc: "This brooding painting depicts a stormy sky, with dark clouds gathering ominously overhead. The sky is a swirling mass of greys and blacks, with flashes of lightning illuminating the darkness. The horizon is barely visible, shrouded in a misty haze that adds to the sense of foreboding. The painting is moody and atmospheric, capturing the raw power of nature and the fleeting beauty of a passing storm.",
    dimensions: "120cm X 80cm",
  },
  // {
  //   id: 5,
  //   image: img5,
  //   desc: "This brooding painting depicts a stormy sky, with dark clouds gathering ominously overhead. The sky is a swirling mass of greys and blacks, with flashes of lightning illuminating the darkness. The horizon is barely visible, shrouded in a misty haze that adds to the sense of foreboding. The painting is moody and atmospheric, capturing the raw power of nature and the fleeting beauty of a passing storm.",
  //   dimensions: "120cm X 80cm",
  // },
  // {
  //   id: 6,
  //   image: img6,
  //   desc: "This brooding painting depicts a stormy sky, with dark clouds gathering ominously overhead. The sky is a swirling mass of greys and blacks, with flashes of lightning illuminating the darkness. The horizon is barely visible, shrouded in a misty haze that adds to the sense of foreboding. The painting is moody and atmospheric, capturing the raw power of nature and the fleeting beauty of a passing storm.",
  //   dimensions: "120cm X 80cm",
  // },
  {
    id: 4,
    image: img7,
    desc: "This brooding painting depicts a stormy sky, with dark clouds gathering ominously overhead. The sky is a swirling mass of greys and blacks, with flashes of lightning illuminating the darkness. The horizon is barely visible, shrouded in a misty haze that adds to the sense of foreboding. The painting is moody and atmospheric, capturing the raw power of nature and the fleeting beauty of a passing storm.",
    dimensions: "120cm X 80cm",
  },
]

export const sculptures = [
  {
    id: 5,
    image: img3,
    desc: "Winged Victory of Samothrace: This famous Hellenistic statue depicts the goddess Nike (Victory) standing atop a ship's prow with her wings spread. The sculpture is considered a masterpiece of Greek art and is one of the most popular exhibits in the Louvre. The dynamic pose and intricate details of the feathers and drapery convey a sense of motion and triumph."
  },
  {
    id: 6,
    image: img5,
    desc: "The Venus de Milo: This ancient Greek statue of the goddess Aphrodite (Venus) was discovered on the island of Milos in 1820. The sculpture is missing its arms but still exudes a sense of grace and beauty. The flowing drapery and idealized proportions of the figure have made the Venus de Milo an icon of classical art."
  },
  {
    id: 7,
    image: img6,
    desc: "The Dying Slave by Michelangelo: This sculpture is part of a series of unfinished sculptures known as the 'Prisoners' or 'Slaves' that Michelangelo created for the tomb of Pope Julius II. The figure of the Dying Slave appears to be struggling against his bonds and the weight of his own body. The unfinished state of the sculpture adds to its dramatic impact, with the rough-hewn stone seeming to reveal the struggle of the figure trapped inside."
  },
  {
    id: 8,
    image: img8,
    desc: "Psyche Revived by Cupid's Kiss: This neoclassical sculpture by Antonio Canova depicts the mythological story of Cupid and Psyche. Cupid has revived Psyche with a kiss, bringing her back to life. The sculpture is notable for its smooth, polished surfaces and graceful lines, which emphasize the beauty and sensuality of the figures. The subject matter and style of the sculpture reflect the Enlightenment-era fascination with classical mythology and idealized beauty."
  }
]

const data = { paintings, sculptures };

export default data;