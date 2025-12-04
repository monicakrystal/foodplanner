"use client"
import styles from "./Calculator.module.css"
import { myRecipes } from "../../data/recipes"
import { useState } from "react"

/* 

To do:
    - should this be in calender instead?
    - drag and drop into calendar or...sep calculations part and a add to calender button?
    - need to be able to add multiple of something
    - an arrow key to show measurements and ingredients and recipe.
    - need to calculate diversity
    

Goal:
    - Allow the user to drag and drop recipes into a day plan.
    - Automatically calculate and display total nutrition (calories, protein, carbs, fat, fiber).

Current Scope:
    - Shows All recipes
    - Able to select or deselect recipes and the totals are automatically calculated
    - Ignore drag-and-drop and UI polish for now.

Future Improvements: 
    - Add drag-and-drop support to assign recipes to specific days/meals.
    - Improve layout and styling for usability and responsiveness.
    - Show per-meal and per-day breakdowns (e.g. breakfast, lunch, dinner).
    - Add the ability to save, edit, and reset daily plans.
*/


const Calculator = () => {

    // stores selected recipes user clicked; start as empty array
    const [selectedRecipes, setSelectedRecipes] = useState<string[]>([])
    

    // this function adds or removes a recipe to the list
    const toggleRecipe = (name: string) => {
    setSelectedRecipes((prev) =>
      prev.includes(name)
        ? prev.filter((n) => n !== name) 
        : [...prev, name] 
    );
  };

  // this gets the nutrition data of the recipes in the selected list
  const chosenRecipes = myRecipes.filter((recipe) =>
    selectedRecipes.includes(recipe.name)
  );
    

  const totals = chosenRecipes.reduce(
  (acc, recipe) => {
    const n = recipe.nutrition;

    return {
      calories: acc.calories + n.calories,
      protein_g: acc.protein_g + n.protein_g,
      carbs_g: acc.carbs_g + n.carbs_g,
      fat_g: acc.fat_g + n.fat_g,
      fiber_total_g: acc.fiber_total_g + n.fiber_total_g,
      fiber_soluble_g: acc.fiber_soluble_g + n.fiber_soluble_g,
      fiber_insoluble_g: acc.fiber_insoluble_g + n.fiber_insoluble_g,
    };
  },
  // starting values
  {
    calories: 0,
    protein_g: 0,
    carbs_g: 0,
    fat_g: 0,
    fiber_total_g: 0,
    fiber_soluble_g: 0,
    fiber_insoluble_g: 0,
  }
);

 

  return (
    <div className={styles.calculatorSection}>
        <div className={styles.recipes}>
        {myRecipes.map((recipe) => {
            const isSelected = selectedRecipes.includes(recipe.name);

            return (
            <button
                key={recipe.name}
                type="button"
                className={`${styles.recipe} ${isSelected ? styles.selected : ""}`}
                onClick={() => toggleRecipe(recipe.name)}
            >
                {recipe.name}
            </button>
            );
        })}
        </div>

            <div className={styles.totalsSection}>
        

                <div className={styles.totals}>
                    <div className={styles.total}>
                    Protein:
                    </div>

                    <div className={styles.total}>
                    Calories:
                    </div>

                    <div className={styles.total}>
                    Carbs:
                    </div>

                    <div className={styles.total}>
                    Soluble Fiber:
                    </div>
                    
                    <div className={styles.total}>
                    Insoluble Fiber:
                    </div>
                </div>
                    
                
                <div className={styles.totalsCalculated}>
                  
             
                <div className={styles.calculation}>
                    {totals.protein_g.toFixed(1)} g
                </div>
                 <div className={styles.calculation}>
                    {totals.calories}
                </div>
                 <div className={styles.calculation}>
                    {totals.carbs_g.toFixed(1)} g
                </div>
                 <div className={styles.calculation}>
                    {totals.fiber_soluble_g.toFixed(1)} g
                </div>
                 <div className={styles.calculation}>
                    {totals.fiber_insoluble_g.toFixed(1)} g
                </div>
                   </div>

            </div>
    </div>
  )
}

export default Calculator