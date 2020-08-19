//declare an array , index start at 0
var friendsAge = [21, 22, 24, 25];
console .log(friendsAge); 

//index
console.log(friendsAge[0]); 

//store data
var arafatAge = friendsAge[2];
console.log(arafatAge);

//change array
friendsAge[1]=27;
console.log(friendsAge);

//find element
var position = friendsAge.indexOf(27);
console.log(position);

//-1 if not found any data on that position
var position=friendsAge.indexOf(143);
console.log(position);

//push  pop length
friendsAge.push(143);
friendsAge.push(14210);
console.log(friendsAge);

console.log(friendsAge.length);
console.log(friendsAge['length']);

friendsAge.pop();
friendsAge.pop();
console.log(friendsAge);

//add at beginning and slice
var teaLine = ['Arafat','Shuvo','Jack'];
console.log(teaLine);

teaLine.push('Pet');
console.log(teaLine);

teaLine.pop();
console.log(teaLine);

//shift for remove first element
teaLine.shift();
console.log(teaLine);

//unshift for add an element o first
teaLine.unshift('Arafat');
console.log(teaLine);

//using slice
var name = ['Virat', 'Messi', 'Dhoni','Rohit', 'RDJ','Chris'];
var part = name.slice(2);
console.log(part); 

var part1 = name.slice(2,4);
console.log(part1);

var part2 = name.slice(2,5);
console.log(part2);

var months = ['jan','mar','apr','jun'];
months.splice(1,2);
console.log(months);

months.splice(1);
console.log(months);

//add on 1
var months = ['jan','mar','apr','jun'];
months.splice(1,0,'feb');
console.log(months);

//insert on 4
//var months = ['jan','mar','apr','jun'];
months.splice(4,0,'may');
console.log(months);

//replace
var months = ['jan','mar','apr','may','jun'];
months.splice(4,1,'may');
console.log(months);

//while loop
var num1 = 0;
while (num1<=15){
    console.log(num1);
    num1++;
}

//for loop
for(var i=0;i<15;i++){
    console.log(i);
}

//less
for(var i=10;i>0;i--){
    console.log(i);
}

//array loop
var n=[10, 20, 30, 50, 17, 26];
for(var i=0;i<n.length;i++){
    var m = n[i];
    console.log(m);
}

//switch case
var num=5;
switch(num){
    case 1000:
    console.log("I am 1000");
    break;
    case 100:
        console.log("i am 100");
        break;
        case 50:
            console.log("Ypu are 50/50");
            break;
            default:
                console.log("I don;t even know who you are");
}

//function call function
function add(n1,n2){
var sum = n1+n2;
console.log(sum);
}
add(10,7);

function doubleIt(n){
    var mul = n*2;
    return mul;
}
var first=doubleIt(10);
var second=doubleIt(20);
console.log(first,second);

//this is single line comment
/*This is
multiple line comment*/


//object property
var student1 = {id:121,phone:357,Name:'Arafat'};
var student2 = {id:63278,phone:238793,Name:'Shuvo'};
console.log(student1);
console.log(student2);

//access property
var phn1=student1.phone;
console.log(phn1);

var phn2=student1['phone'];
console.log(phn2);

var phn3='phone';
var phn = student1[phn3];
console.log(phn);

//change phone number
student2.phone=2783981038;
student2['phone']=485934702;
student2[phn3]=7049828;
console.log(student2);

//add new property
student2.cinema='Avengers';
student2['cinema']='lal shingh chaddha';
console.log(student2);