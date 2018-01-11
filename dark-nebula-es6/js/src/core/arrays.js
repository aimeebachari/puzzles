removeWithoutCopy = (arr, item) => {

};

append = (arr, item) => {
  arr.push(item);
  return arr;
};

truncate = (arr) => {
  arr.pop();
  return arr;
};

prepend = (arr, item) => {
  arr.splice(0, 0, item);
  return arr;
};

curtail = (arr) => {
  arr.shift();
  return arr;
};

concat = (arr1, arr2) => {
  let newArray = arr1.concat(arr2);
  return newArray;
};

insert = (arr, item, index) => {
  arr.splice(index, 0, item);
  return arr;
}

count = (arr, item) => {
  
};

duplicates = (arr) => {

};

square = (arr) => {

};

findAllOccurrences = (arr, item) => {

};
