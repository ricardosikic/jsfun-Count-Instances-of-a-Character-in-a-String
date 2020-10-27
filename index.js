const charCount = (myChar, str) => {
  const newArray = str.split('');
  let count_char = 0;
  newArray.map((item) => {
    if(item === myChar) {
      count_char += 1;
    }
  });

  return count_char;
}
charCount("b", "big fat bubble");


//Create a function that takes 2 arguments and return the number of times that the character is found in the second argument
