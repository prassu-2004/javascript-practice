////////Arrays creating , accessing.

const fruits=['apple','mango','papaya','grapes'];
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
fruits[2]='cherry';
console.log(fruits[2]);
console.log(fruits);


//////length

console.log(fruits.length);


//////operations on arrays

fruits.push('papaya','grapes');
console.log(fruits);

console.log(fruits.pop());/////prints deleted element
console.log(fruits);

//adding element at begin using unshift

fruits.unshift("banana",'orange');
console.log(fruits);

//////removing an element at begin

fruits.shift();
console.log(fruits);