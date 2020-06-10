function solution(arr) {
  const min    = Math.min(...arr);
  const result = arr.filter(num => num !== min);
  return result.length
       ? result
       : [-1];
}
