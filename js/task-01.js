//Напиши скрипт, який:

//Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
//Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

const listCountRef = document.querySelector('#categories');
console.log(`Number of categories: ${listCountRef.children.length}`);

const titlesRef = listCountRef.querySelectorAll('h2')
const titlesRefText = ([...titlesRef].map(h2 => h2.firstChild.textContent))

const itemsRef = listCountRef.querySelectorAll('li.item')
const innerItemsText = ([...itemsRef].map(li => li.querySelectorAll('li').length))

for (let i = 0; i < titlesRefText.length; i += 1) {
    console.log(`Category: ${titlesRefText[i]}\nElements: ${innerItemsText[i]}`)
}
