function solution(s) {
  const sLength = s.length;
  return (sLength === 4) || (sLength === 6)
       ? s.split('')
          .filter(char => (0 <= char) && (char <= 9))
          .length === sLength
       : false;
}
