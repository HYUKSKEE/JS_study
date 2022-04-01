//1. use strict
//added in ES 5
//use this for Vanila Javascript.
'use strict';



//2.variable, rw(read/write)
//let (added in ES6)
let globalName = 'global name';
{
    let name ='hyuk';
    console.log(name);
    name= 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

//var (dont ever use this!!)
//var hoisting (move declaration from bottom to top)
// has no block scope
{
age = 4;
var age;
}
console.log(age);

//3. Contants, r(read only)
//use const whenever possible.
//only use let if variable needs to change.

const daysInWeek = 7;
const maxNuber = 5;
//Note!
//Immutable data type: primitive types, frozen objects (i.e. object.freeze())
//Mutable data types: all objects by default are mutable in JS
//favor immutable data type always for a few reason:
// - security
// - thread safety
// - reduce human mistakes


//4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value" ${size}, type: ${typeof size}`);

//number - special numeric value: infinity, -infinity, Nan
const infinity = 1/0;
const negativeInfinity = -1/0;
const Nan = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(Nan);

//bigInt (fairly new, dont use it yet)
const bigInt = 12345678901234567890123456789012345678901234567890n; // over (-2**53 ~ 2**53) js 허용 범위 초과
console.log(`value: ${bigInt}, type: ${typeof bigInt}`)

//string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template loterals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
//not use Backtick
console.log('value: ' + helloBob + 'type: ' + typeof helloBob);

//boolean
//false: 0, null, undfined, Nan, ''
//true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`); 
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);
//undifined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 == symbol2);
const gSymbol = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol == gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);


//object, real -life object, data structure
const kevin = {name: 'kevin', age: 28 };
kevin.name = 'cavin';
kevin.age = 27;
console.log(kevin);

// 5. Dynamic typing: dynamically typed, language
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / 2;
console.log(`value: ${text}, type: ${typeof text}`);
//console.log(text.charAt(0)); //error



