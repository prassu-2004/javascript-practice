/////for, while, break,continue

for(let i=1;i<=100;i++){
    console.log(i);
}

const str=['apple','banana','grapes','papaya','orange','cherry'];
for(let i=0;i<str.length;i++){
    console.log(str[i]);
}

//////sum of array elements

const arr=[1,201,3,40,50,1,302,20];
let sum=0;
for(let i=0;i<arr.length;i++){
    sum=sum+arr[i];
}
console.log(sum);

/////first even number in an array

for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        console.log(arr[i])
        break;
    }
}

////////break using for loop

let s=0
for(let u=0;u<arr.length;u++){
   s=s+arr[u];
   if(s==1)
      break;
}
console.log(s);


//////continue

for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0)
        continue;
    console.log(arr[i]);
}
