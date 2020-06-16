function solution(heights) {
  const heightsL = heights.length;
  return heights.reverse()
                .map((height, index) => {
                  const higherI = heights.slice(index)
                                         .findIndex(nextHeight => nextHeight > height);
                  return (higherI === -1)
                       ? 0
                       : heightsL - (index + higherI);
                }).reverse();
}
