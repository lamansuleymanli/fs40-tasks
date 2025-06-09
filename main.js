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

task 4


function numberToText(num) {
  if (num.length === 1) {
    return oneDigit(num);
  } else if (num.length === 2 && num[1] === "0") {
    return tenDigit(num[0]);
  } else if (num.length === 2 && num[1] !== "0") {
    return tenDigit(num[0]) + " " + oneDigit(num[1]);
  }
}

console.log(numberToText("88"));

function oneDigit(num) {
  switch (num) {
    case "1":
      return "Bir";
    case "2":
      return "Iki";
    case "3":
      return "Uc";
    case "4":
      return "Dord";
    case "5":
      return "Bes";
    case "6":
      return "Alti";
    case "7":
      return "Yeddi";
    case "8":
      return "Sekkiz";
    case "9":
      return "Doqquz";
  }
}

function tenDigit(num) {
  switch (num) {
    case "1":
      return "On";
    case "2":
      return "Iyirmi";
    case "3":
      return "Otuz";
    case "4":
      return "Qirq";
    case "5":
      return "Elli";
    case "6":
      return "Altmis";
    case "7":
      return "Yetmis";
    case "8":
      return "Seksan";
    case "9":
      return "Doxsan";
  }
}

function hundryDigit(num) {
  switch (num) {
    case "1":
      return "Yuz";
    case "2":
      return "Iki Yuz";
    case "3":
      return "Otuz";
    case "4":
      return "Qirq";
    case "5":
      return "Elli";
    case "6":
      return "Altmis";
    case "7":
      return "Yetmis";
    case "8":
      return "Seksan";
    case "9":
      return "Doxsan";
  }
}



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

task 7

function isLucky(num) {
  let text = String(num);
  if (+text[0] + +text[1] + +text[2] === +text[3] + +text[4] + +text[5]) {
    return true;
  }
  return false;
}
console.log(isLucky(235801));

task 8

function capitalizeWords(text) {
  let words = text.split(" ");
  let result = "";
  for (let i = 0; i < words.length; i++) {
    result += words[i][0].toUpperCase() + words[i].slice(1) + " ";
  }
  return result.trim();
}

console.log(capitalizeWords("Hello my name is Harry"));



task 9

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

task 10

let phonenumber = "+7123456789";
function isvalidnumber(phonenum) {
  if (phonenum.length == 11 && phonenum.startsWith("+7")) {
    return true;
  }
  return false;
}

console.log(isvalidnumber(phonenumber));

task 11

let txt = "1234567890-=+_)(*&^%$#@!`~{}][|\\/?><,.';:\"";
function letterCounter(text) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    if (!txt.includes(text[i])) {
      result += text[i];
    }
  }
  console.log(result.length);
}
letterCounter("Salam37 nec67de34734sen!");


task 12

function isPrime(num) {
  let i = num;
  let count = 0;
  while (i > 0) {
    if (num % i === 0) {
      count++;
    }
    i--;
  }
  if (count === 2) {
    return true;
  }
  return false;
}
console.log(isPrime(20));


task 13

function sumOfDigits(number) {
  let sum = 0;
  let digits = String(number);
  for (let i = 0; i < digits.length; i++) {
    sum += +digits[i];
  }
  return sum;
}
console.log(sumOfDigits(13764));

task 14

function isPalindrome(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(isPalindrome("hello"));


task 15

function longestWord(text) {
  let longest = "";
  for (let i of text.split(" ")) {
    if (i.length > longest.length) {
      longest = i;
    }
  }
  return longest;
}
console.log(longestWord("laman zenfira erkin"));

task 16

function daysBetweenDates(a, b) {
  const date1 = new Date(a);
  const date2 = new Date(b);
  const result = date2 - date1;
  console.log(result / (1000 * 60 * 60 * 24));
}
daysBetweenDates("2025-04-01", "2025-04-10");


task 18

function reverseArray(str) {
  let reversed = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseArray("1,2,3,4,5,6,7,8,9"));


task 19

function userInfo(ad, yash) {
  return `${ad} is ${yash} years old`;
}
console.log(userInfo("Murad", 25));




































*/
