// Напишите функцию, которая принимает два числа. 
// Каждую секунду необходимо выводить числа в интервале от первого до второго принятого числа. 
// Используйте setInterval.

// Например, пользователь ввёл числа 5 и 15. 
// Каждую секунду в консоль должно печататься число, начиная с 5 и заканчивая 15 
// (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).

const numberOne = +prompt('Введите число 1');
const numberTwo = +prompt('Введите число 2 (оно должно быть больше чем число 1)');


// Признаю, решение нагуглено, мне не совсем понятно как это получилось
function countNumbers(numberOne, numberTwo) {
	let timerCount = setInterval(function(){
		console.log(numberOne++);
		if(numberOne > numberTwo) {
			clearInterval(timerCount);
		}
	}, 1000);
}
countNumbers(numberOne, numberTwo);


// То же решение, но со стрелочной функцией
function countNumbers2(numberOne, numberTwo) {
	let timerCount = setInterval(() => {
		console.log(numberOne++);
		if(numberOne > numberTwo) {
			clearInterval(timerCount);
		}
	}, 1000)
} 
countNumbers2(numberOne, numberTwo);










