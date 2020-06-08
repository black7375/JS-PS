function solution(arr) {
  return arr.filter((num, index) => num !== arr[index + 1]);
}
