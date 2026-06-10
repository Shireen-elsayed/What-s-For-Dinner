//______Nav-Bar______
let barsIcon = document.querySelector(".bars");
let barsPhone = document.querySelector(".bars-phone");

barsIcon.addEventListener("click", function () {
  barsPhone.classList.toggle("active");
  if (barsPhone.classList.contains("active")) {
    barsIcon.innerHTML = `<i class="fa-regular fa-circle-xmark"></i>`;
  } else {
    barsIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  }
});

//______Meals______

let btnTry = null;
let btnIngred = null;
let btnInstr = null;
let btnNutr = null;
let btnTips = null;
let content = null;
let theButton = null;
let currMeal;

const meals = [
  {
    rate: 4.5,
    review: 189,
    prepTime: 10,
    cookTime: 5,
    servings: "2 people",
    difficulty: "Easy",
    country: "American",
    title: "Classic Beef Burger",
    description: "Juicy homemade burger with all the fixings",
    image: "./Assets/Photos/photo-11.avif",
    ingredients: [
      "500g ground beef (80/20)",
      "24 burger buns",
      "4 slices cheddar cheese",
      "Lettuce leaves",
      "Tomato slices",
      "Red onion, sliced",
      "Pickles",
      "Burger sauce or condiments",
    ],
    instructions: [
      "Divide ground beef into 4 equal portions. Form into patties, making a small indent in the center.",
      "Season patties generously with salt and pepper on both sides.",
      "Heat a grill or skillet over high heat. Cook patties for 4-5 minutes per side for medium.",
      "Add cheese slices in the last minute of cooking and cover to melt.",
      "Toast burger buns lightly on the grill or in a pan.",
      "Assemble burgers with lettuce, tomato, onion, pickles, and your favorite sauce.",
    ],
    nutriton: {
      cal: -"650 kcal",
      prot: "38g",
      carb: "42g",
      fat: "35g",
      fiber: "2g",
      sodium: "920mg",
    },
    tips: [
      "Don't press down on burgers while cooking - keeps them juicy",
      "Make indent in center to prevent burger from puffing up",
      "Let patties rest for 2-3 minutes before serving",
      "Toast buns for better texture and flavor",
    ],
  },
  {
    rate: 4.7,
    review: 312,
    prepTime: 15,
    cookTime: 25,
    servings: "4 people",
    difficulty: "Intermediate",
    country: "Asian",
    title: "Thai Green Curry",
    description: "Vibrant and aromatic curry with vegetables and coconut milk",
    image: "./Assets/Photos/photo-5.avif",
    ingredients: [
      "2 tablespoons green curry paste",
      "400ml coconut milk",
      "300g chicken breast, sliced",
      "1 red bell pepper, sliced",
      "100g green beans",
      "1 eggplant, cubed",
      "2 tablespoons fish sauce",
      "1 tablespoon palm sugar",
      "Fresh Thai basil leaves",
    ],
    instructions: [
      "Heat a large pot or wok over medium heat. Add curry paste and cook for 1 minute until fragrant.",
      "Add half the coconut milk and stir to combine with the curry paste.",
      "Add sliced chicken and cook until no longer pink, about 5 minutes.",
      "Add cheese slices in the last minute of cooking and cover to melt.",
      "Add remaining coconut milk, vegetables, fish sauce, and palm sugar.",
      "Simmer for 15-20 minutes until vegetables are tender and sauce has thickened.",
      "Stir in fresh Thai basil leaves. Serve hot with jasmine rice.",
    ],
    nutriton: {
      cal: "420 kcal",
      prot: "26g",
      carb: "22g",
      fat: "26g",
      fiber: "5g",
      sodium: "890mg",
    },
    tips: [
      "Adjust spice level by using more or less curry paste",
      "Add vegetables in stages based on cooking time needed",
      "Fresh Thai basil is essential for authentic flavor",
      "Use full-fat coconut milk for richest, creamiest sauce",
    ],
  },
  {
    rate: 4.7,
    review: 412,
    prepTime: 15,
    cookTime: 20,
    servings: "4 people",
    difficulty: "Easy",
    country: "American",
    title: "Beef Tacos",
    description: "Flavorful Mexican tacos with seasoned ground beef",
    image: "./Assets/Photos/photo-9.avif",
    ingredients: [
      "500g ground beef",
      "8 taco shells",
      "1 onion, diced",
      "2 tablespoons taco seasoning",
      "Shredded lettuce",
      "Diced tomatoes",
      "Shredded cheddar cheese",
      "Sour cream",
      "Salsa",
    ],
    instructions: [
      "Heat a large pot or wok over medium heat. Add curry paste and cook for 1 minute until fragrant.",
      "Add half the coconut milk and stir to combine with the curry paste.",
      "Add sliced chicken and cook until no longer pink, about 5 minutes.",
      "Add cheese slices in the last minute of cooking and cover to melt.",
      "Add remaining coconut milk, vegetables, fish sauce, and palm sugar.",
      "Simmer for 15-20 minutes until vegetables are tender and sauce has thickened.",
      "Stir in fresh Thai basil leaves. Serve hot with jasmine rice.",
    ],
    nutriton: {
      cal: "420 kcal",
      prot: "26g",
      carb: "22g",
      fat: "26g",
      fiber: "5g",
      sodium: "890mg",
    },
    tips: [
      "Adjust spice level by using more or less curry paste",
      "Add vegetables in stages based on cooking time needed",
      "Fresh Thai basil is essential for authentic flavor",
      "Use full-fat coconut milk for richest, creamiest sauce",
    ],
  },
  {
    rate: 4.8,
    review: 234,
    prepTime: 30,
    cookTime: 60,
    servings: "4 people",
    difficulty: "Intermediate",
    country: "Mediterranean",
    title: "Greek Moussaka",
    description: "Traditional layered eggplant casserole with lamb",
    image: "./Assets/Photos/photo-15.avif",
    ingredients: [
      "3 large eggplants, sliced",
      "500g ground lamb",
      "400g canned tomatoes",
      "1 onion, diced",
      "3 cloves garlic, minced",
      "500ml béchamel sauce",
      "100g parmesan cheese",
      "Cinnamon and oregano",
      "Olive oil",
    ],
    instructions: [
      "Slice eggplants, salt them, and let sit for 30 minutes. Rinse and pat dry.",
      "Brush eggplant slices with olive oil, grill or bake until softened.",
      "Cook ground lamb with onion and garlic. Add tomatoes, cinnamon, oregano. Simmer 20 minutes.",
      "Preheat oven to 180°C (350°F).",
      "Layer in baking dish: eggplant, meat sauce, eggplant, meat sauce. Top with béchamel and parmesan.",
      "Bake for 45 minutes until golden. Let rest 15 minutes before serving.",
    ],
    nutriton: {
      cal: "580 kcal",
      prot: "36g",
      carb: "32g",
      fat: "32g",
      fiber: "8g",
      sodium: "820mg",
    },
    tips: [
      "Salt eggplant to remove bitterness",
      "Don't skip the resting time - it helps set the layers",
      "Use ground beef if lamb is unavailable",
      "Make ahead and reheat for easier serving",
    ],
  },
  {
    rate: 4.8,
    review: 445,
    prepTime: 20,
    cookTime: 15,
    servings: "2 people",
    difficulty: "Intermediate",
    country: "Asian",
    title: "Pad Thai",
    description: "Popular Thai stir-fried noodles with shrimp and peanuts",
    image: "./Assets/Photos/photo-4.avif",
    ingredients: [
      "200g rice noodles",
      "200g shrimp, peeled",
      "2 eggs",
      "3 tablespoons tamarind paste",
      "2 tablespoons fish sauce",
      "1 tablespoon palm sugar",
      "Bean sprouts",
      "Crushed peanuts",
      "Lime wedges and cilantro",
    ],
    instructions: [
      "Soak rice noodles in warm water for 30 minutes. Drain and set aside.",
      "Mix tamarind paste, fish sauce, and palm sugar to make the sauce.",
      "Heat wok over high heat. Scramble eggs and set aside.",
      "Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes.",
      "Add scrambled eggs and bean sprouts. Toss everything together.",
      "Serve topped with crushed peanuts, lime wedges, and cilantro.",
    ],
    nutriton: {
      cal: "540 kcal",
      prot: "32g",
      carb: "62g",
      fat: "16g",
      fiber: "4g",
      sodium: "1120mg",
    },
    tips: [
      "Don't oversoak noodles or they'll be mushy.",
      "Cook on high heat for authentic wok flavor.",
      "Balance sweet, sour, and salty flavors.",
      "Prepare all ingredients before starting to cook.",
    ],
  },
  {
    rate: 4.7,
    review: 267,
    prepTime: 15,
    cookTime: 60,
    servings: "4 people",
    difficulty: "Intermediate",
    country: "Mediterranean",
    title: "French Onion Soup",
    description: "Rich beef broth with caramelized onions and melted cheese",
    image: "./Assets/Photos/photo-3.avif",
    ingredients: [
      "4 large onions, thinly sliced",
      "4 tablespoons butter",
      "1 liter beef broth",
      "1/2 cup white wine",
      "2 bay leaves",
      "Fresh thyme",
      "Baguette slices",
      "200g Gruyère cheese, grated",
    ],
    instructions: [
      "Melt butter in a large pot. Add onions and cook slowly for 40 minutes, stirring occasionally until caramelized.",
      "Add white wine and deglaze the pot, scraping up brown bits.",
      "Pour in beef broth, add bay leaves and thyme. Simmer for 20 minutes.",
      "Meanwhile, toast baguette slices until golden.",
      "Ladle soup into oven-safe bowls. Top with toasted bread and cheese.",
      "Broil for 3-5 minutes until cheese is melted and bubbly. Serve hot.",
    ],
    nutriton: {
      cal: "380 kcal",
      prot: "18g",
      carb: "36g",
      fat: "18g",
      fiber: "4g",
      sodium: "980mg",
    },
    tips: [
      "Patience is key - don't rush the onion caramelization.",
      "Use good quality beef broth for best flavor.",
      "Gruyère can be substituted with Swiss cheese.",
      "Watch carefully when broiling to avoid burning.",
    ],
  },
  {
    rate: 4.6,
    review: 289,
    prepTime: 20,
    cookTime: 30,
    servings: "4 people",
    difficulty: "Easy",
    country: "Asian",
    title: "Vegetable Curry",
    description: "Hearty vegetarian curry with coconut milk",
    image: "./Assets/Photos/photo-14.avif",
    ingredients: [
      "2 potatoes, cubed",
      "1 cauliflower, florets",
      "2 carrots, sliced",
      "1 can chickpeas",
      "400ml coconut milk",
      "3 tablespoons curry powder",
      "1 onion, diced",
      "3 cloves garlic, minced",
      "Fresh spinach",
    ],
    instructions: [
      "Heat oil in a large pot. Sauté onion until soft, add garlic and curry powder, cook for 1 minute.",
      "Add potatoes and carrots, cook for 5 minutes.",
      "Pour in coconut milk and 1 cup water. Bring to simmer.",
      "Add cauliflower and chickpeas. Cook for 20 minutes until vegetables are tender.",
      "Stir in fresh spinach and cook until wilted.",
      "Serve hot over basmati rice or with naan bread.",
    ],
    nutriton: {
      cal: "380 kcal",
      prot: "14g",
      carb: "48g",
      fat: "16g",
      fiber: "12g",
      sodium: "480mg",
    },
    tips: [
      "Add vegetables in order of cooking time needed.",
      "Adjust curry powder amount to taste.",
      "Use full-fat coconut milk for creamier curry.",
      "Add protein like tofu or paneer if desired.",
    ],
  },
  {
    rate: 4.8,
    review: 356,
    prepTime: 10,
    cookTime: 15,
    servings: "2 people",
    difficulty: "Easy",
    country: "Seafood",
    title: "Shrimp Scampi",
    description: "Garlicky shrimp in white wine butter sauce",
    image: "./Assets/Photos/photo-18.avif",
    ingredients: [
      "400g large shrimp, peeled",
      "300g linguine pasta",
      "6 cloves garlic, minced",
      "1/2 cup white wine",
      "4 tablespoons butter",
      "2 tablespoons olive oil",
      "Fresh parsley, chopped",
      "Lemon juice and zest",
      "Red pepper flakes",
    ],
    instructions: [
      "Cook linguine according to package directions. Reserve 1 cup pasta water.",
      "Heat olive oil and 2 tablespoons butter in a large pan. Add garlic and red pepper flakes, cook for 1 minute.",
      "Add shrimp, cook until pink on both sides, about 3-4 minutes. Remove and set aside.",
      "Add white wine to pan, simmer for 2 minutes. Add remaining butter and lemon juice.",
      "Return shrimp to pan, add cooked pasta and toss. Add pasta water if needed.",
      "Garnish with parsley, lemon zest, and serve immediately.",
    ],
    nutriton: {
      cal: "520 kcal",
      prot: "36g",
      carb: "54g",
      fat: "18g",
      fiber: "3g",
      sodium: "620mg",
    },
    tips: [
      "Don't overcook shrimp - they cook very quickly.",
      "Use good quality white wine for best flavor.",
      "Toss pasta in sauce for maximum flavor absorption.",
      "Add extra lemon for bright, fresh taste.",
    ],
  },
  {
    rate: 4.9,
    review: 187,
    prepTime: 15,
    cookTime: 20,
    servings: "7 people",
    difficulty: "Easy",
    country: "Seafood",
    title: "Honey Garlic Salmon",
    description: "Pan-seared salmon with a sweet and savory glaze",
    image: "./Assets/Photos/photo-6.avif",
    ingredients: [
      "2 salmon fillets (6oz each)",
      "3 tablespoons honey",
      "2 tablespoons soy sauce",
      "4 cloves garlic, minced",
      "1 tablespoon olive oil",
      "1 teaspoon fresh ginger, grated",
      "Sesame seeds for garnish",
      "Green onions, sliced",
    ],
    instructions: [
      "Pat salmon fillets dry with paper towels. Season with salt and pepper.",
      "In a small bowl, whisk together honey, soy sauce, minced garlic, and grated ginger.",
      "Heat olive oil in a large skillet over medium-high heat.",
      "Place salmon fillets skin-side up in the pan. Cook for 4-5 minutes until golden.",
      "Flip salmon and pour honey garlic sauce over the top. Cook for another 4-5 minutes.",
      "Garnish with sesame seeds and sliced green onions. Serve with steamed vegetables or rice.",
    ],
    nutriton: {
      cal: "380 kcal",
      prot: "35g",
      carb: "28g",
      fat: "14g",
      fiber: "0g",
      sodium: "720mg",
    },
    tips: [
      "Don't overcook salmon - it should be slightly pink in the center.",
      "Use wild-caught salmon for best flavor and nutrition.",
      "Let the sauce caramelize slightly for deeper flavor.",
      "Pair with steamed broccoli or asparagus for a complete meal.",
    ],
  },
  {
    rate: 4.5,
    review: 324,
    prepTime: 15,
    cookTime: 15,
    servings: "4 people",
    difficulty: "Easy",
    country: "Asian",
    title: "Chicken Stir-Fry",
    description: "Quick and healthy stir-fry with colorful vegetables",
    image: "./Assets/Photos/photo-16.avif",
    ingredients: [
      "Chicken breast, sliced",
      "2 tablespoons soy sauce",
      "1 tablespoon oyster sauce",
      "1 tablespoon sesame oil",
      "2 cloves garlic, minced",
      "1 teaspoon ginger, grated",
      "Bell peppers, sliced",
      "Broccoli florets",
      "Carrots, sliced",
      "1 tablespoon cornstarch",
      "Salt and pepper to taste",
      "Cooking oil",
    ],
    instructions: [
      "Cut all ingredients before starting to cook.",
      "Marinate chicken with soy sauce, salt, pepper, and cornstarch for 10 minutes.",
      "Heat oil in a wok over high heat.",
      "Cook chicken until golden and fully cooked, then remove and set aside.",
      "Stir-fry garlic and ginger for 30 seconds until fragrant.",
      "Add vegetables and cook on high heat until crisp-tender.",
      "Return chicken to the wok and add sauces. Toss everything together for 2–3 minutes.",
      "Serve hot with rice or noodles.",
    ],
    nutriton: {
      cal: "410 kcal",
      prot: "32g",
      carb: "28g",
      fat: "16g",
      fiber: "5g",
      sodium: "680mg",
    },
    tips: [
      "Cut all ingredients before starting to cook.",
      "Keep heat high for authentic stir-fry texture.",
      "Don't overcrowd the wok or vegetables will steam.",
      "Add cashews or peanuts for extra crunch.",
    ],
  },
  {
    rate: 4.7,
    review: 389,
    prepTime: 20,
    cookTime: 30,
    servings: "4 people",
    difficulty: "Intermediate",
    country: "Asian",
    title: "Chicken Tikka Masala",
    description: "Rich and creamy Indian curry with tender chicken pieces",
    image: "./Assets/Photos/photo-10.avif",
    ingredients: [
      "Chicken breast, cubed",
      "1 cup yogurt",
      "2 tablespoons tikka masala paste",
      "1 tablespoon ginger-garlic paste",
      "1 onion, finely chopped",
      "2 tablespoons tomato paste",
      "1 cup tomato puree",
      "1/2 cup coconut cream",
      "2 tablespoons butter",
      "1 teaspoon garam masala",
      "1 teaspoon turmeric",
      "1 teaspoon cumin",
      "Salt to taste",
      "Fresh coriander for garnish",
    ],
    instructions: [
      "Marinate chicken overnight with yogurt, tikka masala paste, and spices.",
      "Heat butter in a pan and sauté onions until golden.",
      "Add ginger-garlic paste and cook until fragrant.",
      "Add tomato paste and tomato puree, simmer for 10 minutes.",
      "Cook marinated chicken in a separate pan until lightly browned.",
      "Add chicken to the sauce and simmer until fully cooked.",
      "Stir in coconut cream and adjust seasoning.",
      "Garnish with fresh coriander and serve hot with naan or basmati rice.",
    ],
    nutriton: {
      cal: "520 kcal",
      prot: "38g",
      carb: "30g",
      fat: "28g",
      fiber: "4g",
      sodium: "740mg",
    },
    tips: [
      "Marinate chicken overnight for deeper flavor.",
      "Use full-fat coconut cream for richest sauce.",
      "Adjust spice level by varying the tikka paste amount.",
      "Serve with naan bread and basmati rice.",
    ],
  },
  {
    rate: 4.5,
    review: 156,
    prepTime: 20,
    cookTime: 35,
    servings: "2 people",
    difficulty: "Easy",
    country: "Mediterranean",
    title: "Mediterranean Quinoa Bowl",
    description: "Healthy bowl with quinoa, vegetables, and tahini dressing",
    image: "./Assets/Photos/photo-0.avif",
    ingredients: [
      "1 cup quinoa",
      "2 cups water or vegetable broth",
      "1 cucumber, diced",
      "1 cup cherry tomatoes, halved",
      "1/2 red onion, finely chopped",
      "1/2 cup olives, sliced",
      "100g feta cheese, crumbled",
      "2 tablespoons olive oil",
      "2 tablespoons lemon juice",
      "3 tablespoons tahini",
      "1 clove garlic, minced",
      "Salt and pepper to taste",
      "Fresh parsley for garnish",
    ],
    instructions: [
      "Rinse quinoa thoroughly under cold water.",
      "Cook quinoa in water or broth until fluffy, then let it cool.",
      "Prepare all vegetables and place them in a large bowl.",
      "Whisk together olive oil, lemon juice, tahini, garlic, salt, and pepper to make the dressing.",
      "Combine cooled quinoa with vegetables.",
      "Pour dressing over the bowl and toss well.",
      "Top with feta cheese and fresh parsley before serving.",
    ],
    nutriton: {
      cal: "420 kcal",
      prot: "14g",
      carb: "48g",
      fat: "18g",
      fiber: "8g",
      sodium: "360mg",
    },
    tips: [
      "Rinse quinoa well to remove bitter coating.",
      "Let quinoa cool before adding fresh ingredients.",
      "Make extra tahini dressing - it keeps well in the fridge.",
      "Add grilled chicken or chickpeas for extra protein.",
    ],
  },
  {
    rate: 4.4,
    review: 198,
    prepTime: 15,
    cookTime: 0,
    servings: "2 people",
    difficulty: "Easy",
    country: "Mediterranean",
    title: "Caesar Salad",
    description: "Classic salad with crispy romaine and creamy dressing",
    image: "./Assets/Photos/photo-2.avif",
    ingredients: [
      "Romaine lettuce, chopped",
      "Parmesan cheese, grated",
      "Croutons",
      "Caesar dressing",
      "2 cloves garlic, minced",
      "1 tablespoon lemon juice",
      "1 teaspoon Dijon mustard",
      "2 tablespoons olive oil",
      "Salt and pepper to taste",
      "Optional: grilled chicken",
    ],
    instructions: [
      "Wash and chop romaine lettuce and keep it chilled.",
      "Prepare or use store-bought Caesar dressing.",
      "Make croutons by toasting bread cubes until golden.",
      "In a bowl, mix lettuce with dressing just before serving.",
      "Top with Parmesan cheese and croutons.",
      "Add grilled chicken if desired and serve immediately.",
    ],
    nutriton: {
      cal: "320 kcal",
      prot: "12g",
      carb: "18g",
      fat: "24g",
      fiber: "3g",
      sodium: "540mg",
    },
    tips: [
      "Use cold, crisp lettuce for best texture.",
      "Make homemade croutons for better flavor.",
      "Add grilled chicken for a complete meal.",
      "Don't dress salad until ready to serve.",
    ],
  },
  {
    rate: 4.7,
    review: 412,
    prepTime: 15,
    cookTime: 240,
    servings: "4 people",
    difficulty: "Easy",
    country: "American",
    title: "BBQ Pulled Pork",
    description: "Slow-cooked tender pork in smoky barbecue sauce",
    image: "./Assets/Photos/photo-8.avif",
    ingredients: [
      "1.5–2 kg pork shoulder",
      "2 tablespoons olive oil",
      "1 onion, sliced",
      "4 cloves garlic, minced",
      "1 cup BBQ sauce",
      "1/2 cup apple cider vinegar",
      "1/2 cup chicken stock",
      "2 tablespoons brown sugar",
      "1 tablespoon smoked paprika",
      "1 teaspoon chili powder",
      "1 teaspoon salt",
      "1 teaspoon black pepper",
    ],
    instructions: [
      "Season pork shoulder with salt, pepper, and spices.",
      "Sear pork in a hot pan until browned on all sides.",
      "Place pork in a slow cooker or oven-safe pot.",
      "Add onions, garlic, BBQ sauce, vinegar, stock, and sugar.",
      "Cook low and slow for several hours until tender.",
      "Shred pork using two forks and mix with sauce.",
      "Simmer briefly to absorb flavors before serving.",
    ],
    nutriton: {
      cal: "610 kcal",
      prot: "42g",
      carb: "28g",
      fat: "38g",
      fiber: "2g",
      sodium: "820mg",
    },
    tips: [
      "Use pork shoulder for best results - it stays moist.",
      "Let pork rest before shredding for juicier meat.",
      "Make your own BBQ sauce for better flavor.",
      "Leftovers freeze well for up to 3 months.",
    ],
  },
  {
    rate: 4.7,
    review: 367,
    prepTime: 15,
    cookTime: 20,
    servings: "2 people",
    difficulty: "Easy",
    country: "Asian",
    title: "Teriyaki Chicken Bowl",
    description: "Sweet and savory chicken over rice with vegetables",
    image: "./Assets/Photos/photo-1.avif",
    ingredients: [
      "300g chicken thighs, sliced",
      "1 cup cooked rice",
      "2 tablespoons soy sauce",
      "2 tablespoons mirin",
      "1 tablespoon brown sugar",
      "1 teaspoon ginger, grated",
      "2 cloves garlic, minced",
      "1 tablespoon sesame oil",
      "Broccoli florets",
      "Carrots, sliced",
      "Sesame seeds for garnish",
      "Green onions, sliced",
    ],
    instructions: [
      "Cook rice according to package instructions and set aside.",
      "In a bowl, mix soy sauce, mirin, brown sugar, garlic, and ginger to make teriyaki sauce.",
      "Heat sesame oil in a pan over medium-high heat.",
      "Cook chicken thighs until browned and fully cooked.",
      "Pour teriyaki sauce into the pan and simmer until it thickens and coats the chicken.",
      "Steam or stir-fry vegetables until tender-crisp.",
      "Assemble bowl with rice, chicken, and vegetables.",
      "Garnish with sesame seeds and green onions before serving.",
    ],
    nutriton: {
      cal: "510 kcal",
      prot: "34g",
      carb: "58g",
      fat: "18g",
      fiber: "5g",
      sodium: "860mg",
    },
    tips: [
      "Use chicken thighs for juicier meat.",
      "Make homemade teriyaki sauce for better flavor control.",
      "Add edamame for extra protein.",
      "Meal prep by cooking rice and chicken ahead.",
    ],
  },
  {
    rate: 4.5,
    review: 189,
    prepTime: 10,
    cookTime: 5,
    servings: "2 people",
    difficulty: "Easy",
    country: "Italian",
    title: "Caprese Sandwich",
    description: "Fresh Italian sandwich with mozzarella, tomato, and basil",
    image: "./Assets/Photos/photo-7.avif",
    ingredients: [
      "Fresh mozzarella slices",
      "Ripe tomatoes, sliced",
      "Fresh basil leaves",
      "Ciabatta or Italian bread",
      "Extra virgin olive oil",
      "Balsamic glaze",
      "Salt to taste",
      "Black pepper to taste",
    ],
    instructions: [
      "Slice bread and lightly toast if desired.",
      "Layer fresh mozzarella on the bottom slice.",
      "Add sliced tomatoes and season with salt and pepper.",
      "Top with fresh basil leaves.",
      "Drizzle with olive oil and balsamic glaze.",
      "Close the sandwich and serve immediately.",
    ],
    nutriton: {
      cal: "380 kcal",
      prot: "16g",
      carb: "32g",
      fat: "22g",
      fiber: "3g",
      sodium: "520mg",
    },
    tips: [
      "Use fresh, high-quality mozzarella for best flavor.",
      "Choose ripe tomatoes for natural sweetness.",
      "Drizzle olive oil generously for richness.",
      "Serve immediately to keep bread from getting soggy.",
    ],
  },
  {
    rate: 4.8,
    review: 234,
    prepTime: 15,
    cookTime: 20,
    servings: "4 people",
    difficulty: "Easy",
    country: "Italian",
    title: "Creamy Spaghetti Carbonara",
    description: "A classic Italian pasta dish with eggs, cheese, and pancetta",
    image: "./Assets/Photos/photo-17.avif",
    ingredients: [
      "400g spaghetti",
      "150g pancetta or guanciale, diced",
      "4 large eggs",
      "1 cup Parmesan cheese, freshly grated",
      "2 cloves garlic, minced (optional)",
      "Salt and black pepper to taste",
      "Fresh parsley for garnish",
    ],
    instructions: [
      "Cook spaghetti in salted water until al dente. Reserve pasta water.",
      "In a pan, cook pancetta until crispy. Add garlic if using.",
      "Whisk eggs with grated Parmesan cheese and black pepper.",
      "Drain pasta and immediately add to the pan with pancetta.",
      "Remove from heat and quickly mix in egg mixture.",
      "Add reserved pasta water gradually to create a creamy sauce.",
      "Stir until sauce is smooth and coats the pasta evenly.",
      "Serve immediately with extra Parmesan and parsley.",
    ],
    nutriton: {
      cal: "580 kcal",
      prot: "28g",
      carb: "62g",
      fat: "24g",
      fiber: "3g",
      sodium: "690mg",
    },
    tips: [
      "Use room temperature eggs for a smoother sauce consistency.",
      "Work quickly when mixing eggs with hot pasta to avoid scrambling.",
      "Reserve extra pasta water - it's the secret to perfect creaminess.",
      "Freshly grated cheese makes all the difference in flavor.",
      "Never add cream - authentic carbonara is made with eggs only.",
    ],
  },
  {
    rate: 4.9,
    review: 478,
    prepTime: 30,
    cookTime: 90,
    servings: "4 people",
    difficulty: "Intermediate",
    country: "Italian",
    title: "Lasagna Bolognese",
    description: "Layered Italian pasta with rich meat sauce and béchamel",
    image: "./Assets/Photos/photo-13.avif",
    ingredients: [
      "12 lasagna pasta sheets",
      "500g ground beef",
      "1 onion, finely chopped",
      "2 carrots, finely chopped",
      "2 celery stalks, finely chopped",
      "3 cloves garlic, minced",
      "800g tomato puree",
      "2 tablespoons tomato paste",
      "1 cup milk",
      "2 tablespoons olive oil",
      "50g butter",
      "50g flour",
      "2 cups milk (for béchamel)",
      "1 cup Parmesan cheese, grated",
      "Salt and pepper to taste",
      "Nutmeg (optional)",
    ],
    instructions: [
      "Prepare the bolognese sauce by sautéing onion, carrot, celery, and garlic.",
      "Add ground beef and cook until browned.",
      "Stir in tomato paste and tomato puree, simmer for at least 1 hour.",
      "Prepare béchamel sauce by melting butter, adding flour, then whisking in milk until thick.",
      "Cook lasagna sheets if required or use fresh sheets.",
      "Layer bolognese, pasta sheets, and béchamel in a baking dish.",
      "Repeat layers and finish with béchamel and Parmesan cheese on top.",
      "Bake in a preheated oven at 180°C for 45 minutes.",
      "Let lasagna rest for at least 15 minutes before serving.",
    ],
    nutriton: {
      cal: "680 kcal",
      prot: "38g",
      carb: "58g",
      fat: "32g",
      fiber: "5g",
      sodium: "780mg",
    },
    tips: [
      "Make bolognese sauce a day ahead for better flavor.",
      "Don't skip the resting time after baking.",
      "Use fresh pasta sheets for best texture.",
      "Freeze leftovers in individual portions.",
    ],
  },
  {
    rate: 4.9,
    review: 512,
    prepTime: 90,
    cookTime: 12,
    servings: "2 people",
    difficulty: "Intermediate",
    country: "Italian",
    title: "Margherita Pizza",
    description: "Classic Italian pizza with fresh mozzarella and basil",
    image: "./Assets/Photos/photo-12.avif",
    ingredients: [
      "Pizza dough",
      "150g fresh mozzarella cheese",
      "2–3 ripe tomatoes or tomato sauce",
      "Fresh basil leaves",
      "2 tablespoons olive oil",
      "1 teaspoon salt",
      "1 teaspoon sugar (optional for sauce balance)",
      "Flour for dusting",
    ],
    instructions: [
      "Prepare pizza dough and let it rest until doubled in size.",
      "Preheat oven with pizza stone to high temperature.",
      "Roll out dough on a floured surface.",
      "Spread tomato sauce evenly over the base.",
      "Add slices of fresh mozzarella.",
      "Bake pizza for 10–12 minutes until crust is golden.",
      "Remove from oven and immediately add fresh basil leaves.",
      "Drizzle with olive oil before serving.",
    ],
    nutriton: {
      cal: "620 kcal",
      prot: "26g",
      carb: "78g",
      fat: "24g",
      fiber: "4g",
      sodium: "740mg",
    },
    tips: [
      "Use a pizza stone for crispier crust.",
      "Don't overload with toppings - less is more.",
      "Add basil after baking to keep it fresh.",
      "Let dough rest properly for best texture.",
    ],
  },
];

function showMeal() {
  const mealNum = Math.floor(Math.random() * meals.length);
  currMeal = meals[mealNum];

  const mealContainer = document.querySelector(".meals");
  mealContainer.innerHTML = `
  <div class="meal rounded container">
  <div class="img-meal position-relative">
  <img src="${currMeal.image}" alt="The Photo of Meal." id="mealImg">
  <div class="position-absolute rate">
  <p style="font-weight: bold;">${currMeal.rate} <span style="font-weight: normal;">(${currMeal.review} reviews)</span></p>
  </div>
  <div class="fast-details d-flex justify-around align-center rounded position-absolute">
  <div class="d-flex flex-column justify-center align-center gap-5">
  <i class="fa-solid fa-clock" style="color: #FF6900;"></i>
  <p>Prep Time</p>
  <span>${currMeal.prepTime} min</span>
  </div>
  <div class="d-flex flex-column justify-center align-center gap-5">
  <i class="fa-solid fa-fire-burner" style="color: #FB2C36;"></i>
  <p>Cook Time</p>
  <span>${currMeal.cookTime} min</span>
  </div>
  <div class="d-flex flex-column justify-center align-center gap-5">
  <i class="fa-solid fa-users" style="color:#2B7FFF;"></i>
  <p>Servings</p>
  <span>${currMeal.servings}</span>
  </div>
  </div>
  </div>
  <div class="description container">
  <div class="origin">
  <span class="difficulty">${currMeal.difficulty}</span>
  <span class="country">${currMeal.country}</span>
  </div>
  <div class="d-flex justify-between flex-wrap align-center">
  <div class="meal-details">
  <h1 id="mealTitle">${currMeal.title}</h1>
  <p id="mealDesc" class="meal-desc" style="margin-bottom: 10px;">${currMeal.description}
  </p>
  </div>
  <div class="meal-icon d-flex align-center justify-center">
  <i class="fa-solid fa-bookmark save"></i>
  <i class="fa-solid fa-share-nodes share"></i>
  </div>
  </div>
  <div class="warning rounded d-flex align-center justify-start">
  <div>
  <i class="fa-solid fa-triangle-exclamation"></i>
  </div>
  <div>
  Extended Preparation Time
  <p>This recipe requires more than 45 minutes to prepare. Plan accordingly!</p>
  </div>
  </div>
  <div id="details" class="details d-flex flex-column align-start justify-center">
                <button id="ingred-btn" class="ingred-btn btn selected">
                    <span><i class="fa-solid fa-list-check"></i></span>
                    <span>Ingredients</span>
                    <span class="underLine"></span>
                    </button>
                    <button id="instr-btn" class="btn">
                    <span><i class="fa-solid fa-book-open"></i></span>
                    <span>Instructions</span>
                    <span class="underLine"></span>
                    </button>
                    <button id="nutr-btn" class="btn">
                    <span><i class="fa-solid fa-chart-pie"></i></span>
                    <span>Nutrition</span>
                    <span class="underLine"></span>
                    </button>
                    <button id="tips-btn" class="btn">
                    <span><i class="fa-solid fa-lightbulb"></i></span>
                    <span>Chef's Tips</span>
                    <span class="underLine"></span>
                    </button>
                    </div>
                    <div class="gray-line"></div>
                    <div id="content">
                    <ul class="ingredients rounded dynamic-counter" id="ingred-list">
  ${currMeal.ingredients.map((i) => `<li>${i}</li>`).join("")}
  </ul>
  </div>
  <div class="gray-line"></div>
  <button id="try-another" class="rounded">Try Another Recipe</button>
  </div>
  </div>
  `;

  btnTry = document.getElementById("try-another");
  btnIngred = document.getElementById("ingred-btn");
  btnInstr = document.getElementById("instr-btn");
  btnNutr = document.getElementById("nutr-btn");
  btnTips = document.getElementById("tips-btn");
  content = document.getElementById("content");
  warning = document.querySelector(".warning");
  const btns = [btnIngred, btnInstr, btnNutr, btnTips];
  theButton = document.querySelector(".btn");

  if (currMeal.prepTime + currMeal.cookTime > 45) {
    warning.style.display = "flex";
  }

  btnIngred.addEventListener("click", function () {
    content.innerHTML = `<ul class="ingredients rounded dynamic-counter" id="ingred-list">
    ${currMeal.ingredients.map((i) => `<li>${i}</li>`).join("")}
    </ul>`;
    activeBtn(btnIngred);
  });

  btnInstr.addEventListener("click", function () {
    content.innerHTML = `<ul class="instructions dynamic-counter">
    ${currMeal.instructions.map((i) => `<li>${i}</li>`).join("")}
    </ul>`;
    activeBtn(btnInstr);
  });

  btnNutr.addEventListener("click", function () {
    content.innerHTML = `
    <div class="nutrition d-grid">
                            <div class="d-flex align-center justify-between">
                                <span class="calories icon">Calories</span>
                                <span class="calories-val val">${currMeal.nutriton.cal}</span>
                            </div>
                            <div class="d-flex align-center justify-between">
                                <span class="protien icon">Protein</span>
                                <span class="portien-val val">${currMeal.nutriton.prot}</span>
                            </div>
                            <div class="d-flex align-center justify-between">
                                <span class="carb icon">Carbohydrates</span>
                                <span class="carb-val val">${currMeal.nutriton.carb}</span>
                            </div>
                            <div class="d-flex align-center justify-between">
                                <span class="fat icon">Fat</span>
                                <span class="fat-val val">${currMeal.nutriton.fat}</span>
                            </div>
                            <div class="d-flex align-center justify-between">
                                <span class="fiber icon">Fiber</span>
                                <span class="fiber-val val">${currMeal.nutriton.fiber}</span>
                            </div>
                            <div class="d-flex align-center justify-between">
                                <span class="sodium icon">Sodium</span>
                                <span class="sodium-val val">${currMeal.nutriton.sodium}</span>
                            </div>
                        </div>
    `;
    activeBtn(btnNutr);
  });

  function activeBtn(btn) {
    btns.forEach(function (button) {
      button.classList.remove("selected");
    });
    btn.classList.add("selected");
  }

  btnTips.addEventListener("click", function () {
    content.innerHTML = `
    <ul class="chef-tips">
    ${currMeal.tips.map((i) => `<li>${i}</li>`).join("")}
    </ul>
    `;
    activeBtn(btnTips);
  });

  btnTry.addEventListener("click", showMeal);
}

showMeal();
