removeWithoutCopy = (arr, item) => {
  for(let i in arr){
    while(arr[i] == item) arr.splice(i,1);
  }
  return arr;
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
  let sum = 0;
  for(let i = 0, a = arr.length -1; i < a; i++) {
    if (arr[i] === item) {
      sum += 1;
    }
  }
  return sum;
};

duplicates = (arr) => {

};

square = (arr) => {
  for(let i = 0, a = arr.length; i < a; i++) {
    arr[i] = arr[i] * arr[i];
  }
  return arr;
};

findAllOccurrences = (arr, item) => {

};
