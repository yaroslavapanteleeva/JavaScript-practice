'use strict';


// объявление переменных
let number = 5;
const leftBorderWidth = 1;

// вывод сообщений 
//alert('Hello, World');
console.log('Привет, мир!');

number = 10;
console.log(number);

const obj = {
    a: 50
};

obj.a =10;

console.log(obj);

// устаревший вариант объявления переменных
console.log(name);
var name = 'Ivan';

{
    let result = 50;
    console.log(result);
}

console.log(BigInt(Number.MAX_SAFE_INTEGER) * 123n);


let num = 3.2;

console.log(-4/0);
console.log('str' * 9);

const persone = 'Alex is father Boba';

console.log(persone);


let und;
console.log(und);


const object = {
    name: 'Yarosava',
    age: 21,
    isMarried: false
};

console.log(object.name);

let arr = [1, 2, 3];

console.log(arr[2]);

//alert('Hello');

/* const res = confirm("Are you here?");
console.log(res); */

/* const answer = prompt("Вам есть 18?", "18");
console.log(typeof(answer)); */

const answers = [];
answers[0] = prompt("Как ваше имя ?", "");
answers[1] = prompt("Как ваша фамилия ?", "");
answers[2] = prompt("Сколько Вам лет ?", "");

console.log(typeof(answers));
console.log(typeof(null));

const category = 'toys';

console.log(`https://someurl.com/${category}/5`);

const users = 'Yaroslava';

alert(`Привет, ${users}`);

console.log(2 + +'5');

let incr = 10,
    decr = 10;

/* ++incr;
--decr; */

console.log(incr++);
console.log(--decr);

console.log(incr);

console.log(5%2);

console.log(2*4 === '8');

const isChecked = false,
    isClose = false;

console.log(isChecked || !isClose);