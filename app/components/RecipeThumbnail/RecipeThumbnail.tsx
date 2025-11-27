import Image from "next/image"
import styles from "./RecipeThumbnail.module.css"

/*
  RecipeThumbnail Component

  Purpose:
  - Displays a static recipe card with an image, title, and dietary labels.

  Current State:
  - Hard-coded  example content (image + labels).
  - No props yet — temporary version while building the recipes page.

  Future Improvements:
  - Accept props: { imageSrc, title, labels }.
  - Wrap with <Link> to navigate to /recipes/[slug].
  - Add hover styling and reusable card layout.

  Notes:
  - Uses Next.js <Image> for optimized loading.
  - Styling comes from RecipeThumbnail.module.css.
*/

const RecipeThumbnail = () => {
  return (
    <div>
      <Image
        src="/Meatballs.png"
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
