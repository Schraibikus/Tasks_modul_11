// Напишите функцию, которая принимает число как аргумент и возвращает функцию, 
// которая также принимает число как аргумент и возвращает сумму этих двух чисел. 
// Выведите в консоль результат.

const numberOne = +prompt('Введите число 1');
const numberTwo = +prompt('Введите число 2');

function sumTwoNumber(numberOne) {
	return function(numberTwo) {
		return numberOne + numberTwo;
	};
}
console.log(`Сумма двух чисел = ${sumTwoNumber(numberOne)(numberTwo)}`);

alert(`Сумма двух чисел = ${sumTwoNumber(numberOne)(numberTwo)}`);