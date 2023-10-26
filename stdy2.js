function compareTriplets(a, b) {
  let aPoints = 0;
  let bPoints = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      aPoints++;
    } else if (a[i] < b[i]) {
      bPoints++;
    } else if (a[i] == b[i]) {
      {
        continue;
      }
    }
  }
  return [aPoints, bPoints];
}
// compareTriplets([5, 6, 7], [3, 6, 10]);


function aVeryBigSum(ar) {
  // Write your code here
  let result;
  let max = BigInt(Number.MAX_SAFE_INTEGER);
  // ar = BigInt(Number.MAX_SAFE_INTEGER);
  // for(let i=0;i<ar.length;i++){
  //   if(ar[i] > max){ar[i] = BigInt(ar[i]);}
  // }
  result = ar.reduce((a,b)=>{return (a + b)});
  console.log(result)
  return result;
}
// aVeryBigSum([1000000001 ,1000000002 ,1000000003 ,1000000004 ,1000000005])

function diagonalDifference(arr) {
  // Write your code here

  for(let i=0;i<arr.length;i++){
      for(let j=0;j<arr.length;j++){
          
      }
  }

}