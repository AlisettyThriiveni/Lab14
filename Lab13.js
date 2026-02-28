var Student = /** @class */ (function () {
    function Student(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }
    Student.prototype.showRollNo = function () {
        console.log(this.rollNo);
    };
    return Student;
}());
var student = new Student("Bob", 101);
console.log(student.name);
student.showRollNo();