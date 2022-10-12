console.log('Hello JavaScript');

a = 345;

console.log(a);

myname = "Mubassir";

console.log(typeof(myname));

// Conditions

n = 34;

if( n%2 == 0 ){
    console.log('even');
}else{
    console.log('odd');
}

// Logical Operators : ! ,  && , ||
// WAP to check if a number is divisble by 7 as well as 11.

m = 77;

if( m%7==0 && m%11==0  ){
    console.log('divisible by both');
}else{
    console.log('not divisible');
}

if( m%7==0 && m%11==0 ){
    console.log('divisible by both');
}
else if( m%7==0 ){
    console.log('only divisible by 7');
}
else if( m%11==0 ){
    console.log('only divisible by 11');
}
else{
    console.log('not divisible');
}

// Write a program to give grades to following marks
// 1. >90 -> A+
// 2. 80 - 90 -> A
// 3. 50 - 80 -> B
// 4. 30 - 50 -> C
// 5. <30 -> F

marks = 790;

if(marks <= 100 && marks >90){
    console.log('Grade : A+');
}else if(marks <= 90 && marks >80){
    console.log('Grade : A');
}else if(marks <= 80 && marks >50){
    console.log('Grade : B');
}else if(marks <= 50 && marks >30){
    console.log('Grade : C');
}else if(marks <= 30 && marks >0){
    console.log('Grade : F');
}else{
    console.log('Invalid marks');
}

if(true){

    g = 'This should be global';
    var f = 'This only works in function';
    let x = 'This should be local';
    const pi = 3.14;

    // pi = 4.14;
}

console.log(g);
console.log(f);
// console.log(x);
console.log(pi);