//Pseudocode Practice
//A function that returns the sum of two numbers
/* Declare a function with two parameters
Add both parameters together and return the sum.
*/



//START
//DECLARE computingFunc with two number parameters
//computingFunc(num1, num2) {
//SET sum = num1 + num2;
//RETURN sum;
// }
//
//END

/* A function that takes an array of strings, and returns a string that is all those strings concatenated together.
Declare a function with one parameter for the string argument.
Use an array method on the argument that turns the array into a string and combines all characters together.
Return the string

START
Given an array of strings as an argument.
DECLARE combinedString with one parameter.
Use an array method on the parameter that transforms an arrays elemenets into a string that concatenates all of them together
RETURN string.
*/

/*A method that takes an array of integers, and returns a new array with every other element from the original array, starting with the first element.
Input: an array of integer numbers called numbers
Output: an array consisting of every even-indexed from the input array

declare `evenIndexElements` and initialize to an empty array

begin iteration over input array (loop iterator variable: `idx`)
  declare `currentNumber` and initialize to current element(numbers[idx])
  push `currentNumber` onto `evenIndexElements`
  increment current loop iterator `idx` by 2
end iteration

return `evenIndexElements`

START
#Given an array of integers called `numbers`

SET evenIndexElements = []

WHILE iterator <= length of `numbers`
  SET currentNumber = numbers[iterator]
  push currentNumber onto end of evenIndexElements array
  iterator = iterator + 2

Return evenIndexElements
END

function everyOther(numbers) {
  const evenIndexElements = [];

  for (let idx = 0; idx < numbers.length; idx += 2) {
    evenElements.push(numbers[idx]);
  }

  return evenIndexElements;
}

console.log(everyOther([1,4,7,2,5])); // => [1,7,5]


/*a function that determines the index of the 3rd occurrence of a given character in a string. For instance, if the given character is 'x' and the string is 'axbxcdxex', the function should return 6 (the index of the 3rd 'x'). If the given character does not occur at least 3 times, return null.
Given a string of words.
Declare a function
Save the regex to a variable. 
Use the match method on that variable with the global flag to catch all occurences.
If there are 3 matches of the desired character, return the index of the last match. 
Otherwise, if there is less than 3 matches return null.

START
DECLARE everyThirdMatch(string)
SET regex = /[x]/g;
IF regex === string && regex.length >= 3
PRINT indexOf(x, 3)
ELSE
PRINT NULL
*/

/* a function that takes two arrays of numbers and returns the result of merging the arrays. The elements of the first array should become the elements at the even indexes of the returned array, while the elements of the second array should become the elements at the odd indexes.
Casual:

Input: two array collections of numbers called `arr1` and `arr2`
Output: a single merged array from the values of the two input arrays: arr1 being at the even indexes and arr2 at the odd indexes.

declare `mergedArray` and initialize it to an empty array
declare `evenIndexes` and initialize it to 0

iterate over arr1 with the loop iterator variable being: `idx`
  declare `currNum` and initialize to it to the current element of `arr1`
  assign `currNum` onto `mergedArray` at `evenIndex`
  increment `evenIndex` by 2
end iteration

iterate over arr2 with loop iterator variable being `idx`
 declare `currNum` and initialize to current element of `arr2`
 assign `currNum` onto `mergedArray` at index `oddIndex
end iteration

return mergedArray

Formal:

#Given two array collections of numbers

SET `mergedArray` = []
SET `evenIndexes` = 0
SET  `oddIndexes` = 1

WHILE `idx` < arr1.length
  SET `currNum` = arr1[idx]
  `currNum` = mergedArray[evenIndexes]
  `evenIndexes` = `evenIndexes` + 2

WHILE `idx` < arr2.length
  SET `currNum` = arr2[idx]
  currNum = mergedArray[oddIndexes]
  oddIndexes = oddIndexes + 2

PRINT mergedArray
END

  





function merge( , ) {

}
merge([1, 2, 3], [4, 5, 6]); // => [1, 4, 2, 5, 3, 6]
*/

// function merge(arr1, arr2) {
//   const mergedArray = [];
//   let evenIndex = 0;
//   let oddIndex = 1;

//   for (let idx = 0; idx < arr1.length; idx ++) {
//     for (let secondIdx = 0; idx < arr2.length; secondIdx ++) {
//       let currIdx = arr1[idx][secondIdx]
//     }
    
//     const currNum = arr1[idx];
//     mergedArray[evenIndex] = currNum;
//     evenIndex += 2;
//   }

//   for (let idx = 0; idx < arr2.length; idx ++) {
//     const currNum = arr2[idx];
//     mergedArray[oddIndex] = currNum;
//     oddIndex += 2;
//   }

// return mergedArray;

// }


// console.log(merge([1, 2, 3], [4, 5, 6])); // => [1, 4, 2, 5, 3, 6]





// Formal:

// #Given two array collections of numbers

// SET `mergedArray` = []
// SET `evenIndexes` = 0
// SET  `oddIndexes` = 1

// WHILE `idx` < arr1.length
//   SET `currNum` = arr1[idx]
//   `currNum` = mergedArray[evenIndexes]
//   `evenIndexes` = `evenIndexes` + 2

// WHILE `idx` < arr2.length
//   SET `currNum` = arr2[idx]
//   currNum = mergedArray[oddIndexes]
//   oddIndexes = oddIndexes + 2

// PRINT mergedArray
// END


// function merge(arr1, arr2) {
//   const mergedArray = [];
//   let evenIndex = 0;
//   let oddIndex = 1;
  
// arr1.forEach((element, idx, array) => {
//     secondIdx = arr2[oddIndex];
//   if (array[oddIndex]) {
//     const currNum = arr2[idx];
//     mergedArray[evenIndex] = currNum;
//     evenIndex += 2;
//   } else if (array[idx] % 2 === 1) {
//     const currNum = arr2[idx];
//     mergedArray[oddIndex] = currNum;
//     oddIndex += 2;
//   }
// });


// return mergedArray;

// }

// console.log(merge([1, 2, 3], [4, 5, 6])); // => [1, 4, 2, 5, 3, 6]
// Input: two array collections of numbers called `arr1` and `arr2`
// Output: a single merged array from the values of the two input arrays: arr1 being at the even indexes and arr2 at the odd indexes.
//
// declare `mergedArray` and initialize it to an empty array
// declare `evenIndexes` and initialize it to 0
// declare 'oddIndexes and initialize it to 1;
// 
// iterate over arr1 and arr2 with the loop iterator variable being: `idx`
//  have the stopping condition be twice the length of both input arrays
//  if the current idx is in arr1
//    declare `currNum` and initialize to it to the current element of `arr1`
//    assign `currNum` onto `mergedArray` at `evenIndex`
//    increment `evenIndex` by 2
//    

//  if the current idx is in arr2
//    declare `currNum` and initialize to current element of `arr2`
//    assign `currNum` onto `mergedArray` at index `oddIndex
//    increment `oddIndex` by 2
//    
//  end iteration



function merge(arr1, arr2) {
  const mergedArray = [];
  let evenIndex = 0;
  let oddIndex = 1;
  
  for (let idx = 0; idx < arr1.length * 2; idx ++) {
    
    if (arr1[idx]) {
      const currNum = arr1[idx];
      mergedArray[evenIndex] = currNum;
      evenIndex += 2;
    }
    
    if (arr2[idx]) {
      const currNum = arr2[idx];
      mergedArray[oddIndex] = currNum;
      oddIndex += 2;
    }



  }
  return mergedArray;
};

console.log(merge([1, 2, 3], [4, 5, 6])); // => [1, 4, 2, 5, 3, 6])


//
//SET mergedArray = []
//SET evenIndex = 0
//SET oddIndex = 1
//
//WHILE idx < arr1.length * 2
//INCREMENT idx += 1
//
//IF arr1[idx] === true
//SET currNum = arr1[idx]
//mergedArray[evenIndex] = currNum 
//evenIndex += 2
//
//IF arr2[idx] === true
//SET currNum = arr2[idx]
//mergedArray[oddIndex] = currNum
//oddIndex += 2
//
//RETURN mergedArray



