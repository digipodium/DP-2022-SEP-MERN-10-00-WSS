let nums = [5, 3, 7, 24, 23];

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
