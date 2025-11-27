import Image from "next/image"
import styles from "./RecipeThumbnail.module.css"

const RecipeThumbnail = () => {
  return (
    <div>


      <Image
      src="/Meatballs.png"   // note the quotes!
      alt="Meatballs"
      width={400}
      height={300}
    />
          <h3>Turkey Meatballs</h3>
<div className={styles.labels}>
  <span>GF</span>
  <span>Vegan</span>
</div>
       
    </div>
  )
}

export default RecipeThumbnail