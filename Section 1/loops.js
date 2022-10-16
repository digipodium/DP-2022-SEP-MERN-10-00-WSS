for( let i=0; i<10; i++ ){
    console.log(i);
}

for( let i=10; i>0 ; i-=2 ){
    console.log(i);
}

let a = 20;

while(a < 50){
    console.log(a);
    a+=5;
}

// WAP to check if number is divisible by 5 in range 34 - 55;
console.log('===============');
for(let i=34; i<=55; i++){
    // console.log(i);
    if(i%5 == 0){
        console.log(i);
    }
}

// WAP to print fibbonacci series of 10 numbers.

let [x, y] = [0, 1];
console.log(x);
console.log(y);

for(let i=0; i<10; i++){
    let c = x+y;
    console.log(c);
    // x = y;
    // y = c;
    [x, y] = [y, c];
}

// exponent operator : **

console.log(2 * 3);
console.log(2 ** 3);

// WAP to check if number is divisible by 3 and not by 6 in range 200 - 1000.