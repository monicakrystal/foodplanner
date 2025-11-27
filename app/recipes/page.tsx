import RecipeThumbnail from "../../components/RecipeThumbnail/RecipeThumbnail"
import styles from "./pages.module.css"



const Page = () => {
  return (
    <div className={styles.container}>
      <RecipeThumbnail/>
    </div>
  )
}

export default Page