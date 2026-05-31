//______Nav-Bar______
let barsIcon = document.querySelector(".bars");
let barsPhone = document.querySelector(".bars-phone");

barsIcon.addEventListener("click", function () {
  barsPhone.classList.toggle("active");
});

//______Meals______

// let ingred = document.getElementById("ingredList");
let btnTry = document.getElementById("tryAnother");
let btnIngred = document.getElementById("ingred-btn");
let btnInstr = document.getElementById("instr-btn");
let btnNutr = document.getElementById("nutr-btn");
let btnTips = document.getElementById("tips-btn");
let currMeal;
let content = document.getElementById("content");

const meals = [
  {
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
    tips: [
      "Don't press down on burgers while cooking - keeps them juicy",
      "Make indent in center to prevent burger from puffing up",
      "Let patties rest for 2-3 minutes before serving",
      "Toast buns for better texture and flavor",
    ],
  },
  {
    title: "Margherita Pizza",
    description: "Classic Italian pizza with fresh mozzarella and basil",
    image: "./Assets/Photos/photo-12.avif",
    ingredients: [
      "300g pizza dough",
      "200g crushed tomatoes",
      "250g fresh mozzarella",
      "Fresh basil leaves",
      "2 tablespoons olive oil",
      "2 cloves garlic, minced",
      "Salt and pepper to taste",
      "Parmesan cheese for topping",
    ],
    instructions: [
      "Let pizza dough come to room temperature and rest for 1 hour.",
      "Preheat oven to maximum temperature (usually 250°C/480°F).",
      "Mix crushed tomatoes with olive oil, garlic, salt, and pepper for the sauce.",
      "Roll out dough on a floured surface to desired thickness.",
      "Spread tomato sauce, add torn mozzarella pieces, and drizzle with olive oil.",
      "Bake for 10-12 minutes until crust is golden. Top with fresh basil and parmesan.",
    ],
    tips: [
      "Use a pizza stone for crispier crust",
      "Don't overload with toppings - less is more",
      "Add basil after baking to keep it fresh",
      "Let dough rest properly for best texture",
    ],
  },
  {
    title: "Teriyaki Chicken Bowl",
    description: "Sweet and savory chicken over rice with vegetables",
    image: "./Assets/Photos/photo-1.avif",
    ingredients: [
      "400g chicken thighs, sliced",
      "1/2 cup teriyaki sauce",
      "1 broccoli head, florets",
      "1 carrot, julienned",
      "Sesame seeds",
      "Green onions, sliced",
      "1 tablespoon sesame oil",
    ],
    instructions: [
      "Heat sesame oil in a pan. Cook chicken until browned on all sides.",
      "Add teriyaki sauce to chicken, simmer for 5 minutes until sauce thickens.",
      "Meanwhile, steam broccoli and carrots until tender-crisp.",
      "Divide rice between bowls.",
      "Top with teriyaki chicken and steamed vegetables.",
    ],
    tips: [
      "Use chicken thighs for juicier meat",
      "Make homemade teriyaki sauce for better flavor control",
      "Add edamame for extra protein",
      "Meal prep by cooking rice and chicken ahead",
    ],
  },
];

function showMeal() {
  let mealNum = Math.floor(Math.random() * meals.length);
  currMeal = meals[mealNum];
  mealTitle.textContent = currMeal.title;
  mealDesc.textContent = currMeal.description;
  mealImg.src = currMeal.image;
  content.innerHTML = `<ol style="list-style-type: decimal">
    ${currMeal.ingredients.map((e) => `<li>${e}</li>`).join("")}
  </ol>`;
}

btnIngred.addEventListener("click", function () {
  content.innerHTML = `<ol style="list-style-type: decimal">
    ${currMeal.ingredients.map((e) => `<li>${e}</li>`).join("")}
  </ol>`;
});

btnInstr.addEventListener("click", function () {
  content.innerHTML = `<ol style="list-style-type: decimal">
    ${currMeal.instructions.map((item) => `<li>${item}</li>`).join("")}
  </ol>`;
});

btnTips.addEventListener("click", function () {
  content.innerHTML = `<ul style="list-style-type: none">
    ${currMeal.tips.map((item) => `<li>${item}</li>`).join("")}
  </ul>`;
});

btnTry.addEventListener("click", showMeal);

showMeal();

