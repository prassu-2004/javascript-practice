"use strict";
console.log("hello");
console.warn("warning");
console.error("ERROR MESSAGE");
document.write("helo my name is prasanna");
//USING VAR
var myName;
var age=10;
console.log(myName);
let myname="prasanna";
console.log(myname);
var age=20;
console.log(age);
var Name=`
      my name is prasanna
                    I am studying BTech Third year`;
console.log(Name);
console.log("My name is "+myname+" and I am "+age+" yrs old");
console.log(`my name is ${myname} and I am ${age} yrs old`);
var set=true;
console.log(`Type of data is: ${typeof set}`);
console.log(`Type of data is: ${typeof Name}`);
console.log(`Type of data is: ${typeof age}`);
console.log("Type of data is: "+ typeof set);
//USING LET
let Myname;
let age1=10;
console.log(Myname);
myname="prasanna";
console.log(myname);
//let age1=20;//error we can't redeclare when using let keyword
age=20;
console.log(age1);
let Name1=`
      my name is prasanna
                    I am studying BTech Third year`;
console.log(Name1);
console.log("My name is "+Myname+" and I am "+age1+" yrs old");
console.log(`my name is ${Myname} and I am ${age1} yrs old`);
let set1=true;
console.log(`Type of data is: ${typeof set1}`);
console.log(`Type of data is: ${typeof Name1}`);
console.log(`Type of data is: ${typeof age1}`);
console.log("Type of data is: "+ typeof set1);
//CONST
const pi=3.14;
console.log(pi);
//pi=10;//error assignmrnt to constant
function func(){
      let a=10;
      console.log(a);

}
func();
//console.log(a);//error a is not defined. a is local variable

//Arthmetic operators
function Arth(a,b){
      console.log("Addition is :" + (a+b)+ " \nSubtraction is :" + (a-b )+ "\nMultiplication is :"+ (a*b) +"\nDivision is: "+ (a/b)+"\nmodular division is: "+(a%b));
}
Arth(20,9);

// comparision operators
var a=245;
var b=7378;
console.log(a==b);
console.log(a!=b);
console.log(a>b);
console.log(a>=b);
console.log(a<=b);
console.log(a<b);
console.log(a===b);

//Logical operators
 a=90;
 b=100;
 let c=60;
 console.log(a>b && a>c);
 console.log(a>b || a>c);
 console.log(!(a>b));
 console.log(!(a<=b && a>c));

 //Opearator precidence
 let now=2037;
 const agejohn=now-1998;
 const ageson=now-2006;
 let x,y;
 x=y=25-10-5;
 console.log(x,y);
 const avg=(x+y)/2;
 console.log(avg);
 let x1=x/y**2;
 let x2=x/(y*y);
 let x3=x/y*2;
 console.log(x1,x2,x3);

 //String and teplate literals
 x=109;
 y=19209;
 console.log(`value of x is: ${x} and value of y is : ${y}`);

 //DataTypes
 let data1=10,data2=10.3739,data3='hello',data4=true,data5=null;
 console.log(`${data1}  ${typeof data1}`);
 console.log(`${data2}  ${typeof data2}`);
 console.log(`${data3}  ${typeof data3}`);
 console.log(`${data4}  ${typeof data4}`);
 console.log(`${data5}  ${typeof data5}`);

 //Type conversions
let s='hello';
console.log(Number(s));
s='1992';
console.log(Number(s),s);
s=1990;
console.log(String(s),s);
console.log(Boolean(s));
s=true;
console.log(Number(s));

//Coercion
x=10;
y=20;
console.log(`${x+y} , ${x-y}`);

//Strings
var s1="hello";
var s2='welcome';
console.log(`${s1.length}`);
console.log(s1+s2);
console.log(s1.indexOf('l'));
console.log(s1.indexOf('u'));
console.log(s1.substring(0,4));
console.log(s2.substr(1,3));
console.log(s2.substr(0,122));
console.log(s2.substr(100,122));

//Decision making statements
var year=20;
if(year>=18){
      console.log(" You are eligible to vote ");
}
else{
      console.log("You are not eligible to vote");
}
//nested-if-else
a=10;
b=20;
c=30;
if(a>b && a>c) console.log(`${a} is bigger!`);
else if(b>c) console.log(`${b} is bigger!`);
else console.log(`${c} is bigger!`);
//switch case
var day='saturdsay';
switch(day){
      case 'monday':
            console.log("Monday");
            break;
      case 'tuesday':
            console.log("plan for placements");
            break;
      case 'wednesday':
            console.log("welcome to wednesday");
            break;
      case 'thursday':
            console.log("break");
            break;
      case 'friday':
            break;
      case 'saturday':
            console.log("day off");
            break;
      case 'sunday':
            console.log("Yahoooo holiday !");
            break;
      default:
            console.log("wrong entry");
                  
}

//use strict

//h1=10;//error because strict mode is activated, we have to declare before use it
let h1=10;
console.log(h1);

//Functions
function logger(){
      console.log("this is a sample function");
}
logger();

function hello(a,b){
      console.log(`value of a is ${a} and value of b is ${b}`);
}
hello(10,20);
x=299;
y=74;
hello(x,y);
hello(0,0);
hello(12);
hello();
hello(1,2,3);
//default arguments
function defaultfunc(a=10,c,b=20){
      console.log(`a is ${a} and b is ${b} and ${c}`);
}
defaultfunc();
defaultfunc(20);
defaultfunc(102.80,60);
defaultfunc(1,23,23);

//return statement
function add(a,b){
      //c=a+b;
      return a+b;
}
let ans1=add(10,20);
console.log(ans1);
console.log(add(20,30));

function chaining(a,b){
      return a+b;
}
var result=chaining(10,20);
function chaining2(a,b){
      console.log(a+b ,a*b);
}
chaining2(result,100);

