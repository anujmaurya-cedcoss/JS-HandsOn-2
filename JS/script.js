// 31. Appending Variables to Strings
const someAdjective = "!empty";
let myStr = "Learning to code is ";
myStr += someAdjective;

// 32. Find the Length of a String
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;

// 33. Use Bracket Notation to Find the First Character in a String
let firstLetterOfLastName = "";
const lastName = "Lovelace";
firstLetterOfLastName = lastName[0];

// 34. Understand String Immutability
let myStr = "Jello World";
myStr = "Hello World";

// 35. Use Bracket Notation to Find the Nth Character in a String
const lastName = "Lovelace";
const thirdLetterOfLastName = lastName[2]; 

// 36. Use Bracket Notation to Find the Last Character in a String
const lastName = "Lovelace";
const lastLetterOfLastName = lastName[lastName.length - 1];

// 37. Use Bracket Notation to Find the Nth-to-Last Character in a String
const lastName = "Lovelace";
const secondToLastLetterOfLastName = lastName[lastName.length-2];

// 38. Word Blanks
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = myNoun + " " + myAdjective + " " + myVerb + " " + myAdverb;

// 39. Store Multiple Values in one Variable using JavaScript Arrays
const myArray = ["me", 1];

// 40. Nest one Array within Another Array
const myArray = [[],[]];

// 41. Access Array Data with Indexes
const myArray = [50, 60, 70];
const myData = myArray[0];

// 42. Modify Array Data With Indexes
const myArray = [18, 64, 99];
myArray[0] = 45;

// 43. Access Multi-Dimensional Arrays With Indexes
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  const myData = myArray[2][1];

//   44. Manipulate Arrays With push Method
const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);

// 45. Manipulate Arrays With pop Method
const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop();

// 46. Manipulate Arrays With shift Method
const myArray = [["John", 23], ["dog", 3]];
const removedFromMyArray = myArray.shift();

// 47. Manipulate Arrays With unshift Method
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);

// 48. Shopping List
const myList = [["a", 1],["b", 2],["c", 3],["d", 4],["e", 5]];

// 49. Write Reusable JavaScript with Functions
function reusableFunction() {
    console.log("Hi World");
  }
  reusableFunction();

// 50. Passing Values to Functions with Arguments
function functionWithArgs(x, y) {
    console.log(x + y);
  }
  functionWithArgs(3,35);

//   