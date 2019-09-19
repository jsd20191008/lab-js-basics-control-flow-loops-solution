/***********

Problem 1:
A company decided to give bonus of 5% to an employee if his/her year of service is more than 5 years. Given a salary and year of service and print the net bonus amount.

Variables Required (feel free to add your own variables if needed):
salary (number)
yearsOfService (number)

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. Given the following:
    salary = 50000
    yearsOfService = 6

   Result: 2500

2. Given the following:
    salary = 90000
    yearsOfService = 5

   Result: 0

3. Given the following:
    salary = 83000
    yearsOfService = 9

   Result: 4150
************/

console.log('Problem 1:')

// Add your code below this line

const salary = 83000
const yearsOfService = 9
let netBonus = 0
const bonusPercentage = 0.05

if (yearsOfService > 5) {
  netBonus = salary * bonusPercentage
}

console.log(netBonus)

// Add your code above this line

console.log('')
console.log('-----------------')
/***********

Problem 2:

Write a program that finds the average of all the numbers in a given array

Variables Required (feel free to add your own variables if needed):
numbers (array)

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. Given the following:
    numbers = [1, 2, 3]

    Result: 2

2. Given the following:
    numbers = [9, 18, 62, 3, 17]

    Result: 21.8

************/

console.log('Problem 2:')

// Add your code below this line

const numbers = [9, 18, 62, 3, 17]
let sum = 0

// .reduce() could also be used here
numbers.forEach((numbers) => {
  sum += numbers
})

// const total = numbers.reduce((sum, number) => sum + number)
// console.log(total)

console.log(sum / numbers.length)

// Add your code above this line

console.log('')
console.log('-----------------')

/***********
Problem 3:

Fizz buzz. Write a program that will iterate through numbers 1 to 100 and do the following:

- if the number is divisible by 3, print "fizz"
- if the number is divisible by 5, print "buzz"
- if the number is divisible by 3 and 5, print "fizzbuzz"
- if the number is not divisible by 3 or 5 just, print the number

Variables Required: none (choose your own)

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. Given the following:

   Expected Result:
   1
   2
   fizz
   4
   buzz
   fizz
   7
   8
   fizz
   buzz

************/
console.log('Problem 3:')

// Add your code below this line

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('fizzbuzz')
  } else if (i % 3 === 0) {
    console.log('fizz')
  } else if (i % 5 === 0) {
    console.log('buzz')
  } else {
    console.log(i)
  }
}

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')
