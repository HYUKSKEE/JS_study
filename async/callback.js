"use strict";

// JavaScript is synchronous. (정해진 순서대로 실행)
// Execute the code block by other orger hoisting
//동기적이다 란? hoisting 된 이후부터 코드가 작성된 순서대로 하나하나씩 동기적으로 실행된다.
// hoisting: var, function declaration

console.log("1");
//asynchronous 비동기
setTimeout(() => console.log("2"), 1000); // 1초 뒤에 실행해줘~!
console.log("3");
// output : 1  3  2

//Synchronous callback
function printImmediately(print) {
  print();
}

printImmediately(() => console.log("hello"));


// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000);


//Callback Hell example

class UserStorage {
    loginUser(id, password, onSuccess, onError){

    }

    getRoles(user, onSuccess, onError)
}


