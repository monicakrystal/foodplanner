import styles from "./RecipeDetails.module.css"
import Image from "next/image"
import RecipeInfo from "../RecipeInfo/RecipeInfo";

type RecipeDetailsProps = {
  recipe: {
    id: number;
    title: string;
    slug: string;
    imageSrc: string;
    labels: string[];
  };
};

const RecipeDetails = ({ recipe }: RecipeDetailsProps) => {
  return (
    <div className={styles.recipeSlugContainer}>
        <div className={styles.recipeTitle}>

            <div className={styles.titleText}>
                <h1>{recipe.title}</h1>
                <span>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</span>
                <span>{recipe.labels.join(", ")}</span>
            </div>

            <div className={styles.jump}>
                <button>SAVE</button>
                <button>FAVORITE</button>
                <button>ADD TO GROCERY LIST</button>
                <button>JUMP TO RECIPE</button>
            </div>

        </div>
        
        <div className={styles.mainImage}>
  

          <Image src={recipe.imageSrc} alt="Recipe Image" width={400} height={300} />
          
        </div>
            
        <div className={styles.recipeSummary}>
              
          <div className={styles.recipeParagraphs}>
          <p>This recipe is very good. Blah blah blah</p>
          </div>   
          
          <div className={styles.recipeInfo}>
            <RecipeInfo recipe={recipe} />
          </div>

        </div>
 
    </div>
  )
}

export default RecipeDetails