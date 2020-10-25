function solution(arr1, arr2) {
  return arr1.map(row1 => {
    return arr2[0].map((v2, row2I) => {
      return row1.reduce((acc, v1, row1I) => acc + (v1 * arr2[row1I][row2I]), 0);
    });
  });
}
