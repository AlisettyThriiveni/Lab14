class Student {
  readonly id: number;
  name: string;
  private rollNo: number;

  constructor(id: number, name: string, rollNo: number) {
    this.id = id;
    this.name = name;
    this.rollNo = rollNo;
  }

  showRollNo(): void {
    console.log(this.rollNo);
  }
}

const s1 = new Student(1, "Alice", 101);
console.log(s1.id);
console.log(s1.name);
s1.showRollNo();

class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  makeSound(): void {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  breed: string;
  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }
  makeSound(): void {
    console.log("Woof!");
  }
}

const dog = new Dog("Buddy", "Golden Retriever");
dog.makeSound();
console.log(dog.name);
console.log(dog.breed);