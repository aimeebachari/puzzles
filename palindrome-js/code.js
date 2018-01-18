let palindrome = (str) => {
  let reverseString = str.split('').reverse().join('');
  if (str === reverseString) {
    return true;
  } else {
    return false;
  }
}
