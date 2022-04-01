//1. string concatenation

console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 

''''''

1 + 2 = ${1 + 2}`);

console.log('hyuk\'s book');
console.log('hyuk\'s \n\t book');

//2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiplt
console.log(5 % 2); // remainder
console.log(2 ** 3); //exponentiation

//3. Increment and decrement operators
let couter = 2;
const preIncrement = ++couter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${couter}`);
const postIncrement = couter++;
//postIncrement = counter;
//counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${couter}`);
const preDecrement = --couter;
console.log(`preDecrement: ${preDecrement}, counter: ${couter}`);
const postDecrement = couter--;
console.log(`postDecrement: ${postDecrement}, counter: ${couter}`);

//4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

//5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less then or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

//6. Logical operators : || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;
// || (or), finds the first truthy value : 처음으로 트루가 나오면 멈춤
console.log(`or: ${value1 || value2 || check()}`);
// && (and)
console.log(`or: ${value1 && value2 && check()}`);
//often used compress long if-statement
//nullableObject && nullableObject.something
/* if (nullableObject != null) {
    nullableObject.something;
} */
function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('😨');
    }
    return true;
}
// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;
// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);
// === strict equality, no type conversion 웬만하면 이거써서 검사하셈!
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);
// object equality by reference
const hyukskee1 = { name: 'hyukskee' };
const hyukskee2 = { name: 'hyukskee' };
const hyukskee3 = hyukskee1;
console.log(hyukskee1 == hyukskee2);
console.log(hyukskee1 === hyukskee2);
console.log(hyukskee1 === hyukskee3);
//equality - puzzler
console.log(0 == false); // 0, null, undefined 같은 empty string은 false로 간주됨
console.log(0 === false); // 0은 boolean type이 아님
console.log('' == false);
console.log('' === false);
console.log(null == undefined); // null과 undefined은 같은것으로 간주됨
console.log(null === undefined); //그러나 type이 분명하게 다름

//8. Conditional operators: if
//if, else if, else
const name = 'hyukskee';
if (name === 'hyukskee') {
    console.log('Welcome Hyukskee!');
} else if (name === 'kevin') {
    console.log('You are amazing kevin');
} else {
    console.log('unknown');
}

//9. Ternary operator: ?
//condition ? value1 : value2;
console.log(name === 'hyukskee' ? ' yes' : 'no'); // 조건 참 ? '참입니다' : '참이 아닙니다'

//10. Switch statement
//use for multiple if checks
//use for enum-like value check
//use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

//11. Loops
//while loop, while the condition is truthy,
//body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}
//do while loop, body code is executed first,
//then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);
//for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}
//nested loops(이렇게 쓰는건 되도록 피하자)
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
}

//break, continue
//Q1. iterate from 0 to 10 and print only even numbers(use continue)
/* let answer1 = ''; */

for (let i = 0; i < 11; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    /* answer1 = answer1 + i; */
    console.log(`q1. ${i}`);
}
/* console.log(answer1); */

//Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
/* let answer2 = ''; */

for (let i = 0; i < 10; i++) {
    if (i === 9) {
        break;
    }
    /* answer2 = answer2 + i; */
    console.log(`q2. ${i}`);
}
/* console,log(answer2); */

