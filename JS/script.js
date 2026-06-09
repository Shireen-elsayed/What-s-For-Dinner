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
let theButton=null;
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