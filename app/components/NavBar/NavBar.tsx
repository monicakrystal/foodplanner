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
<button> Grocery Lists</button>
<button> Notes</button>
       

      </div>
    </div>
  )
}

export default NavBar