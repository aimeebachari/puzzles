let longestWord = (str) => {
  let arr = str.split(' ');
  let word = arr[0];

  for(let i = 0, a = arr.length; i < a; i++) {
    if (word.length < arr[i].length) {
      word = arr[i];
    }
  }
  return word;
}
