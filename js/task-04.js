/* 
Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
Оновлюй інтерфейс новим значенням змінної counterValue.
*/

const counterText = document.querySelector('#value')
const btnDecValue = document.querySelector('[data-action="decrement"]')
const btnIncValue = document.querySelector('[data-action="increment"]')
let counterNum = 0;

btnDecValue.addEventListener('click', decrementValue);
btnIncValue.addEventListener('click', incrementValue);


function decrementValue() {
    counterNum -= 1;
    counterText.textContent = counterNum;
}

function incrementValue() {
    counterNum += 1;
    counterText.textContent = counterNum;
}


