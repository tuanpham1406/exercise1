function findMinScore(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  console.log(min);
}
findMinScore([10,5,2,8,-1,6,8]);
findMinScore([2,4,0,5,1]);
findMinScore([8,6,2,6,1,1,4]);