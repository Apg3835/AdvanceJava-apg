class Student {
  static count = 0;
  constructor(name, age, phoneNumber, boardMarks) {
    this.name = name;
    this.age = age;
    this.phoneNumber = phoneNumber;
    this.boardMarks = boardMarks;
    Student.countStudent();
  }
  static countStudent() {
    return Student.count++;
  }
  eligibility() {
    if (this.boardMarks >= 40) {
      console.log(`${this.name} boardMarks ${this.boardMarks} is eligible`);
    } else if (this.boardMarks < 40) {
      console.log(
        `${this.name} boardMarks ${this.boardMarks} is  not eligible`
      );
    }
  }
}
const student1 = new Student("jack", 34, 98785895, 20);
const student2 = new Student("siya", 28, 9878595, 40);
const student3 = new Student("riya", 14, 9878645, 45);
const student4 = new Student("ravi", 24, 98645895, 66);
const student5 = new Student("rahul", 44, 78645895, 15);
console.log(Student.countStudent());
student1.eligibility();
student2.eligibility();
student3.eligibility();
student4.eligibility();
student5.eligibility();


class Student {
    constructor(name,age,marks){
        this.name=name;
        this.age=age;
        this.marks=marks;
    }
     setPlacementAge(minPlacementAge){
       
        return (minMarks)=>{
            if(this.marks>minMarks && this.age>minPlacementAge){
                console.log(this.name+ "is ready for placement");
            }
            else{
                console.log(this.name+"is not ready for placement");
            }
        }

     }
}

const student1=new Student('rahul',23,78);
const student2=new Student('pankaj',12,45);
student1.setPlacementAge(18)(40);