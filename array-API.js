'use strict';

// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(' | '); //구분자 전달 가능
    console.log(result);
  }
  
  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(',', 2); //구분자와 Limit을 전달해서 원하는 곳까지 배열 반환가능
    console.log(result);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    console.log(array); // [5,4,3,2,1] 배열 자체가 바뀜
  }
  
  // Q4. make new array without the first two elements
  console.clear();
  {
    const array = [1, 2, 3, 4, 5];  
    const result = array.slice(2, 5);  //splice는 원래배열을 건드리기 때문에 새배열을 만들수 없음.
    console.log(result);
    console.log(array);
    
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
    find(){
        if(this.score == 90){
        console.log(`student: ${this.name}`);
        }
    }

  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  console.clear();
  // Q5. find a student with the score 90
  {//// 내가 짠거 ///
    //function findInven(student){
    //    return student.score === 90;
    //}
    //const result = students.find(findInven);
    //console.log(result);

    //해답
    const result = students.find((student) => student.score === 90);
    console.log(result);
  }
  
  // Q6. make an array of enrolled students
  {
    const result = students.filter((student) => student.enrolled === true );
    console.log(result);

    //해답
    //const result = students.filter((student) => student.enrolled);
    //console.log(result);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  console.clear();
  {
    const result = students.map( (student) => student.score); //students.map( (student) => student.score * 2); 도 가능함!! 배열안에 요소들을 우리가 원하는 함수를 이용해 다른방식의 데이터를 만들고 싶을때 유용함
    console.log(result);
  }
  
  // Q8. check if there is a student with the score lower than 50
  console.clear();
  {
   // use map() : 배열중에 어떤거 하나라도 있는지 없는지 체크할때 쓰자   
      const result = students.some( (student) => student.score < 50);
      console.log(result);
   // use every() : 배열에 모든 요소들이 조건에 만족하는지 체크할때 쓰자
   const result2 = !students.every( (student) => student.score >= 50);
   console.log(result2);   
  }
  
  // Q9. compute students' average score
  //console.clear();
  {   /// 내가 짠거 ///
      //const result = students.reduce( (prev,student) => prev + student.score, 0);//해답을 간단하게 만든 버전
      //console.log(result/students.length);

      //해답 (어렵다 한번더 복기하면서 이해하기)
      const result = students.reduce( (prev, curr) => {
          console.log('----------');
          console.log(prev);
          console.log(curr);
          return prev + curr.score;
      }, 0);
      console.log(result/students.length);
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
        const result = students.map( (student) => student.score)
        .filter((score) => score >= 50)  // filter() 묶어서 쓰면 간편하고 좋다!()
        .join();
        console.log(result);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
    //const result = students.map( (student) => student.score).sort().join();
    //console.log(result); 

    //해답
    const result = students.map( (student) => student.score)
    .sort((a, b) => a-b)  // 내림차순은 (a, b) => a-b
    .join();
    console.log(result);
    
    
  }