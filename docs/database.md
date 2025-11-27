
# Users

# Recipes


CREATE TABLE recipes (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  image_url VARCHAR(255),
  labels JSON,
  created_at DATETIME DEFAULT NOW(),
  updated_at DATETIME DEFAULT NOW() ON UPDATE NOW()
);

# Slug Rules

Current (single user / simple URLs):
- Route: /recipes/[slug]
- Slugs must be globally unique.
- Example: "bamia", "bamia-2", "bamia-3"

Future (if public / multi-user):
- Route: /username/recipes/[slug]
- Slugs only need to be unique per user.
- DB constraint becomes UNIQUE(user_id, slug)

Future Fields Needed

- ingredients (JSON)
- steps (JSON)
- servings (INT)
- time_minutes (INT)
- equipment (JSON)
- is_public (BOOLEAN)
- nutrition (JSON)
- original_source (VARCHAR)
- owner rating
- user rating
- made_times
- notes

# Calendar