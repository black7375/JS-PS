function numSplit(num) {
  return String(num).split('');
}

function checkZero(x, y, z) {
  const Z = "0";
  return x === Z || y === Z || z === Z;
}

function checkOverlap(x, y, z) {
  return x === y || x === z || y === z;
}

function solution(baseball) {
  const min = 123;
  const max = 987;
  const baseballL = baseball.length;

  let count = 0;
  let aaaaa = 0;
  for(let i = min; i <= max; i++) {
    let [x, y, z] = numSplit(i);

    if(checkZero(x, y, z)   ) continue;
    if(checkOverlap(x, y, z)) continue;

    for(let j = 0; j < baseballL; j++) {
      let strike = 0;
      let ball   = 0;

      const [caseN, caseS, caseB] = baseball[j];
      const [case1, case2, case3] = numSplit(caseN);
      if(checkZero(case1, case2, case3)   ) break;
      if(checkOverlap(case1, case2, case3)) break;

      if(x === case1) strike++;
      if(y === case2) strike++;
      if(z === case3) strike++;
      if(caseS !== strike) break;

      if((x === case2) || (x === case3)) ball++;
      if((y === case1) || (y === case3)) ball++;
      if((z === case1) || (z === case2)) ball++;
      if(caseB !== ball) break;

      if(j === baseballL - 1) count++;
    };
  }

  return count;
}
