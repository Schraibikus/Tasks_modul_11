// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
// Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и знаки, например null и так далее.

// На этот раз оформите решение в виде функции: 
// постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.

const array1 = [1, 2, -10001, 4, 6, 7, null, 0, 0, 0, '10', -6, true];
const array2 = [-52, -20, 0, null, '12', false, 99];

function getEvenOddElementsFromArray(array) {
	let noNumber = 0
	let nullNumber = 0;
	let evenNumber = 0;
	let oddNumber = 0;

	for (let i = 0; i < array.length; i++) {
		if (typeof array[i] !== 'number') {
			noNumber++;
		} else if (array[i] === 0) {
			nullNumber++;
		} else if (array[i] % 2 === 0) {
			evenNumber++;
		} else if (array[i] % 2 !== 0) {
			oddNumber++;
		} else {
			console.log('Возможно я что-то упустил и это произошло))');
		}
	}
	console.log('\n');
	console.log(`Всего элементов в массиве: ${array.length}`);
	console.log(`Всего элементов не являющихся числами: ` + noNumber);
	console.log(`Всего элементов являющихся нулём: ` + nullNumber);
	console.log(`Всего чётных элементов: ` + evenNumber);
	console.log(`Всего нечётных элементов: ` + oddNumber);
}

getEvenOddElementsFromArray(array1);
console.log('\n');

getEvenOddElementsFromArray(array2);
console.log('\n');










