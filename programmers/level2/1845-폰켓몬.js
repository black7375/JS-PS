function solution(nums) {
  const pickN  = nums.length / 2;
  const numsS  = new Set(nums);
  const numsSN = numsS.size;
  return pickN > numsSN
               ? numsSN
               : pickN;
}
