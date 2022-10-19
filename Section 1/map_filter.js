let nums = [5, 3, 8, 24, 23, 58, 26];

console.log('\n======== using index ========');
for( let i=0; i<nums.length; i++ ){
    console.log(nums[i] ** 2);
}

console.log('\n======== using for of loop ========');
for(let n of nums){
    console.log( n**2 );
}

console.log('\n======== using for-each function ========');
nums.forEach( (n) => { console.log(n**2); } )

console.log('\n======== check even number ========');

let evenNums = [];

nums.forEach( (a) => {
    if(a%2==0){
        console.log(a);
        evenNums.push(a);
    }
})

console.log(evenNums);

console.log('\n======== using map ========');
// map is used to modify the elements of array
let sqrtArr = nums.map( (p) => { return p**2 } );

console.log(sqrtArr);

let prices = [45.23, 56, 102.99, 684, 5599];
// [ '₹45.23', '₹56', '₹102.99', '₹684', '₹5599' ];

console.log('$'+45.23);
let MyPrices = prices.map( p => '₹'+p );
console.log(MyPrices);

console.log('\n======== using filter ========');

let nums2 = nums.filter( (n) => { return n%2!=0 } );

console.log(nums2);

let fruits = [ 'apple', 'pineapple', 'strawberry', 'cherry', 'mango', 'orange', 'lichi' ];
// WAP to keep strings containing length more than 5

let newFruits = fruits.filter( (fr) => { return fr.length > 5 } )
console.log(newFruits);
// console.log('apple'.length);