import styles from "./Calculator.module.css"
import { myRecipes } from "../../data/recipes"
const Calculator = () => {

/* 

Steps:
    - Show All recipes
    - Be able to select recipes and the totals are automatically calculated
    - check box or selected ones have hover & border color

Goal:
    - Allow the user to drag and drop recipes into a day plan.
    - Automatically calculate and display total nutrition (calories, protein, carbs, fat, fiber).

Current Scope:
    - Focus only on the calculation logic and rendering basic totals.
    - Ignore drag-and-drop and UI polish for now.

Future Improvements: 
    - Add drag-and-drop support to assign recipes to specific days/meals.
    - Improve layout and styling for usability and responsiveness.
    - Show per-meal and per-day breakdowns (e.g. breakfast, lunch, dinner).
    - Add the ability to save, edit, and reset daily plans.
*/


  return (
    <div className={styles.calculatorSection}>
        <div className={styles.recipes}>
            {myRecipes.map((recipe) => ( 

            <div key={recipe.name} className={styles.recipe}>
            {recipe.name}
            </div>
       
            ))}

            <div className={styles.checkbox}>
          
            </div>
        </div>

        <div className={styles.totals}>
        <div className={styles.className}>
        
        </div>
        </div>

    </div>
  )
}

export default Calculator