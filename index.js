function hasTargetSum(array, target) {
  // Write your algorithm here
  //Iterate over one elem's options
  for (let i = 0; i< array.length; i++) {
    //iterate over elem+1's options
    for (let j = i +1; j< array.length; j++) {
      if (array[i] + array[j] === target){
        return true;
      }
      
    }
    
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  quadratic time O(n^2)
*/

/* 
  Add your pseudocode here
  Iterate over one elem's options
    i
  iterate over elem+1's options
    j
    return arr[i] + arr[j] = target
  return false
  will be quadratic time
*/

/*
  Add written explanation of your solution here

  If a pair of numbers in the given array adds up to the target number, return true. If not, return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([3, 6, 2, 7], 3));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([7, 10, 20, 9, 18], 16));
}

module.exports = hasTargetSum;
