'use strict'

/* 
Multiple of 3s and 5s

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

//solution 
const answer = (x: number): number => {
    let total: number = 0

    //loop through thousand and count all those divisible by 3 or 5
    for (let i = 1; i < x; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            total = total + i
        }
    }
    
    return total
}

console.log(answer(1000))

export {}