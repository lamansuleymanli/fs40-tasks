/* task 1

let num = +prompt("Zehmet olmasa ikireqemli bir eded daxil edin:");
while (num < 100) {
  num += 7;
}
console.log(num);

task 2

let N = +prompt("Zehmet olmasa bir eded daxil edin:");
let i = 0;
while (i < N) {
  console.log("I know how to use cycles");
  i++;
}

task 3

let number = 100;
while (number <= 990) {
  console.log(number);
  number += 10;
}

task 4

let numm = 11;
let sum = 0;
while (numm <= 99) {
  sum += eded;
  numm += 2;
}
console.log(sum);


task 5

let numberr = +prompt("Bir eded daxil et:");
let currentNum = 100;
let cem = 0;
while (currentNum <= 999) {
  if (currentNum % numberr === 0) {
    cem += currentNum;
  }
   currentNum++;
}
console.log(cem);



task 6

let n = +prompt("Zehmet olmasa bir eded daxil et:");
while ( n > 1){
    let sade = true;
    let bolen = 2;
    while( bolen < n){
        if(n % bolen === 0){
            sade = false;
            break;
        }
        bolen++;
    }
    if( sade && n !== 1){
        console.log(n);
    }
    n--;
}

task 7

let hasil = 1;
for (let i = 2; i <= 9; i++) {
  hasil *= i;
}
console.log(hasil);

task 8

let metn = prompt("Zehmet olmasa bir metn daxil edin:");
let reversedmetn = "";
for (let i = metn.length - 1; i >= 0; i--) {
  reversedmetn += metn[i];
}
console.log(reversedmetn);


task 9

let text = prompt("Bir mətn daxil edin:");
let dot = -1;
for (let i = 0; i < text.length; i++) {
  if (text[i] === ".") {
    dot = i;
    break;
  }
}
if (dot !== -1) {
  console.log(`Nöqteye ilk defe ${dot}ci indeksde rast gelindi`);
} else {
  console.log(`Metnde nöqteye rast gelinmedi`);
}



task 10

let txt = prompt("Bir mətn daxil edin:");
let digit = false;
for (let i = 0; i < txt.length; i++) {
  if (!isNaN(txt[i]) && txt[i] !== " ") {
    digit = true;
    break;
  }
}
if (digit) {
  console.log("Reqem var");
} else {
  console.log("Reqem yoxdur");
}
  
















*/