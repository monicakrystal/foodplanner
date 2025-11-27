# Purpose 

a cute website for me to plan my meals & save my favorite recipes


# Tech Stack 

- Next.js 15 (App Router)
- React 19
- TypeScript
- CSS Modules


# Folder Structure 

app/
  calendar/
  expenses/
  grocery-lists/
  notes/
  recipes/
  globals.css
  layout.tsx
  page.tsx

components/
  NavBar/
    NavBar.tsx
    NavBar.module.css
  RecipeThumbnail/
    RecipeThumbnail.tsx
    RecipeThumbnail.module.css

public/
  Meatballs.png


# Pages Plan 

# /recipes

- Build the main recipes page
  - Show a grid/list of recipe thumbnails
  - next page & page numbers if there is more than 20
  - 20 per page
  - Display title, tags (GF, Vegan, etc.), and maybe rating

- Add filters 
 - MUST!! 
    - be able to check box multiple per filter
    - uncheck/reset filters

  - Special diet:
    - Raw
    - Vegan
    - GF (Gluten-Free)
    - Meat
    - Dairy
    - Gluten

  - Cuisine:
    - Chinese
    - Indian
    - Mexican
    - (More later…)

  - Recipe type:
    - Breakfast
    - Lunch
    - Dinner
    - Beverage
    - Dip
    - Appetizer
    - Salad
    - Soup
    - Salad Dressing
    - Sides
    - Dessert
    - Snack
    - Holiday ?
    - Freezer Friendly
    - Instant Pot

  - Sort by:
    - Title (A–Z)
    - Newest
    - Oldest

  - Season:
    - Fall
    - Winter
    - Spring
    - Summer

  - By Time:
    - 10 ingredients or less
    - 15 mins or less
    - 30 mins or less
    - 7 ingredients or less
    - Instant Pot
    - One Bowl/Pan
    - No cook meals

  - Ratings:
    - Filter by minimum rating (0–5 stars)

- Add search
  - Search by recipe name
  - Search by ingredients
  - Add a search icon in the NavBar that also opens search (global search)



# /recipes/[slug]

- Create a recipe detail page for a single recipe
  - fetch recipe from db
  - URL pattern like `/recipes/turkey-meatballs` or `/recipes/[slug]`
  - Show:
    - JUMP TO RECIPE button
    - Title
    - Image
    - Tags (GF, Vegan, etc.)
    - Ingredients list
    - Steps / instructions
    - Time / servings
    - able to adjust servind size
    - print button
    - Ratings/stars (owner rating & other public user rating?)
    - other users can save it "add to favorites" or maybe "save this recipe"
    - can add to calendar
    - edit button for owner to edit it ( maybe user can adjust it to their liking if they save it )
    - owner can make it private or public to share with other users
    - show a lock if private or multiple people if public
    - nutriion details
    - items needed? instant pot? oven? stove? no cook (like a salad)
    - if found from a blog or tik tok add link or original creator


- User notes (private)
  - Let the user add their own notes to a recipe
  - Notes saved per recipe (e.g., “I used less salt”, “Good for meal prep”)

- (Future / public features)
  - Comments section (when/if recipes become public/shared)
  - Ratings system:
    - Users can rate 0–5 stars
    - Show average rating on the recipe page and recipe cards


# /add-recipe

  - page to add a recipe
  - needs to add photo or just title?
  - title
  - special diet
  - ingredients
  - items needed to have
  - cancel button
  - draft 
  - submit
  - notes
  - self rating
  - post to db
  

# /calendar

  - keep track of my meals for the week and month
  - cute responsive ui
  - able to search by date
  - able to add a recipe to the date
  - able to delete a recipe from the date
  - able to drag recipe from one day to other
  - able to copy recipe or full day plan to another date
  - make private or public or just private?
  

# /expenses

  - keep track of grocery run total by date
  - keep track of item cost; which store, date purchased
  - able to track recipe cost?
  - any other expenses? kitchen items.
  - able to see daily costs, weekly, monthly.

# /notes

  - any personal notes (always private)

# /grocery-lists

  - keep track of grocery run lists 
  - can see which recipes are referenced in that list
  - generate list based on recipes chosen

# /ingredients
 
  - I want to keep track or ingredients I like; add notes
  - this is so I can find new recipes with ingredients I like
  - my preferences
  - ingredients to avoid for search and explore page?

# /explore

 - when more users or public this is to find new recipes 
 - like pinterest but ONLY recipes



# /profile
  (when public not now)
  - user profile
  - able to follow
  - comment? or maybe best just on recipes
