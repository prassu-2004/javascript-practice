///////introducyion to objects

const person={
    name:'prasanna',
    age:20,
    city:'vizag',
};

///// accessing using dot

console.log(person.name,person.age);

////accessing using square bracktes

console.log(person['name'], person['age']);

/////adding new property using dot

person.occupation='student';
console.log(person);

///////adding new property using square brackets

person['hobbies']=['reading','dancing','drawing'];
console.log(person);

console.log(person['hobbies']);

////methods in object
const car={
    name:"maruthi",
    model:"c3h1b",
    year:2001,
    drive:function(){
        console.log("you can drive now")
    },
}
car.drive();

////calculator

const calc={
    add:function(a,b){
        console.log(`addition is: ${a+b}`);
    },
    sub:function(a,b){
        console.log(`subtraction is: ${a-b}`);
    },
    mul:function(a,b){
        console.log(`multiplication is: ${a*b}`);
    },
    div:function(a,b){
        console.log(`division is: ${a/b}`);
    }
}

calc.add(10,20);
calc.sub(3890-263,0);
calc.mul(10,10);
calc.div(25/5,5);