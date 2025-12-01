 import Image from "next/image"
import styles from "./RecipeThumbnail.module.css"
import RecipeLabel from "../RecipeLabel/RecipeLabel";
import Link from "next/link";

/*
  RecipeThumbnail Component

  Purpose:
  - Displays a static recipe card with an image, title, and dietary labels.

  Current State:
  - Accepts props for title, image, and labels.
  - Fake example data for now

  Future Improvements:
  - Wrap with <Link> to navigate to /recipes/[slug].
  - Add hover styling and reusable card layout.
  - update labels to custom icons/ custom images
  - when I press labels should I show other recipes of that sort?

  Notes:
  - Uses Next.js <Image> for optimized loading.
  - Styling comes from RecipeThumbnail.module.css.
*/

type RecipeThumbnailProps = {

  title: string;
  slug: string;
  imageSrc: string;
  labels: string[];
};

const RecipeThumbnail = ({ title, slug, imageSrc, labels}: RecipeThumbnailProps) => {
  return (
  <Link href={`/recipes/${slug}`}>
  <div className={styles.container}>

    <div className={styles.thumbnailImage}>
      

      <Image
        src={imageSrc}
        alt="Meatballs"
        width={400}
        height={300}
      />
          </div>

    <div className={styles.thumbnailDetails}>
        
    <div className={styles.title}>
      <h3>{title}</h3>
    </div>

     <div className={styles.labels}>
      {labels.map((label) => (
        <RecipeLabel key={label} label={label} />
      ))}
    </div>

     
     </div>
    
  </div>
  </Link>

  )
}

export default RecipeThumbnail
