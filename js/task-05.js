/*
Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися 
рядок "Anonymous". 
*/

const textInput = document.querySelector('#name-input')
const output = document.querySelector('#name-output')

textInput.addEventListener('input', refreshName)

function refreshName(event) {
    textInput.value === ''
        ? output.textContent = 'Anonymous'
        : output.textContent = event.currentTarget.value;
}