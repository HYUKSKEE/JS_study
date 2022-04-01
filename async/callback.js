// JavaScript is synchronous. (정해진 순서대로 실행)
// Execute the code block by other orger hoisting
//동기적이다 란? hoisting 된 이후부터 코드가 작성된 순서대로 하나하나씩 동기적으로 실행된다.
// hoisting: var, function declaration

console.log("1");
//asynchronous 비동기
//setTimeout(() => console.log("2"), 1000); // 1초 뒤에 실행해줘~!
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
//printWithDelay(() => console.log("async callback"), 2000);

//Callback Hell example

class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      //setTimeout() 을 쓰는이유는 실제 백엔드에서 통신하는 것처럼 delay를 주기위해!
      if (
        (id === "hyukskee" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "hyukskee") {
        onSuccess({ name: "hyukskee", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

// q1. 사용자에게 id, pw 를 입력받아옴
// q2. login 해보자
// 성공적으로 login이 되면 사용자의 id를 받아옴.
// 받아온 id를 이용해서 roles(역할)을 다시 요청(getRoles)해서 받아온다
console.clear();
const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
// 이것은 callback 지옥이다 (콜백안에서 콜백하고 콜백에서 또 콜백...콜백체인이 쓰레기임)
// 가독성이 너무 떨어짐 직관성이 떨어짐 그냥 덜떨어진 코드임.
// 디버깅이 힘듬

// 좀더 좋은 코드
