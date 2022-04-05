'use strict';
//Object-oriendted programming
//class: template
//object: instance of a class
//Javascript classes
// - inrtroduced in ES6
// - syntactical sugar(문법상으로 달달한) over prototype-based inheritance

//1. Class declarations
class Person{
    //constructor
    constructor(name, age){ //객체의 기본 상태를 설정 new에의해 자동으로 호출됨.
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speakHEllo(){
        console.log(`${this.name}: hello~! i\'m ${this.age} years old`);
    }
}

const hyukskee = new Person(id:'hyukskee', 20);
console.log(hyukskee.name);
console.log(hyukskee.age);
hyukskee.speakHEllo();

//2. Getter and setters
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age(){
        return this._age;
    }
    set age(value){

        //if(value < 0){
        //  throw Error('age can not be nagative');
        //}
        this._age = value < 0 ? 'age can not be nagative' : value;
    }
}

const user1 = new User('Kevin', 'Kim', 1);
console.log(user1.age);

//3.Fields (public, private)
//Too soon!
//https://developer.mozilla.org/en-US/docs/web/javascript/reference   Javascript 참고서 여기서 참고해라!
class Experiment {
    piblicField = 2;
    #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.piblicField);
console.log(experiment.privateField);

//4. Static properties and methods
// Too soon!
class Article{
    static publisher = 'FE Kevin';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }
    static printPublisher(){
        console.log(Article.publisher);
    }
}
const article1 = new Article(1);
const article2 = new Article(2);
//console.log(article1.publisher);  --> undefined
console.log(Article.publisher);
Article.printPublisher();

//5. Inheritance
//a way for one class to extend another class.
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color of`);
    }
    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape{}  // 상속받아서 재사용 가능
class Triangle extends Shape{
    draw(){
        super.draw(); //use super: 부모 메소드 호출가능
        console.log('🔺'); // 메소드 재정의도 가능
    }
    getArea(){
        return (this.width * this.height) / 2; // *** 여기서 getArea()함수 재정의 ***
    }
    toString(){
        return `Triangle: color: ${this.color}`;
    }
}

const rectangle = new Rectangle(15, 15, 'gray');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(10, 10, 'black');
triangle.draw();
//console.log(triangle.getArea());   *** error! gerArea() 재정의 필요함 *** 
console.log(triangle.getArea());  // 50

//6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object); //ctrl 누르고 Object 클릭 javascript의 모든 object는 Object를 상속한것
console.log(triangle.toString()); //Javascript Object에 정의된 toString도 호출가능하고 재정의도 가능함!