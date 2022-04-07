"use strict";

//Callback Hell example
//Callback to Promise

class UserStorage {
  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async loginUser(id, password) {
    await this.delay(2000);
    if (
      (id === "hyukskee" && password === "dream") ||
      (id === "coder" && password === "academy")
    ) {
      return id;
    } else {
      throw "not found";
    }
  }

  async getRoles(user) {
    await this.delay(1000);
    if (user === "hyukskee") {
      return { name: "hyukskee", role: "admin" };
    } else {
      throw "no access";
    }
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");

// 순차 실행이 필요한 데이터
async function findUserRole() {
  const user = await userStorage.loginUser(id, password);
  const userInfo = await userStorage.getRoles(user);
  return alert(`Hello ${userInfo.name}, you have a ${userInfo.role} role`);
}

findUserRole().then().catch(console.log);
/* 
  "use strict";

//Callback Hell example
//Callback to Promise

class UserStorage {
  async loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "hyukskee" && password === "dream") ||
          (id === "coder" && password === "academy")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "hyukskee") {
          resolve({ name: "hyukskee", role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then((user) => alert(`Hello ${user.name}, you have a ${user.role} role`))
  .catch(console.log); */
