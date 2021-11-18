// ## requirement 
    
// Create a new index.js file and write a loop in any way to achieve the following requirements: from 0 to 20, determine whether the number is odd or even, and output. The output is as follows:

// ```
// 1 is odd number.
// 2 is even number.
// 3 is odd number.
// ……
// 19 is odd number.
// 20 is even number.
// ```
console.log('```')
for (let i = 0; i<= 20; i++) {
    if ( i%2 === 0) {
        console.log(i + ' is even number.')
    } else {
        console.log(i + ' is odd number.')
    }
}
console.log('```')

