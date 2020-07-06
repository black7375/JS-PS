function balanced(w) {
  const s = '(';
  const u = [];

  let count = 0;
  let index = 0;
  let check = true;
  do {
    const char = w[index];
    u.push(char);
    index++;

    count += (char === s)
           ? 1
           : -1;

    if(count < 0)
      check = false;
  } while(count !== 0 && index < w.length);

  return [u.join(''), w.slice(u.length), check];
}

function convert(u) {
  return u.split('')
          .map(str => (str === '(') ? ')' : '(')
          .join('');
}

function solution(p) {
  if(p === '') return p;
  const [u, v, check] = balanced(p);
  const fixedV = solution(v);

  if(check) {
    return u + fixedV;
  } else {
    const bracketV = '(' + fixedV + ')';
    const convertU = convert(u.substring(1, u.length - 1));
    return bracketV + convertU;
  }
}
