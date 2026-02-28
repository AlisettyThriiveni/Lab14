interface User {
  readonly id: number;
  name: string;
  age?: number;
}

let user1: User = {
  id: 1,
  name: "Bhavana",
  age: 20
};

console.log("ID:", user1.id);