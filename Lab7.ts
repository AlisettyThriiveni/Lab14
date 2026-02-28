// Function with optional parameter
function greetUser(name: string, title?: string): string {
  if (title) {
    return `Hello, ${title} ${name}!`;
  } else {
    return `Hello, ${name}!`;
  }
}
console.log(greetUser("Bhavana"));
console.log(greetUser("Bhavana", "Ms."));
const addNumbers = (a: number, b: number): number => {
  return a + b;
};
console.log(addNumbers(10, 20)); 