import styles from "./RecipeLabel.module.css";

type RecipeLabelProps = {
  label: string;
};

const RecipeLabel = ({ label }: RecipeLabelProps) => {
  if (label === "Vegan") {
    return <span className={styles.vegan}>Vegan</span>;
  }

  if (label === "GF") {
    return <span className={styles.gf}>GF</span>;
  }

  // Fallback – just show the text nicely
  return <span className={styles.default}>{label}</span>;
};

export default RecipeLabel;
