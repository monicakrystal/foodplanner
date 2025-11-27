import RecipeDetails from "../../../components/Recipes/RecipeDetails/RecipeDetails";
import { exampleRecipes } from "../../../data/recipes";
import styles from "./page.module.css"

type RecipePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

/* 
  Recipe Slug Page (/recipes/[slug])

  Purpose:
  - Receives the recipe slug from the URL (dynamic route).
  - Finds the matching recipe from exampleRecipes (temporary mock DB).
  - Passes the recipe data into the <RecipeDetails /> component.
  - Keeps all layout and UI logic inside the RecipeDetails component.

  Notes:
  - Only responsibility: read slug → find recipe → pass recipe to component.

  Future Improvements:
  - store my recipes on a ts file for now since its personal use
  - Replace exampleRecipes with real database fetch:
      const recipe = await getRecipeBySlug(slug)
  - Add loading and error states.
  - Support private/public recipes.
  - Add metadata for SEO based on recipe details.
  - Add analytics / view count 
*/

export default async function Page({ params }: RecipePageProps) {

  const { slug } = await params;

  const recipe = exampleRecipes.find((r) => r.slug === slug);

  if (!recipe) {
    return <h1>Recipe not found</h1>;
  }

  return (
    <div className={styles.recipeSlugContainer}>
        <RecipeDetails recipe={recipe} />
    </div>
  );
}
