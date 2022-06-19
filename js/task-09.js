/* 
Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на 
button.change-color і виводить значення кольору в span.color.

Для генерування випадкового кольору використовуй функцію getRandomHexColor.
*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector('.change-color')
const textColor = document.querySelector('.color')
const body = document.body

btnChangeColor.addEventListener('click', changeColor)

function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
  textColor.textContent = body.style.backgroundColor;
}


