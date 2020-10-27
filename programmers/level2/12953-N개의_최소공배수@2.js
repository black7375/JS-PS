function gcd(a, b) {
  const remainder = a % b;
  return remainder ? gcd(b, remainder) : b
}

function solution(arr) {
  return  arr.reduce((a,b) => (a*b) / gcd(a,b));
}
