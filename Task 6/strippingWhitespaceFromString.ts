let stringWithWhitespace = " \n\tMuhammad Saif   \n ";

console.log(`String value with Whitespace is: ${stringWithWhitespace}`);

let strippingWhitespaceString = stringWithWhitespace.trim();
// .trim() is a built-in method in Javascript that works on string. And it is used to remove leading and trailing whitespace characters from a string. 
// Whitespace characters include spaces, tabs, newlines, and similar characters that are used for formatting and layout
//.trim() does not remove whitespace characters within the string.

console.log(`String value without Whitespace is: ${strippingWhitespaceString}`);

