function charFilter(char, lower, upper) {
  return (char === lower) || (char === upper);
}

function charLength(arrayS, lower, upper) {
  return arrayS.filter(char => charFilter(char, lower, upper))
               .length;
}

function solution(s){
  const arrayS  = s.split('');
  const pLength = charLength(arrayS, "p", "P");
  const yLength = charLength(arrayS, "y", "Y");

  return pLength === yLength;
}
