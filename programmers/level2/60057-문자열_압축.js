function numL(num) {
  return String(num).length;
}

function solution(s) {
  let   minL  = s.length;
  const limit = s.length / 2;

  for(let i = 1; i <= limit; i++) {
    let   overlap = 1;
    const regexp  = new RegExp(".{1," + i + "}", "g");
    const splited = s.match(regexp);
    const strL = splited.reduce((count, str, idx) => {
      if(idx > 0) {
        const recent = splited[idx - 1];
        if(str === recent) {
          overlap++;
          return idx === (splited.length - 1)
               ? count + numL(overlap)
               : count;
        } else {
          const overlapL = numL(overlap);
          const tmp = overlap;
          overlap = 1;
          return tmp === 1
               ? count + str.length
               : count + str.length + overlapL;
        }
      } else {
        return str.length;
      }
    }, 0);

    if (minL > strL) {
      minL = strL;
    }
  }
  return minL;
}
