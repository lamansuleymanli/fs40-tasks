/*
task 1

const names = ["zenfira", "laman", "erkin"];
names[1] = "classified";
console.log(names);


task 2

let arr = ["New Hope", "The Empire Strikes Back", "Return of the Jdi"];
for (let i = 0; i < arr.length; i++) {
  console.log(`Episode ${i + 4}: ${arr[i]}`);
}


task 3
1ci sual

let salary = [
  [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
  [75, 75, 75, 75, 75, 75, 70, 77, 75, 75, 70, 75],
  [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 180],
  [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
  [80, 80, 80, 80, 80, 80, 80, 105, 105, 105, 105, 105],
  [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
  [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 120],
  [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
  [80, 80, 80, 80, 80, 80, 80, 90, 90, 90, 90, 90],
  [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 70, 75],
];

function getAnnualSalary() {
  let result = 0;
  for (let i = 0; i < salary.length; i++) {
    for (let j = 0; j < salary[i].length; j++) {
      result += salary[i][j];
    }
  }
  return result;
}
console.log(getAnnualSalary());

2ci sual

function getMonthlySalary(num) {
  let result = [];
  for (let i = 0; i < salary.length; i++) {
    result.push(salary[i][num - 1]);
  }
  return result
}
console.log(getMonthlySalary(6));

3cü sual

function getQuarterSalary(number) {
  let start = (number - 1) * 3;
  let end = number * 3;
  let result = 0;
  for (let i = 0; i < salary.length; i++) {
    for (let j = start; j < end; j++) {
      result += salary[i][j];
    }
  }
  return result;
}
console.log(getQuarterSalary(4));


task 4

let array = [];
for (let i = 0; i < 5; i++) {
  let input = +prompt(`Eded ${i + 1}-i daxil edin:`);
  array.push(input);
}
let min = array[0];
for (let i = 1; i < array.length; i++) {
  if (array[i] < min) {
    min = array[i];
  }
}
console.log(min);


task 5

let str = "32, 31, 34, 36, 31";
let arr = str.split(", ");
let newStr = arr.join("; ");
console.log(newStr);


task 6

let qrup = ["Laman", "Zenfira", "Erkin"];
qrup.push("Leyla");
qrup.shift();
console.log(qrup);


task 8

let numbers = [4, 75, 3, 49, 36, 55, 83, 109, 456, 12];
let max = Math.max(...numbers);
console.log(max);

task 10

let employees = [
  ["Jaylee Macy", "marketing"],
  ["John Smith", "management"],
  ["Blossom Hartley", "design"],
  ["Austin Carpenter", "marketing"],
  ["Joan Knowles", "development"],
  ["Sally Nunez", "management"],
  ["Laurel Ward", "development"],
  ["Lark Simon", "marketing"],
  ["Jane Stone", "management"],
  ["Courtney Olson", "development"],
];

let development = [];
for (let i = 0; i < employees.length; i++) {
  if (employees[i][1] === "development") {
    development.push(employees[i][0]);
  }
}
console.log(development);



task 12

function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}
let array = [1, 6, 34, 5, 1, -4, 54, 76, 23, 65, 3, 50, 45, 100, 2346, -52, 6545, 0, 45, 22];
let sortedArray = sortArray(array);
console.log(sortedArray);


task 13

let numberss = [32, -10, 43, 12, -65, -90, 29, -88];
function negativeNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      console.log(arr[i]);
    }
  }
}
negativeNumbers(numberss);























*/
