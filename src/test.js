function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
  for (i = 0; i < order.length; i += 1) {
    total += i;
  }
  // Change code above this line
  return total;
}

console.log(calculateTotalPrice([2, 4, 6, 2]));
