let modulus = (a, b) => {
  let quotient =  a / b;

  let product = Math.round(quotient) * b;

  return a - product;
}
