var obj={num:2};
var addTOThis=function(a,b,c){
return this.num +a+b+c;
}
var arr=[1,2,3];
console.log(addTOThis.apply(obj,arr));



var obj = { num: 2 };
var addToThis = function (a, b, c) {
  return this.num + a + b + c;
};
console.log( addToThis.call(obj, 1, 2, 3));



var obj = { num: 2 };
var addToThis = function (a, b, c) {
  return this.num + a + b + c;
};
var bound=addToThis.bind(obj);
console.log(bound(1,2,3));



let student={
    name:"shubham",
}
let printTheAge = function (age){
    console.log(this.name +" " +"age is" +" " +age);
}
let ageOfStudent=printTheAge.bind(student,20);
ageOfStudent();


let multiply= function (x,y){
    console.log(x*y);
}
let multiplyByTwo=multiply.bind(this,2);
multiplyByTwo(3); 