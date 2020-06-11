function gcd(n, m) {
  return (m === 0)
       ? n
       : gcd(m, n % m);
}

function lcm(n, m, gcdN) {
  return (n * m) / gcdN;
}

function solution(n, m) {
  const gcdN = gcd(n, m);
  const lcmN = lcm(n, m, gcdN);
  return [gcdN, lcmN];
}
