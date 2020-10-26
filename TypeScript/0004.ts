/* 
Largest Palindrome Product

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

const palindromeCheck = (num: number): boolean => {
    const numString: string = num.toString()
    let answer: boolean = true
    let left: number = 0
    let right: number = numString.length - 1
    while (left <= right) {
        if (numString[left] !== numString[right]) {
            answer = false
        }
        left ++
        right --
    }

    //returns true if palindrome, otherwise returns false
    return answer
}

const largestPalindrome = (num: number): number => {
    let left: number = num
    let right: number = num

    /* initial answer but doesn't seem as safe as it's reliant on first difference of 100 i.e. 999*999 -> 999*899 then 998*998 to 998*898

    while (!palindromeCheck(left*right)) {
        left --
        if (Math.abs(right - left) === 100) {
            right --
            left = right
        }
    }
    console.log(`left: ${left}`)
    console.log(`right: ${right}`)

    return left * right
    */

    
    //brute force solution
    //permutate through all possible values checking for palindromes from 999*999 -> 999*1 then 998*998 -> 998*1 etc. 
    let solutions: number[] = []

    while (right !== 1) {
        if (palindromeCheck(left * right))
            solutions = [...solutions, left * right]
        left--
        if (left === 1) {
            right--
            left = right
        }

    }

    //returns max number from all possible palindromic solutions
    return Math.max(...solutions)
    
}


console.log(largestPalindrome(999))

export {}