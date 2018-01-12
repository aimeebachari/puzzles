isPrime = (num) => {

};

arraySum = (array) => {
  let getSum = (total, num) => {
    return total + num;
  };

  let arrayTotal = array.reduce(getSum);
  
  return arrayTotal;
};

fizzBuzz = (num) => {
  if (num == null) {
    return null;
  } else if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  } else if (num % 3 === 0) {
    return 'fizz';
  } else if (num % 5 === 0) {
    return 'buzz';
  } else {
    return num;
  }
};
