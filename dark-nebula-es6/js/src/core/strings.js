reduceString = (str, amount) => {
  let newStr = "";
  
  for(let i = 0; i < str.length; i++) {
    if(str[i] !== str[i - 1] && str[i] !== str[i + 1]) {
      newStr += str[i];
    } else if (str[i] !== str[i - 1]) {
      newStr += str[i].repeat(amount);
    }
  }
  return newStr;
},

reverseString = (str) => {
  let arr = str.split('');

  for(let i = 0, a = arr.length -1; i < a; i++, a--) {
    [arr[i], arr[a]] = [arr[a], arr[i]];
  }
  return arr.join('')
};
