// 1. function keyword
function addNums(a, b) {
  var c = a + b
  console.log(c)
}

addNums(243, 567)
// console.log(c);

// 2. using function keyword and assignment operator
const checkEven = function (n) {
  if (n % 2 == 0) console.log("even")
  else console.log("odd")
}

checkEven(4567)

// 3. Arrow Function
const getAvg = (c, d, f) => {
  // console.log(c, d, f);
  let avg = (c + d + f) / 3
  // console.log(avg);
  return avg
}

// getAvg(34, 532);
// whenever value of parameter is not provided it is taken as undefined

let res = getAvg(34, 532, 675)
// if return value is not specified, undefined is returned

console.log(res)

// Create a function to check if number is prime

const checkPrime = (n) => {
  if (n == 1) {
    console.log("1 is not prime")
    return ;
  }
  let prime = true
  for (i = 2; i < n / 2; i++) {
    if (n % i == 0) {
      console.log("not prime")
      prime = false
      break
    }
  }
  if (prime) {
    console.log("prime")
  }
}

checkPrime(2)
