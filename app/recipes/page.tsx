import RecipeThumbnail from "../../components/RecipeThumbnail/RecipeThumbnail"
import styles from "./pages.module.css"

const exampleRecipes = [
  {
    id: 1,
    title: "Turkey Meatballs",
    imageSrc: "/Meatballs.png",
    labels: ["GF", "High Protein"],
  },
  {
    id: 2,
    title: "Bamia",
    imageSrc: "/Meatballs.png",
    labels: ["Vegan", "GF"],
  },
];

const Page = () => {
  return (
    <div className={styles.container}>

      
      <div className={styles.topText}>
        <h1>Recipes</h1>
      </div>

      <div className={styles.recipesContainer}>
      {exampleRecipes.map((recipe) => (

        <RecipeThumbnail key={recipe.id} title={recipe.title}
        imageSrc={recipe.imageSrc}
        labels={recipe.labels}/>
     
      ))}
      </div>

    </div>
  )
}

export default Page