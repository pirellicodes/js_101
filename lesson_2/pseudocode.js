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
Declare a function called everyOther that has one parameter.
Filter(may be map) on the array parameter that iterates over a collection of integers and returns a new array that starts with the first element.
Define the element and index parameter. 
Use the modulo sign and filter the element to be divisible by an even number(2) to only return every other element in the new array.
Explicity return the method and the value in the callback function.

START
DECLARE everyOther()
WHILE index is % 2 with no reminder


function everyOther(array) {
return array.filter((element, index) => {
  return index % 2 === 0;
  });
}



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

Given two array collections of integers. 
Declare the function with two parameters called arr1 & arr2.
Use an iterating method to iterate over the elements of the first array's elements 
Determine how to push arr1 into a new array at the even indexes
Determine how to push arr2 into a new array at the odd indexes

Use the concat() method to merge both of the arrays and save the result to a new array called newArray
Return the newArray array.


merge([1, 2, 3], [4, 5, 6]); // => [1, 4, 2, 5, 3, 6]
*/



