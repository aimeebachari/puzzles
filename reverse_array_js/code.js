let reverseArray = (array) => {
  for(let i = 0, j = array.length -1; i < j; i++, j--) {
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
