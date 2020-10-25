function allSame(arr, val) {
  return arr.reduce((acc, rowA) => acc && rowA.every(v => v === val),
                    true);
}

function sliceSubset(arr, col, row) {
  const rowA    = arr.slice.apply(arr, row);
  const results = rowA.map(colA => colA.slice.apply(colA, col));
  return results;
}

function mergeResult(...arr) {
  return arr.reduce((acc, cur) => [acc[0] + cur[0], acc[1] + cur[1]],
                    [0, 0]);
}

function quadCompression(arr) {
  if(allSame(arr, 0)) return [1, 0];
  if(allSame(arr, 1)) return [0, 1];

  const nextL = arr.length / 2;
  const quad1 = quadCompression(sliceSubset(arr, [0, nextL], [0, nextL]));
  const quad2 = quadCompression(sliceSubset(arr, [0, nextL], [   nextL]));
  const quad3 = quadCompression(sliceSubset(arr, [nextL   ], [0, nextL]));
  const quad4 = quadCompression(sliceSubset(arr, [nextL   ], [   nextL]));
  return mergeResult(quad1, quad2, quad3, quad4);
}

function solution(arr) {
  return quadCompression(arr);
}
