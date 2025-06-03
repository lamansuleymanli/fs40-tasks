/* task 1

function activeuser(username) {
  console.log(`${username} is active now`);
}
activeuser("Laman");
activeuser("Erkin");
activeuser("Zenfira"); 

task 2

function findmax(a, b, c) {
  let max;
  if (a >= b && a >= c) {
    max = a;
  } else if (b >= a && b >= c) {
    max = b;
  } else {
    max = c;
  }
  console.log(max);
}
findmax(12, 25, 78); 
findmax(90, 84, 67);     
findmax(23, 58, 2);     

task 3

function getTotalRubl(rubAmount, dollarAmount, exchangeRate = 75) {
  const total = rubAmount + (dollarAmount * exchangeRate);
  console.log(total);
}
getTotalRubl(1200, 20);           


task 5

function findMin(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

task 6

function calc(a, b, c) {
  switch (c) {
    case "+":
      return a + b;
    case "-":
        return a-b;
    case "*":
        return a*b;
    case "/":
        return a/b
    default:
        return "yanlis deyer"
  }
}
console.log(calc(10,5,"+"));
console.log(calc(10,5,"-"));
console.log(calc(10,5,"*"));
console.log(calc(10,5,"/"));


task 9

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}




































*/