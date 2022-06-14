/*Напиши скрипт, який для кожного елемента масиву ingredients:

Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
Додасть назву інгредієнта як його текстовий вміст.
Додасть елементу клас item.
Після чого, вставить усі <li> за одну операцію у список ul.ingredients.*/

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.querySelector('#ingredients')

const arr = []

for (let i = 0; i < ingredients.length; i += 1) {
  let item = document.createElement('li');
  item.textContent = ingredients[i];
  item.classList.add('item');
  arr.push(item);
}

listRef.append(...arr)
console.log(listRef)
