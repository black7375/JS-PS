function solution(arr1, arr2) {
  return  arr1.map((line, i) =>
    line.map((num, j) =>
      num + arr2[i][j]));
}
