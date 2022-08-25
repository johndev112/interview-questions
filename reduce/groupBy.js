// Challenge 15
// Create a function groupBy that accepts an array and a callback, and returns an object. groupBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. The value associated with each key will be an array consisting of all the elements that resulted in that return value when passed into the callback.



// Challenge 15


//inputs: array, callback()
//output: obj
	//keys: return value from each callback(ele)
	//value: array of all the elements that resulted in that return value when passed in callback
function groupBy(array, callback) {
  
  
  //iterate though array and pefform callback on each element 
  return array.reduce((acc,curr) => {
    
  acc[callback(curr)] = array.filter((ele) => {
    return callback(ele) === callback(curr)
  })
    return acc
  }, {})

}

// /*** Uncomment these to check your work! ***/
const decimals = [1.3, 2.1, 2.4];
const floored = function(num) { return Math.floor(num); };
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }
