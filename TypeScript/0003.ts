/*
Largest prime factor

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

//solution
const queryNumber: number = 600851475143

const answer = (x: number): number => {
    let divisor = 2;
    let result = x
    
    //starting from the bottom up, divide all numbers until you get stuck
    while (result > 1) {
        //if the number is dividable, keep dividing
        if (result % divisor == 0) {
            result = result / divisor
        //increase the divisor
        } else if (divisor > 2) {
            divisor += 2
        } else {
            divisor ++
        }
    }

    return divisor
}

console.log(answer(queryNumber))

export {}