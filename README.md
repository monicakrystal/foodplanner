### Purpose ###

a cute website for me to plan my meals & save my favorite recipes


### Tech Stack ###

- Next.js 15 (App Router)
- React 19
- TypeScript
- CSS Modules


### Folder Structure ##

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


### Plan ###

# /recipes

- Build the main recipes page
  - Show a grid/list of recipe thumbnails
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



## /recipes/[slug]

- Create a recipe detail page for a single recipe
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
    - RATINGS stars owner rating & other public user rating?
    - other users can save it "add to favorites" or maybe "save this recipe"
    - can add to calendar
    - if from somewhere save original link
    - edit button for owner to edit it ( maybe user can edit it if they save it
    - owner can make it private or public to share with other users
    - show a lock if private or multiple people if public
    - nutriion details

  

- User notes (private)
  - Let the user add their own notes to a recipe
  - Notes saved per recipe (e.g., “I used less salt”, “Good for meal prep”)

- (Future / public features)
  - Comments section (when/if recipes become public/shared)
  - Ratings system:
    - Users can rate 1–5 stars
    - Show average rating on the recipe page and recipe cards
