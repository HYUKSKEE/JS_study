"use strict";

//Array💢

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

//2. Index position
const fruits = ["🍎", "🍌"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]); // 배열의 제일 마지막 item을 찾을때

//3. Looping over an array
//print all fruits
console.clear();
// a. use for of
for (let fruit of fruits) {
  console.log(fruit);
}
// b. use old way
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// c. use forEach (ctrl누르고 문서 찾아보고 써봐라 그래야 실력는다)
fruits.forEach((fruit) => console.log(fruit));

// 4. Addition , deletion, copy
// push: add an item to the end
fruits.push("🥝", "🥭");
console.log(fruits);
// pop: remove an item from the end
fruits.pop();
console.log(fruits);
// unshift: add an item to the beginning
fruits.unshift("🍋", "🍒");
console.log(fruits);
// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);
//Note!! shift, unshift는 push,pop보다 정말 느리다! 가능하다면 pop, push를 사용!!
// splice: remove an item by index position
fruits.push("🍅", "🥑", "🍐");
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 2, "🍓", "🍑"); // (몇번째부터, 며번째까지 없애고(여기가 0이되면 값을 지우지 않고 여기부터 추가), 그자리부터 추가, 추가)
console.log(fruits);
// concat: combine two arrays
const food = ["🍎", "🍕", "🍔", "🍟"];
const cook = fruits.concat(food);
console.log(cook);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(cook);
console.log(cook.indexOf("🍔"));
console.log(cook.indexOf("🍕"));
console.log(cook.indexOf("🍎")); //가장 첫번째에 해당하는 index를 찾아줌
// includes
console.log(cook.includes("🍑"));
console.log(cook.includes("🍟"));
// LastIndexOf
//console.clear();
console.log(cook.lastIndexOf("🍎")); //가장 마지막꺼에 해당하는 index를 찾아줌

//Homework
//배열이 선언된 곳으로 가서 하나씩 읽어오기
const a = [1, 2, 3, 4];
const b = a.map();
