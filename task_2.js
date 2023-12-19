// Напишите функцию, которая принимает на входе любое число (но не больше 1 000), определяет, 
// является ли оно простым, и выводит, простое число или нет. Если введено больше 1 000, то выводится сообщение, 
// что данные неверны. Обратите внимание на числа 0 и 1.

let value = prompt('Введите любое число от 1 до 1000');
while(value === null || value.trim() === '') {
	alert('Это так не работает, введите хоть что-нибудь))');
	value = prompt('Введите любое число от 1 до 1000');
}
value = +value;

// Первый способ решения, без формул, зная простые числа до 1000
function getPrimeNumber1(value){
	let primeNumbers = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997];

	if (value > 1000 || value <= 0) {
		alert('1:Данные неверны');
		return false;
	}

	for(let i = 0; i < primeNumbers.length; i++) {
		if(primeNumbers[i] === value) {
			alert(`1:Число ${value} простое число`);
			return true;
		}
	}
	alert(`1:Число ${value} не является простым числом`);
	return false;
} 

getPrimeNumber1(value);

// Второй способ рещения, в цикле проверяем делится ли "подопытное" число на 2,3,4 и т.д., 
// но не более чем на целое от квадратного корня из "подопытного", сам почти запутался)))
function getPrimeNumber2(value){
  if (value > 1000 || value <= 0) {
		alert('2:Данные неверны');
    return false;
  } else {
    let a = Math.sqrt(value);
    for (let i = 2; i <= a; i++) {
      if (value % i === 0) {
				alert(`2:Число ${value} не является простым числом`);
				return true;
      }
    }
		alert(`2:Число ${value} простое число`);
		return false;
  }
}

getPrimeNumber2(value);

