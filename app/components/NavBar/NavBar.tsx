import styles from "./NavBar.module.css"

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div>

        <h1>Food Bestie</h1>
      </div>
      <div className={styles.buttons}>
<button> Recipes </button>
<button> Calendar </button> 
<button> Expenses </button>
<button> Notes </button>     
<button> Grocery Lists</button>
<button> Ingredients</button>
<button> Explore</button>
       

      </div>
    </div>
  )
}

export default NavBar