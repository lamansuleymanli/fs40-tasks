/*//task 23
let value = 10;
console.log(value < 15);
console.log(value <= 10);
console.log(value !== 20);
console.log(value == 10);
console.log(value + 1 < 20);

//task 24
let age = prompt("Yaşinizi daxil edin:");
if (age < 18) {
  alert("Access denied");
} else {
  alert("Access granted");
}


//task 25
let nums = "45 46 47" .split(" ");
let num1 = nums[0]
let num2 = nums[1]
let num3 = nums[2]

if (num3 > num2 && num2 > num1){
    console.log(num2)
}else {
    console.log("ededler ferqli olmalidir")
}

//task 26
let year = prompt("Bir il daxil edin:");
if (year % 4 === 0) {
  console.log("İl uzun ildir");
} else {
  console.log("İl uzun il deyil");
}

//task 31
let p = 8; // 8
let q = p-- - --p + p++ + ++p; // 7-6+7+8
console.log(p, q);


/*task 27
let id = prompt("enter product id:");

switch (id) {
  case 1:
    alert("Available 10 pcs.");
    break;
  case 2:
    alert("Available 256 pcs.");
    break;
  case 3:
    alert("Available 53 pcs.");
    break;
  case 4:
    alert("There are 3 available.");
    break;
  default:
    alert("Out of stock");
}

task 28
let gender = prompt("cinsinizi daxil edin:");
gender === "M"? console.log("Male") : gender === "F"? console.log("Female") : console.log("yanlıs deyer");


task 29
let monthN = prompt("Ayın nömrəsini daxil edin:");

switch (monthN) {
  case 1:
    console.log("Yanvar");
    break;
  case 2:
    console.log("Fevral");
    break;
  case 3:
    console.log("Mart");
    break;
  case 4:
    console.log("Aprel");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("İyun");
    break;
  case 7:
    console.log("İyul");
    break;
  case 8:
    console.log("Avqust");
    break;
  case 9:
    console.log("Sentyabr");
    break;
  case 10:
    console.log("Oktyabr");
    break;
  case 11:
    console.log("Noyabr");
    break;
  case 12:
    console.log("Dekabr");
    break;
  default:
    console.log("Yanlıs deyer");
}

task 30
let date = "2009.01.11".split(".")
let year = +date[0];
let month = +date[1];
let day = +date[2];
if (month <= 12 && month >= 1 && day >= 1 && day <= 30) {
    switch (month) {
        case "01":
        case "1":
          month = "Yanvar";
          break;
        case "02":
        case "2":
          month = "Fevral";
          break;
        case "03":
        case "3":
          month = "Mart";
          break;
        case "04":
        case "4":
          month = "Aprel";
          break;
        case "05":
        case "5":
          month = "May";
          break;
        case "06":
        case "6":
          month = "Iyun";
          break;
        case "07":
        case "7":
          month = "Iyul";
          break;
        case "08":
        case "8":
          month = "Avqust";
          break;
        case "09":
        case "9":
          month = "Sentyabr";
          break;
        case "10":
          month = "Oktyabr";
          break;
        case "11":
          month = "Noyabr";
          break;
        case "03":
          month = "Dekabr";
          break
    }
    console.log(`${day} ${month} ${year}-cu il`)
 } else {
    console.log("Format Yanlishdir!");
 }

task 34

let eded = +prompt("Bir ədəd daxil edin:");
if (eded > 0) {
  console.log("Ədəd müsbətdir");
} else if (eded < 0) {
  console.log("Ədəd mənfidir");
} else {
  console.log("Ədəd sıfırdır");
}


task 35

let a = 5, b = 8, c = 3;
let max;
if (a >= b && a >= c) {
  max = a;
} else if (b >= a && b >= c) {
  max = b;
} else {
  max = c;
}
console.log(max)


task 36

let sayi = +prompt("Bir eded daxil edin:");
sayi % 2===0? console.log("eded cütdür") : console.log("eded tekdir")


task 37

let a = 5;
let sahe = a*a;
let perimetr = 4*a;
console.log(sahe,perimetr)


task 38

let qiymet = 70; 
switch (true) {
  case (qiymet >= 90 && qiymet <= 100):
    console.log("Əla");
    break;
  case (qiymet >= 75 && qiymet <= 89):
    console.log("Yaxşı");
    break;
  case (qiymet >= 60 && qiymet <= 74):
    console.log("Orta");
    break;
  case (qiymet >= 0 && qiymet <= 59):
    console.log("Zəif");
    break;
  default:
    console.log("Yanlış qiymət");
}


task 39

let random = Math.floor(Math.random() * 100);
console.log(random);
if (random >= 0 && random <= 50) {
  console.log("Ədəd 0 ilə 50 arasındadır");
} else {
  console.log("Ədəd 0 ilə 50 arasında deyil");
}

task 40

let x = 5;
let y = 3;
let operator = "*";
let result;
switch (operator) {
  case "+":
    result = x + y
    break;
  case "-":
    result = x - y
    break;
  case "*":
    result = x * y
    break;
  case "/":
    if (y !== 0) {
      result = x / y
    } else {
      result = "Infinity";
    }
    break;
  default:
    result = "Yanlış operator";
}
console.log(result);













*/
