import RecipeThumbnail from "../../components/RecipeThumbnail/RecipeThumbnail"
import styles from "./pages.module.css"



const Page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topText}>
        <h1>Recipes</h1>
      </div>
      <div className={styles.recipesContainer}>
        
      <RecipeThumbnail/>
      </div>
    </div>
  )
}

export default Page