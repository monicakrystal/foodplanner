import RecipeThumbnail from "../../components/RecipeThumbnail/RecipeThumbnail"
import styles from "./pages.module.css"
import { exampleRecipes } from "../../data/recipes"



const Page = () => {
  return (
    <div className={styles.container}>

      
      <div className={styles.topText}>
        <h1>Recipes</h1>
      </div>

      <div className={styles.recipesContainer}>
      {exampleRecipes.map((recipe) => (

        <RecipeThumbnail key={recipe.id} title={recipe.title} slug={recipe.slug}
        imageSrc={recipe.imageSrc}
        labels={recipe.labels}/>
     
      ))}
      </div>

    </div>
  )
}

export default Page