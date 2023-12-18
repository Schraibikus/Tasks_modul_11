// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
// Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и знаки, например null и так далее.

// На этот раз оформите решение в виде функции: 
// постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.

console.log('Задача 1');
const array1 = [1, 2, -10001, 4, 6, 7, null, 0, 0, 0, '10', -6, true];
console.log(array1);

function getEvenOddElementsFromArray() {
	let noNumber = 0
	let nullNumber = 0;
	let evenNumber = 0;
	let oddNumber = 0;

	for (let i = 0; i < array1.length; i++) {
		if (typeof array1[i] !== 'number') {
			noNumber++;
			console.log(`элемент ${array1[i]}, под индексом ${i} не является числом`);
		} else if (array1[i] === 0) {
			nullNumber++;
			console.log(`элемент ${array1[i]}, под индексом ${i} является нулём`);
		} else if (array1[i] % 2 === 0) {
			evenNumber++;
			console.log(`элемент ${array1[i]}, под индексом ${i} чётное число`);
		} else if (array1[i] % 2 !== 0) {
			oddNumber++;
			console.log(`элемент ${array1[i]}, под индексом ${i} нечётное число`);
		} else {
			console.log('Ну тогда я не знаю как решать, опыта маловато');
		}
	}
	console.log('\n');
	console.log(`Всего элементов в массиве: ${array1.length}`);
	console.log(`Всего элементов не являющихся числами: ` + noNumber);
	console.log(`Всего элементов являющихся нулём: ` + nullNumber);
	console.log(`Всего чётных элементов: ` + evenNumber);
	console.log(`Всего нечётных элементов: ` + oddNumber);
}

getEvenOddElementsFromArray();
console.log('\n');









