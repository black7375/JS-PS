function gcd(n, m) {
  return (m === 0)
       ? n
       : gcd(m, n % m);
}

function solution(w, h) {
  const nonSquare = (w + h) - gcd(w, h);
  return (w * h) - nonSquare;
}
