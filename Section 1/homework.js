// 15 Oct 2022

// to check whether a number is prime

let n = 25;

let prime = true;
for(i=2; i<n/2; i++){
    if(n%i==0){
        console.log('not prime');
        prime = false;
        break;
    }
}
if(prime){
    console.log('prime');
}

// to reverse a number

m = 78365;
reverse = 0;

while(m>0){
    // console.log(reverse);
    let r = m%10;
    reverse = reverse*10 + r;
    // m = parseInt(m/10)
    m = Math.floor(m/10)
}

console.log(reverse);

// add number from 67 to 89
let sum = 0;
for(let i=67; i<=89; i++){
    // sum = sum+i;
    sum += i;
}
console.log(sum);

// Factorial
let fact = 1;
b = 7;
for(let i=2; i<=b; i++ ){
    fact *= i;
}

console.log(fact);