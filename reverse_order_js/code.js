let reverse_order = (string) => {
  let array = string.split(' ');

  for(let i = 0, a = array.length -1; i < a; i++, a--) {
    [array[i], array[a]] = [array[a], array[i]];
  }

  return array.join(" ");
}
