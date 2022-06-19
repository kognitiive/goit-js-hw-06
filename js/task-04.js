/* 
Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
Оновлюй інтерфейс новим значенням змінної counterValue.
*/

const counterValue = document.querySelector('#value')
const btnDecValue = document.querySelector('[data-action="decrement"]')
const btnIncValue = document.querySelector('[data-action="increment"]')

btnDecValue.addEventListener('click', decrementValue);
btnIncValue.addEventListener('click', incrementValue);


function decrementValue() {
    counterValue.textContent -= 1;
}

function incrementValue() {
    counterValue.textContent = parseInt(counterValue.textContent) + 1;
}


