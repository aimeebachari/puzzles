let reverse_order = (string) => {
  let array = string.split(' ');

  let newArray = [];
  let lastElementIndex = array.length - 1

  for(let i = 0; i < array.length; i++) {
    newArray.push(array[lastElementIndex]);
    lastElementIndex--;
  }

  return newArray.join(" ");
}
