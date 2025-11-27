import Image from "next/image";
import { exampleRecipes } from "../../../data/recipes";
import styles from "./page.module.css"

type RecipePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page({ params }: RecipePageProps) {

  const { slug } = await params;

  const recipe = exampleRecipes.find((r) => r.slug === slug);

  if (!recipe) {
    return <h1>Recipe not found</h1>;
  }

  return (
    <div className={styles.recipeSlugContainer}>
        <div className={styles.recipeTitle}>
            <h1>{recipe.title}</h1>
            <span>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</span>
            <span>{recipe.labels.join(", ")}</span>
        </div>

      <Image src={recipe.imageSrc} alt="Recipe Image"
        width={400}
        height={300} />

      
 
    </div>
  );
}
