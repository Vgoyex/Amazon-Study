function diagonalDifference(arr) {
  //i -> row j -> column
  // Write your code here
  //arr[[]]
  let d1 = 0;
  let d2 = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      // finding sum of primary diagonal
      if (i == j) d1 += arr[i][j];

      // finding sum of secondary diagonal
      if (i == (arr.length - j - 1)) d2 += arr[i][j];
    }
  }
  return Math.abs(d1 - d2);
}
//a[11],a[22],a[33]
//b[13],b[22],b[31]

console.log(diagonalDifference([
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
]));
