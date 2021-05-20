class Human{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}
export class Student extends Human{
    constructor(name,age,studyCourse){
        super(name,age);
        this.studyCourse=studyCourse;
    }
}