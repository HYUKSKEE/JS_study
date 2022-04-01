"use strict";

//JSON
//JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)  object를 json으로 변경
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]); // 배열처럼 보이게 출력되지만 ["apple","banana"] ''  -> " " 로 바뀌어 출력됨
console.log(json);

const rabbit = {
  name: "kitty",
  color: "pink",
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${rabbit.name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name", "size"]);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value:${value}`);
  return key === "name" ? "kevin" : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)   json을 object로 변경
//console.clear();

json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "birthDate" ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
//obj.jump();   => error남 처음에 rabbit 함수에서 데이터만 전달되어 json으로 변경됨 함수는 변경되지 않음! 때문에 jump() 메소드를 가져오지 못함

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());

// 참고 사이트
//  JSON Diff  : 서버에서 받아온 첫번째 데이터와 두번째 데이터가 다를때 어떤게 다른지 비교할 때 유용함
//  JSON Beautifier  : 가끔 서버에서 받아온 JSON을 복사해오면 포멧이 망가짐 그 포멧을 잘 정렬해줌
//  JSON Parser  :  json타입을 object 형태로 보고싶을 때 유용함
//  JSON Validator   :   json 포멧에 ( , } " ) 등등 빼먹었거나 문제가 없는지 확인 가능
// 이밖의 여러 Tool이 있음
