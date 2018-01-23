let countVowels = (str) => {
  let count = 0;

  let arr = str.split('');

  for(let i = 0, a = arr.length; i < a; i++) {
    if (arr[i] === 'a' || arr[i] === 'e' || arr[i] === 'i' || arr[i] === 'o' || arr[i] === 'u') {
      count += 1;
    }
  }
  return count;
}
