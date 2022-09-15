Challenge 1
Write a recursive function countdown that accepts a positive integer n as an input and logs every number from n (inclusive) to 0 (exclusive) to the console.


// Challenge 1
function countdown(n) {
  
  //base case if n <= 0
  if (n <= 0) {
    return n
  }
  
  //recursive case 
  //subtract 1 from n
  console.log(n)
return countdown(n - 1)
}
