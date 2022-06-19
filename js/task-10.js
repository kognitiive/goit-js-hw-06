/* 
Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input 
і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція 
елементів очищається.

Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, 
скільки вказано в amount і додає їх у div#boxes.

1. Розміри найпершого <div> - 30px на 30px.
2. Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
3. Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію 
getRandomHexColor для отримання кольору.

Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputAmount = document.querySelector('input')
const btnCreate = document.querySelector('[data-create]')
const btnDestroy = document.querySelector('[data-destroy]')
const boxes = document.querySelector('#boxes')

btnCreate.addEventListener('click', createBoxes)
btnDestroy.addEventListener('click', destroyBoxes)

function createBoxes(amount) {
  amount = inputAmount.value
  let size = 30
  let innerBoxes = ''

  for (let i = 0; i < amount; i += 1) {
    const color = getRandomHexColor();
    innerBoxes += `<div style = "height: ${size + 10 * i}px; width:${size + 10 * i}px; background-color:${color};"></div>`
  }
  boxes.insertAdjacentHTML("afterbegin", innerBoxes)
}

function destroyBoxes() {
  boxes.innerHTML = ''
  inputAmount.value = ''
}


