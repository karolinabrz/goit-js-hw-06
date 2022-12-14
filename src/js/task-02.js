const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const $ul = document.querySelector("ul");
const fragment = document.createDocumentFragment();

ingredients.forEach((ing) => {
  const newItem = document.createElement("li");
  newItem.textContent = ing;
  newItem.classList = "item";
  fragment.append(newItem);
});

$ul.append(fragment);


