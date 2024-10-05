let m=1;
let n=15;
for(let i=m;i<=n;i++){
    if(i%3==0 && i%5==0){
        console.log("fizzBuzz");
    }
    else if(i%3==0){
        console.log("Fizz");
    }
    else if(i%5==0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}