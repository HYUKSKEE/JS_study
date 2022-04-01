//Function
//- fundamental building block in the program
//- subprogram can be used multiple times
//- performs a task or calculates a value

//1. Function declaration
//function name(param1, param2){body...return;}
//one function === one thing  하나의 함수는 한가지 일만 가능
//naming: doSomething, command, verb(동사형태)
//e.g. createCardAndPoint(X) -> createCard, createPoint  (O)
//function is object in JS

function printHello(){
    console.log('Hello');
}

printHello();

function log(message){
    console.log(message);
}
log('Hello!!');
log(1234);

//2. Parameters
//premitive parameters: passed by value
//object parameters: passed by reference
function changeName(obj){
    obj.name = 'coder';
}

const kim = {name: 'jinhyuk'};
changeName(kim);
console.log(kim);

//3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}

showMessage('hi');

//4. Rest parameters (added in ES6)
function printAll(...args){
    for(let i = 0; i < args.length; i++){        //보통이렇게 쓰지만
        console.log(args[i]);
    }
    for (const arg of args){                     //간단하게는 이렇게 쓰고
        console.log(arg);
    }
    args.forEach( (arg) => console.log(arg) );   //더 간단하게 이렇게 쓸 수 있음!
}

printAll('front', 'end', 'JinHyuk');


//5. Local scope 안에서는 밖을 볼 수 있지만, 밖에서는 안을 못봄
let globalMessage = 'global'; //global variable
function prinMessage(){
    let message = 'Hello';
    console.log(message);  //Local variable
    console.log(globalMessage);
    function printAnother(){
        console.log(message);
        let childMessage = 'Hello';
    }
    /* console.log(childMessage); */   //이렇게 쓰면 error남 Closure써서 가능하게 해야됨!
}

prinMessage();

//6. Return a value
function sum(a, b){
    return a+b;
}

const result = sum(1,2); // 3
console.log(`sum: ${sum(1, 2)}`);

//7. Early return, early exit

//bad
function upgradeUser(user){
    if(user.point > 10){
        // long upgrade logic... (if...else...if.....else)
    }
}

//good 
function upgradeUser(user){
    if(user.point <=10){
        return; //조건이 맞지 않을때는 빨리 함수 종료하고
    }
}
    // long upgrade logic.... //조건이 맞을때 필요한 로직이 굴러가도록!


//First-class function
//function are treated like any ather variable
//can be assigned as a value to variable
//can be passed as an argument to other functions.
//can be returned by anither function

//1. Function expression
//a function declaration can be called earlier than it is defined. (hoisted)
//a function expression is created when the execution reaches it.
const print = function (){
    console.log('print');
};

print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

//2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if ( answer === 'love you'){
        printYes();
    }else{
        printNo();
    }
}

// anonymous function
const printYes = function(){
    console.log('Yes');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print(){
    console.log('No');
  //print();  //이렇게 함수안에서 함수자신 스스로를 호출하는것을 recursion 이라고 함
  //피보나치수를 계산하거나 반복되는 평균값 계산할때 즉!! 꼭!!!!!! 필요시 이렇게 쓰셈!! 그냥 쓰다가는 프로그램이 죽을수도?
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

//Arrow function
//always anonymous
/* const simplePrint = function (){
    console.log('simplePrint!');
}; */
//>>>>>>>>>>>>>>>>>>>>> 간다하게

const simplePrint = () => console.log('simplePrint!');
const addCalculate = (a,b) => a + b;
simplePrint();
console.log(addCalculate(4,5));

const simpleMultiply = (a,b) => {
    // do something more
    return a*b;
};
console.log(simpleMultiply(5,6));

//IIFE : immediately Inovoked Function Expression
(function hello(){
    console.log('IIFE');
})();


//Quiz!!
//function calculate(command, a, b)
//command: add, substract, divide, multiply, remainder

let add, substract, divide, multiply, remainder
add = (a,b) => a+b;
substract = (a,b) => a-b;
divide = (a,b) =>a/b;
multiply = (a,b) =>a*b;
remainder = (a,b) =>a%b;

const add2 = (a,b) => a+b;
const substract2 = (a,b) => a-b;
const divide2 = (a,b) => a/b;
const multiply2 = (a,b) => a*b;
const remainder2 = (a,b) => a%b;


console.log(add(4,5));
console.log(substract(4,5));
console.log(divide(4,5));
console.log(multiply(4,5));
console.log(remainder(4,5));
console.log(add2(4,5));
console.log(substract2(4,5));
console.log(divide2(4,5));
console.log(multiply2(4,5));
console.log(remainder2(4,5));

//내가짠코드는 계산기를 만든게 아니라 계산 로직을 구현한것

//use switch(해답)

function calculate(command, a, b){
    switch (command){
    case 'add' :
        return a+b;
    case 'substract' : 
        return a-b;
    case 'divide' :
        return a/b;
    case 'multiply' : 
        return a*b;
    case 'remainder' :
        return a%b;
    default:    
    throw Error('unknown command!!'); //정해진 command가 아닐경우 에러를 던져줌           
    }
}

console.log(calculate('divide', 90, 5));