Challenge 20
Create a function pipe that accepts an array (of functions) and a value. pipe should input the value into the first function in the array, and then use the output from that function as input for the second function, and then use the output from that function as input for the third function, and so forth, until we have an output from the last function in the array. pipe should return the final output.


// Challenge 20

//input:
	//array of functions 
	//value
//
function pipe(arrOfFuncs, value) {
  //input value into first func in array
  //use output of func as input for 2nd
    //use output of func as input for 3rd
  //and so forth 
  
  return arrOfFuncs.reduce((acc,curr) => {
    return curr(acc) || curr(value)

  }, '')

}

// /*** Uncomment these to check your work! ***/
const capitalize = str => str.toUpperCase();
const addLowerCase = str => str + str.toLowerCase();
const repeat = str => str + str;
const capAddlowRepeat = [capitalize, addLowerCase, repeat];
console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'
