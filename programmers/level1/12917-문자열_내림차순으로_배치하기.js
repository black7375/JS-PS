function solution(s) {
  return s.split('')
          .sort((a, b) => (a < b) - (a > b))
          .join('');
}
