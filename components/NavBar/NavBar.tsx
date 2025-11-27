import Link from "next/link"
import styles from "./NavBar.module.css"

/*
  NavBar Component

  Purpose:
  - Displays the main site navigation for the Food Bestie app.

  - Provides links to all major sections (Recipes, Calendar, Expenses, etc.).

  Behavior:
  - Uses Next.js <Link> for client-side navigation.
  - Styled using NavBar.module.css.

  

  Notes / Future Improvements:
  - Create sublists for "Notes":

      • All Notes
      • Grocery Lists
      • Ingredients

    Possibly show only in sublist "All Notes" & starred/favorite items by default.
    4-5 "starred/favorite" at most for a minimal look

  - Update to cuter design; pink, cooler buttons, custom font, logo
  
  - Add login / log out page for privacy 

  - Make this responsive (collapse into hamburger menu on mobile).

  - Highlight active route using usePathname() from next/navigation.
*/

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <Link href="/" className={styles.titleLink}>
          <h1>Food Bestie</h1>
        </Link>
      </div>

      <div className={styles.buttons}>
        <Link href="/recipes">Recipes</Link>
        <Link href="/calendar">Calendar</Link>
        <Link href="/expenses">Expenses</Link>
        <Link href="/notes">Notes</Link>
        <Link href="/grocery-lists">Grocery Lists</Link>
        <Link href="/ingredients">Ingredients</Link>
        <Link href="/explore">Explore</Link>
      </div>
    </div>
  )
}

export default NavBar
