const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let result;
function Addition(callback) {
  r1.question("Enter the first number: ", (num1) => {
    r1.question("Enter the second number: ", (num2) => {
      result = parseInt(num1) + parseInt(num2);
      console.log(`Addition of ${num1} and ${num2} is: ${result}`);
      callback();
    });
  });
}
function Subtraction(callback) {
  r1.question("Enter the first number: ", (num1) => {
    r1.question("Enter the second number: ", (num2) => {
      result = parseInt(num1) - parseInt(num2);
      console.log(`Subtraction of ${num1} and ${num2} is: ${result}`);
      callback();
    });
  });
}
function Multiplication(callback) {
  r1.question("Enter the first number: ", (num1) => {
    r1.question("Enter the second number: ", (num2) => {
      result = parseInt(num1) * parseInt(num2);
      console.log(`Multiplication of ${num1} and ${num2} is: ${result}`);
      callback();
    });
  });
}
function Division(callback) {
  r1.question("Enter the first number: ", (num1) => {
    r1.question("Enter the second number: ", (num2) => {
      result = parseInt(num1) / parseInt(num2);
      console.log(`Division of ${num1} and ${num2} is: ${result}`);
      callback();
    });
  });
}

function menu() {
  console.log("1.Addition");
  console.log("2.Multiplication");
  console.log("3.Subtraction");
  console.log("4.Division");
  console.log("5.Exit");

  r1.question("Enter the choice: ", (input) => {
    const choice = parseInt(input);

    switch (choice) {
      case 1:
        Addition(menu);
        break;
      case 2:
        Multiplication(menu);
        break;
      case 3:
        Subtraction(menu);
        break;
      case 4:
        Division(menu);
        break;
      case 5:
        console.log("Exiting...");
        r1.close();
        return;
      default:
        console.log("Invalid choice");
        menu();
    }
  });
}
menu();
