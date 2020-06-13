function supportCount(sortedD, budget, count) {
  budget -= sortedD[count];
  return (budget >= 0)
       ? supportCount(sortedD, budget, ++count)
       : count;
}

function solution(d, budget) {
  const sortedD = d.sort((a, b) => a - b);
  return supportCount(sortedD, budget, 0);
}
