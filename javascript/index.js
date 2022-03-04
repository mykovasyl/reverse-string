function reverseString(str) {
  let reversedArray = [];
  str.split('').forEach(letter => reversedArray.unshift(letter))
  return reversedArray.join('')
}

if (require.main === module) {
  
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// create a new array to house elements of reversed string
//  split the string into arrays containing each character
//    go through each letter and add the elements to the beginning of the new array
//      return the new array joined back
//   

// 
