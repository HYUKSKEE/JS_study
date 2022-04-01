"use strict";

// Objects
// one of the Javascript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); //'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const hyukskee = { name: "kevin", age: 2 };
print(hyukskee);

//with Javascript magic(dynamically typed language)
// can add properties later
hyukskee.hasJob = true; //Runtime 프로그램이 작동중일때 사용가능
console.log(hyukskee.hasJob); //이렇게 동적으로 코딩을하면 유지보수 힘듬 생가지도 못한 에러발생 확률 높음

delete hyukskee.hasJob;
console.log(hyukskee.hasJob);

// 2. Computed properties
//key should be always string
console.log(hyukskee.name);
console.log(hyukskee["name"]); // computed properties - 언제 어떤키를 받을지 모를때, runtime에서 결정될때 씀
hyukskee["hasJob"] = true;
console.log(hyukskee.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(hyukskee, "name");
printValue(hyukskee, "age");

// 3.Property value shorthand
const person1 = { name: "kevin1", age: 2 };
const person2 = { name: "kevin2", age: 3 };
const person3 = { name: "kevin3", age: 4 };
//새로운 property를 만들때마다 동일한 key 값을 코딩해야하는 불편함이 있다.
//Constructor Function을 이용하자!

// 4.Constructor Function
const person4 = new Person("kevin4", 5);
console.log(person4);
function Person(name, age) {
  //this = {};
  this.name = name;
  this.age = age;
  //return this;
}

// 5. in operator: property existence check (key in obj)
console.log("name" in hyukskee);
console.log("age" in hyukskee);
console.log("some" in hyukskee);

// 6.for..in   VS   for..of
// for (key in obj)
console.clear();
for (let key in hyukskee) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 4];
///이렇게 써도 출력은 됨 그러나 좋진 않음///
//for(let i = 0; i < array.length; i++){//
//    console.log(array[i]);            //
//}                                     //
for (let value of array) {
  console.log(value);
}

// 7.Fun Cloning
//Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: "kim", age: "50" };
const user2 = user;

user2.name = "corder";
console.log(user);

//old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

//////use Oject.assign();//////
//const user4 = {};          //
//Object.assign(user4, user);//
const user4 = Object.assign({}, user);
console.log(user4);

//another example
const fruit1 = { color: "orange" };
const fruit2 = { color: "green", size: "large" };
const mixed = Object.assign({}, fruit1, fruit2); // 뒤에서 앞으로 값을 계속 덮어씌움 ( fruit2 ~> fruit1...)
console.log(mixed.color); //green
console.log(mixed.size); //large
