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
    <div>
<div className={styles.top}>

    <div className={styles.title}>
        <h2>{recipe.title}</h2>
        <p>{recipe.description}</p>
        <span>Author: {recipe.author}</span>
    </div>

    <div className={styles.side}>
        <div className={styles.buttons}>
            <button>PRINT</button>
            <button>SAVE</button>
            <button>FAVORITES</button>
        </div>
        
        <div className={styles.miniPic}>
            <Image src={recipe.imageSrc} alt="Recipe Image" width={400} height={300} />
        </div>
        
        <div className={styles.rating}>
            <span>⭐️⭐️⭐️⭐️⭐️</span>
        </div>
    </div>

</div>

<div className={styles.timeContainer}>

    <h4>PREP TIME</h4>
    <span>10 mins</span>

    <h4>COOK TIME</h4>
    <span>15 mins</span>

    <h4>TOTAL TIME</h4>
    <span>25 mins</span>
  
</div>

<div className={styles.servings}>
  
</div>

<div className={styles.ingredients}>
  
</div>

<div className={styles.instructions}>
  
</div>

<div className={styles.video}>
  
</div>

<div className={styles.nutrition}>
  
</div>

<div className={styles.notes}>
  
</div>

        
    </div>
  )
}

export default RecipeInfo