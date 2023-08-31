var person = "eRic khAn";

function toTitleCase(input) {       // title case
    return input.toLowerCase().replace(/(^|\s)\S/g, (match) => match.toUpperCase());
  }
console.log(toTitleCase(person));

//There is not any built-in funtion for Title Case just like toLowerCase() & toUpperCase() 
//in Typescript and Javascript, however we can use user defined function for title case a string.


// Following are another two methods for title case a string or sentence.

/*let titleCaseVariableName = person.charAt(0).toUpperCase() + person.slice(1).toLowerCase();
console.log(titleCaseVariableName);*/


/*function toTitleCase(input) {
    const words = input.toLowerCase().split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
  }
  console.log(toTitleCase(person));*/


  
  // Another Method:

//   function toTitleCase(input) {
//     let words = input.toLowerCase().split(' '); // Convert the input to lowercase and split into words
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].substring(1); // Capitalize the first letter
//     }
//     return words.join(' '); // Join the words back into a sentence
// }