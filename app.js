const age = parseInt(prompt("Please enter your age"));

//console.log(isNaN(age) ? "Enter a number" : "your age is " + age);
if (isNaN(age)) {
  console.log("Enter a number");
} else {
  console.log("your age is " + age);
}
