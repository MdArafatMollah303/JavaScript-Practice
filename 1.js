// declare variable
var bananaprice = 12;
console.log(bananaprice);

//variable type
var seenAfter = 21;
console.log(seenAfter);

//number
console.log(typeof seenAfter);

//string
var name = 'Arafat';
console.log(name);
console.log(typeof name);

//bolean
var isHot = true;
var isRich = false;
console.log(typeof isHot);
console.log(typeof isRich);

//var naming best practice
var myName = 'Arafat';
myName = 'Shuvo';
Myname = 'ArafatShuvo';
console.log(myName);

//string case change index
var promise = 'I promise i will become a Programmer';
console.log(promise);
console.log(promise.toLowerCase());
console.log(promise.toUpperCase());
console.log(promise.indexOf('will'));
console.log(promise.indexOf('Programmer'));
//-1 index
console.log(promise.indexOf("Arafat"));
//split
console.log(promise.split('I'));
console.log(promise.split(' '));
//integer
var number1 = 25;
var number2 = 15.5;
console.log(number1+number2);

var number1 = '25';
var number2 = 15.5;
console.log(number1+number2);

var number1 = 25;
var number2 = '15.5';
console.log(number1+number2);

//parse
number2 = parseFloat(number2);
console.log(number1+number2);

//parseint
number2 = parseInt(number2);
console.log(number1+number2);

var number3 = '25.5';
number3 = +number3;
console.log(number1+number3);

//convert 
var number4 = 12;
number4 = ''+number4;
console.log(typeof number4);

//decimal issue
var number5=0.1;
var number6=0.2;
console.log(number5+number6);

//fixed
var total = number5+number6;
total = total.toFixed(1);
console.log(total);

//mathmatical
//addition
var a = 35;
var b = 20;
var sum = a+b;
console.log(sum);

//subtraction
var sub = a-b;
console.log(sub);

//multiplication
var mul = a*b;
console.log(mul);

//division
var div = a/b;
console.log(div);

//modulus
var mod = a%b;
console.log(mod);

//increment
var m = 17;
m++;
console.log(m);

//decrement
var ar = 26;
ar--;
console.log(ar);

//string and number
var userName = 'Arafat';
var age = 20;
var total = userName + age;
console.log(total);

// number + string
var result = age + userName;
console.log(result);
var price = '35';
var age = 30;

// string + number
var result = userName + age;
console.log(result);

// number + String
var result = age + userName;
console.log(result);

// add String
var firstName = 'jack';
var lastName = 'Smith';
var fullName = firstName + ' ' + lastName;
console.log(fullName);

//add string 
var first = 'Arafat';
var last = 'Shuvo';
var FullName = first+' '+last;
console.log(FullName);

//absolute
var x = -5;
var absoluteNumber = Math.abs(x);
console.log(absoluteNumber);

//round
var y = 5.4545454554;
var roundNumber = Math.round(y);
console.log(roundNumber);

//ceilingFunction
var ceilingFunction = Math.ceil(y);
console.log(ceilingFunction);

//floor
var floorNumber = Math.floor(y);
console.log(floorNumber);

//random
var randomNumber = Math.random();
console.log(randomNumber);

var randomNumber=Math.random()*100;
var roundRandomNumber = Math.round(randomNumber);
console.log(roundRandomNumber);

//conditional Logic
//if else
//lessthan
var coffeePrice = 12;

if(coffeePrice<10){
    console.log('I will drink It');
}
else{
    console.log('I have not enough money');
}

//grater than
var coffeePrice = 15;
if(coffeePrice>10){
    console.log('I will drink it');
}
else{
    console.log('I can not drink cheap coffee')
}


//equal==,===
var coffeePrice = 20;
if(coffeePrice==15){
console.log('I will drink it')
}
else{
    console.log('This is not for me');
}

//not equal !=
var coffeePrice = 20;
if(coffeePrice != 15){
    console.log('This is for me')
}
else{
    console.log('oviously not!');
}

//multiple conition
var job = true;
var salary = 50000;

if(job == true && salary > 20000){
    console.log('Well Done!');
}
else{
    console.log('You need to work hard');
}

//any condition must be fullfill
if(job==true || salary<60000){
    console.log('well Done');
}
else{
    console.log('Is this you');
}

//else if
if(job==true && salary>2000){
    console.log('You are caompatible for new Life!!');
}
else if(job == true){
    console.log('save some moey for future');
}
else{
    console.log('You r Bachelor forever');
}

//date and time
var newDate = new Date();
console.log(newDate);
var newDate = new Date('5-5-2000');
console.log(newDate);

