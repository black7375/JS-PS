function decodeMap(arr) {
  return arr.map(line => {
    const binary = line.toString(2);
    const empty  = '0'.repeat(arr.length - binary.length);
    return (empty + binary).split('').map(Number);
  });
}

function mergeMap(arr1, arr2) {
  const space = ' ';
  const wall  = '#';
  return arr1.map((line, lIndex) =>
    line.map((block, bIndex) => (block + arr2[lIndex][bIndex])
                              ? wall
                              : space )
        .join('')
  );
}

function solution(n, arr1, arr2) {
  const decodeArr1 = decodeMap(arr1);
  const decodeArr2 = decodeMap(arr2);
  return mergeMap(decodeArr1, decodeArr2) ;
}
