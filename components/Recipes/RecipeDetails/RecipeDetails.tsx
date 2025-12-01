"use client"
import styles from "./RecipeDetails.module.css"
import Image from "next/image"
import RecipeInfo from "../RecipeInfo/RecipeInfo";
import { useRef } from "react";

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

  const recipeRef = useRef<HTMLDivElement | null>(null);

  const jumpToRecipe = () => {
    recipeRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }

  return (
    <div className={styles.recipeSlugContainer}>
        <div className={styles.recipeTitle}>

            <div className={styles.titleText}>
                <h1>{recipe.title}</h1>
                 <span>{recipe.labels.join(", ")}</span>
                <span>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</span>
               
            </div>

            <div className={styles.jump}>
                <button>SAVE</button>
                <button>FAVORITE</button>
                <button>ADD TO GROCERY LIST</button>
                <button onClick={jumpToRecipe}>JUMP TO RECIPE</button>
            </div>


        </div>
        
        <div className={styles.mainImage}>
  

          <Image src={recipe.imageSrc} alt="Recipe Image" width={500} height={500} />
          
        </div>
            
        <div className={styles.recipeSummary}>
              
          <div className={styles.recipeParagraphs}>
          <p>This recipe is very good. Blah blah blah</p>
          </div>   
          
          <div className={styles.recipeInfo} ref={recipeRef}>
            <RecipeInfo recipe={recipe} />
          </div>

        </div>
 
    </div>
  )
}

export default RecipeDetails