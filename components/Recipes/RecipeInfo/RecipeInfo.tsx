import Image from "next/image"
import styles from "./RecipeInfo.module.css"

type RecipeInfoProps = {
  recipe: {
    imageSrc: string;
    title: string;
    description?: string;
    author?: string;
  };
};

const RecipeInfo = ({recipe} : RecipeInfoProps) => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>

            <div className={styles.title}>
                <h2>{recipe.title}</h2>
                <p>{recipe.description} </p>
                <span>Author {recipe.author}</span>
            </div>

            <div className={styles.side}>
                <div className={styles.buttons}>
                    <button>PRINT</button>
                    <button>SAVE</button>
                    <button>FAVORITES</button>
                </div>
                
                <div className={styles.miniPic}>
                    <Image src={recipe.imageSrc} alt="Recipe Image" width={150} height={150} />
                </div>
                
                <div className={styles.rating}>
                    <span>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</span>
                </div>
            </div>

        </div>

        <div className={styles.timeContainer}>

            <div className={styles.time}>
                <h4>PREP TIME</h4>
                <span>10 mins</span>
            </div>
                
            <div className={styles.time}>
                <h4>COOK TIME</h4>
                <span>15 mins</span>
            </div>

            <div className={styles.time}>        
                <h4>TOTAL TIME</h4>
                <span>25 mins</span>
            </div>


        </div>

        <div className={styles.fastText}>
        <h3>Servings</h3>
        <h3>Course</h3>
        <h3>Cuisine</h3>
        <h3>Freezer Friendly</h3>
        <h3>Storage</h3>
        </div>

        <div className={styles.ingredients}>
        <h3>Ingredients</h3>

         <ul>
            <li> 1lb of ground turkey</li>
        </ul>
        </div>

        <div className={styles.instructions}>
        <h3>Instructions</h3>
        
        <ol>
            <li>1 lb ground turkey</li>
            <li>Mix seasoning</li>
            <li>Cook for 20 minutes</li>
        </ol>
       

        </div>

        <div className={styles.video}>
        <h3>Video</h3>
        </div>

        <div className={styles.nutrition}>
        <h3>Nutrition</h3>
        </div>

        <div className={styles.notes}>
        <h3>Notes</h3>
        </div>

        
     </div>
  )
}

export default RecipeInfo