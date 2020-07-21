function twoHighI(arr) {
  return arr.reduce((acc, num, idx, src) => {
    const firstI = acc[0];
    const firstN = firstI === -1
                 ? 0
                 : src[firstI];
    if(num > firstN)
      return [idx, firstI];
    else {
      const secondI = acc[1];
      const secondN = secondI === -1
                    ? 0
                    : src[secondI];
      return num > secondN
                 ? [firstI, idx]
                 : acc;
    }
  },[-1, -1])
}

function solution(land) {
  const landLast = land.length - 1;
  const rowL     = 4;
  const copyLand = [...land];

  for(let i = 0; i < landLast; i++) {
    const [firstI, secondI] = twoHighI(copyLand[i]);
    const firstN  = copyLand[i][firstI];
    const secondN = copyLand[i][secondI];

    for(let j = 0; j < rowL; j++) {
      copyLand[i+1][j] += firstI === j
                        ? secondN
                        : firstN;
    }
  }
  return Math.max(...copyLand[landLast]);
}
