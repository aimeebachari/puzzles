let capitalizeFirstWord = (str) => {
  let arr = str.split(' ');
  let newArray = [];

  for(let i = 0, a = arr.length; i < a; i++) {
    newArray.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1));
  }
  return newArray.join(' ');
}
