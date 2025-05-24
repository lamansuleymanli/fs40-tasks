// task1
console.log("My name is Laman") 

// task2
const name ="Laman"; 

//task4
console.log(name)
let bookAmount = 48;
let bookPrice = 22;
let totalPrice = bookAmount * bookPrice
console.log(totalPrice)                    

//task5
let kmhSpeed = 60;
let msSpeed = kmhSpeed * 1000/3600;
console.log(msSpeed)    

//task6
let bdYear = prompt("Zehmet olmasa dogum ilinizi daxil edin!", 2005)
let age = 2025- bdYear
let days = age * 365
console.log(days)

//task7
let num = 4;
let power = Math.pow(num,5);
let remainder = num % 3;
console.log("5ci dereceden qüvvet: " + power );
console.log("3e bölünende alinan qaliq: " + remainder)

//task8
let firstName = "Laman";
let lastName = "Suleymanli";
console.log("Sizin adiniz " + firstName + " " + lastName + ". Tanişliğimiza çox şadam!");

//task9
let firstname = "Laman";
let lastname = "Suleymanli";
console.log(`Sizi bir daha görməyimizə şadiq, ${firstname} ${lastname}`);

//task10
let fullName="Laman Suleymanli"
let noSpace=fullName.replace(/ /, "")
console.log(noSpace.length);

//task11
let fullname = "Laman Süleymanli";
let splitname = fullName.split(" ");
let initials = splitname[0][0] + splitname[1][0];
console.log(initials);

//task12
let tamAd = prompt("Zehmet olmasa adinizi ve soyadinizi 'AD SOYAD' formatinda daxil edin!");
let nameparts = tamAd.split(" ");
let reversed = nameparts[1] + " " + nameparts[0];
console.log(reversed);


//task13
let ad=prompt("Zehmet olmasa adinizi daxil edin!");
console.log("Salam, " + ad + "!");

//task14
let num1 = +prompt("Birinci ədədi daxil edin:");
let num2 = +prompt("İkinci ədədi daxil edin:");
console.log("Toplama: " + (num1 + num2));
console.log("Çixma: " + (num1 - num2));
console.log("Vurma: " + (num1 * num2));
console.log("Bölmə: " + (num1 / num2));

//task15
let sayi1=12345;
let sayi2=98765;
let hasil= sayi1*sayi2; 
let string= String(hasil);
let sixthdigit= string[5];
console.log("Hasil: "+ hasil);
console.log("6ci reqem: "+ sixthdigit);


//task16

//Əməliyyatların nəticəsini müəyyənləşdirin.
/*"" + 1 + 0 = "10"
"" - 1 + 0 = ""--boş string reqeme çevrilende 0 olur. cavab: -1
"true" - false = NaN-false reqeme çevr 0 olur. cavab: NaN-0=NaN
6 / "3" = 2  reqeme çevrilir.
4 + 5 + "px" = 9+"px"= "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
NaN + "px" ="NaNpx"
7 / 0 = infinity
"-9" + 5 = 5 stringe çevrilir. cavab: "-95"
"-9" - 5 = -9 reqeme çevrilir. cavab: -9-5=-14
null + 1 = null reqeme çevrilende 0 olur. cavab: 0+1=1
undefined + 1 = undefined NaN olur. cavab: NaN+ 1= NaN */


//task17
let number= prompt("Zehmet olmasa 4 reqemli eded daxil edin:");
let sum = Number(number[0])+Number(number[1])+Number(number[2])+Number(number[3]);
console.log("reqemlerin cemi:", sum);

//task18
let soyadAd = prompt("Zəhmət olmasa, soyadinizi və adinizi daxil edin:");
console.log("Salam, " + soyadAd + "!");

//task19
let price = prompt("Qiyməti daxil edin:");
let parts = price.split(".");
let manat = parts[0];
let qepik = parts[1];
console.log(`${manat} manat ${qepik} qəpik`);

//task20
let maas = +prompt("Əmək haqqinizi daxil edin:");
let tamMaas = maas * 0.87;
console.log("Vergi çixilmadan əmək haqqi: " + tamMaas + " manat");

