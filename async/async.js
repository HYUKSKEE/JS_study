"use strict";

// async & await
// clear style of using promise :>

// 1. async  promise()를 간편하게 쓸 수 있는 synthetic sugar
async function fetchUser() {
  // promise()를 자동으로 호출
  return "hyukskee";
}

const user = fetchUser();
user.then(console.log);

// 2. await

function delay(ms) {
  return new Promise((resolve, reject) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000); //await delay(ms) === delay가 끝날때까지 기다려
  return "🍎";
}

async function getBanana() {
  await delay(1000);
  return "🍌";
}

// promise 지옥!!!!!!!
/* function pickFruits() {
  return getApple().then((apple) => {
    return getBanana().then((banana) => `${apple} + ${banana}`);
  });
}
pickFruits().then(console.log); */

///🔽🔽🔽🔽 hell promise chain to async await🔽🔽🔽🔽///

// use async!!
async function pickFruits() {
  const applePromise = getApple(); //await 병렬처리해서 delay 중복 없애기
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}
pickFruits().then(console.log);

//⬆⬆⬆⬆⬆⬆⬆ 코드가 너무 더럽다 깔끔하게 바꿔보자 ⬆⬆⬆⬆⬆⬆⬆⬆

// 3. useful Promise APIs 'all' : Promise()에서 제공하는 all API를 써보자!

function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}
pickAllFruits().then(console.log);

// 'race' : 배열에 전달된 Promise 중에서 가장 먼저 값을 return하는 요소만 전달됨
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log); // : 🍌
