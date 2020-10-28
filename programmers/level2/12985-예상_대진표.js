function nextRound(n) {
  return (n % 2)
       ? (n + 1) / 2
       : n / 2;
}

function fightRound(a, b, round = 1) {
  const aNext = nextRound(a);
  const bNext = nextRound(b);

  if(aNext === bNext) return round;
  else return fightRound(aNext, bNext, round + 1);
}

function solution(n, a, b) {
  return fightRound(a, b);
}
