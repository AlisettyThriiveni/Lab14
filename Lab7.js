function greetUser(name, title) {
    if (title) {
        return "Hello, ".concat(title, " ").concat(name, "!");
    }
    else {
        return "Hello, ".concat(name, "!");
    }
}
console.log(greetUser("Bhavana"));
console.log(greetUser("Bhavana", "Ms."));
var addNumbers = function (a, b) {
    return a + b;
};
console.log(addNumbers(10, 20)); //30