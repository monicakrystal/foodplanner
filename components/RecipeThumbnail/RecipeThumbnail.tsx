import Image from "next/image"
import styles from "./RecipeThumbnail.module.css"

/*
  RecipeThumbnail Component

  Purpose:
  - Displays a static recipe card with an image, title, and dietary labels.

  Current State:
  - Now accepts props for title, image, and labels.
  - Content is no longer hard-coded.
  - fake example data for now

  Future Improvements:
  - Wrap with <Link> to navigate to /recipes/[slug].
  - Add hover styling and reusable card layout.

  Notes:
  - Uses Next.js <Image> for optimized loading.
  - Styling comes from RecipeThumbnail.module.css.
*/

type RecipeThumbnailProps = {

  title: string;
  imageSrc: string;
  labels: string[];
};

const RecipeThumbnail = ({ title, imageSrc, labels}: RecipeThumbnailProps) => {
  return (
  <div className={styles.container}>
      <Image
        src={imageSrc}
        alt="Meatballs"
        width={400}
        height={300}
      />

    <div className={styles.thumbnailDetails}>
        
    <div className={styles.title}>
      <h3>{title}</h3>
    </div>

      <div className={styles.labels}>
     {labels.map(label => <span key={label}>{label}</span>)}
      </div>
     
     </div>
    
  </div>

  )
}

export default RecipeThumbnail
