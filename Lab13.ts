class Student {
  public name: string;
  private rollNo: number;

  constructor(name: string, rollNo: number) {
    this.name = name;
    this.rollNo = rollNo;
  }

  showRollNo(): void {
    console.log(this.rollNo);
  }
}

const student = new Student("Bob", 101);
console.log(student.name);
student.showRollNo();