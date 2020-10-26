function solution(s) {
  const splitS = s.split(' ');
  return splitS.map(token => {
    const first = (token === '')
                ? token
                : token[0].toUpperCase();
    const other = token.slice(1).toLowerCase();
    return first + other;
  }).join(' ');
}
