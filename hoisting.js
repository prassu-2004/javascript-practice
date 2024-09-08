//////local and global variable

var a=10;  ///global variable
{
    let b=100; ////local variable
    console.log(a);
    console.log(b);

}
console.log(a);
//console.log(b); ///can't access -error


//////hoisting

console.log(me);
var me;
////  console.log(job);  ///error when declare using let
let job;

////hoisting by calling before it declaring

if(!n){
    deleteshop();
}
var n=10;
function deleteshop(){
    console.log('deleted');
}

/////this

console.log(this);

//// this keyword in regular functions

function regular(){
    console.log(this);
}
regular();

//// this keyword in arraow function

arrow=()=>
{
    console.log(this);
}
arrow();

///// this keyword in objects

const obj={
    name:'hello',
    age:19,
    add:console.log(this),
    fun:function(){
        console.log(this);
    }
}

obj.fun();

////// this keyword in regular and arrow function

const object={
    name:'prasanna',
    frnd:'ram',
    year:2024-2004,

    display1:function(){
        console.log('regular function:' ,this);
    },
      
    display:()=>{

        console.log('arrow function:', this);
    }

}
object.display1();
object.display();