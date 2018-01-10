let missingNumber = (array) => {
  let getSum = (total, num) => {
    return total + num;
  };

  let arrayTotal = array.reduce(getSum);

  let min = array[0];
  let max = array[array.length - 1];

  let idealArray = (start, end) => {
    let newArray = [];

    while(start < end + 1) {
      newArray.push(start++);
    };
    return newArray;
  };

  let idealTotal = idealArray(min, max).reduce(getSum);

  return idealTotal - arrayTotal;
}
