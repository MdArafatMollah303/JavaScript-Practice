//inch to feet
var inch = 156;
var feet = inch/12;
console.log(inch);
console.log(feet);

//using function
function inchToFeet(inch){
    var feet = inch/12;
    return feet;
}
var num = inchToFeet(156);
console.log(num);

//using index of an array
var inchArray = [156,180,300];
var newFeet = inchToFeet(inchArray[1]);
console.log(newFeet);

//using loop
var inchArray = [156,198,300];
for(let i=0;i<inchArray.length;i++){
    var feet = inchArray[i]/12;
    console.log(feet);
}

//let and const using
//using let and var while you reassign the value
let name = 'Arafat';
console.log(name.length);
if(name.length>4){
    name = 'Shuvo';
}
console.log(name);

//using const for constant value
const country = 'Bangladesh';
console.log(country);

const age = 49;
console.log(age);

//using const wherever possible
function inchToFeet(inch){
    const feet = inch/12;
    return feet;
}
const NewFeet = inchToFeet(300);
console.log(NewFeet);

//using index of an array
const inchArr =[156,198,300];
const newFeetArray = inchToFeet(inchArray[1]);
console.log(newFeetArray);

//check weather leap year or not
console.log(2020/4);
console.log(2030/4);

const year = 3996;
const remainder = year%4;
console.log(remainder);
console.log(remainder==0);

if(remainder==0){
    console.log('leap year');
}
else{
    console.log('not leap year');
}

//using function
function isLeapyear(year){
    const remainder = year%4;
    if(remainder==0){
        return true;
    }
    else{
        return false;
    }
}
const checkYear1 = isLeapyear(3097);
console.log(checkYear1);
const  checkYear2 = isLeapyear(2000);
console.log(checkYear2);

//factorial
let fact = 1;
for(let i=0;i<10;i++){
fact = fact + i;
console.log(fact);
}

//using function
function newFactorial(n){
    let fact = 1;
    for(let i=1;i<10;i++){
        fact = fact*i;
    }
    return fact;
}
let result = newFactorial(5);
console.log(result);

//fact using while loop
let i=1;
let factorial = 1;
while (i<=10){
    factorial=factorial*i;
    i++;
}
console.log(factorial);
