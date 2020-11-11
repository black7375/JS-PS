let max = Infinity;

function dfs(begin, target, words, count = 0) {
  if(words.length === 0) return Infinity;
  if(count >= max)       return count;
  if(begin === target) {
    max = Math.min(max, count);
    return count;
  }

  const able = words.filter(word => {
    const differCount = word.split('')
                            .reduce((differ, char, idx) => differ + (char !== begin[idx]), 0);
    return differCount === 1;
  });

  return Math.min(...able.map(ableWord => {
    const excludeWords = words.filter(word => word !== ableWord);
    return dfs(ableWord, target, excludeWords, count + 1);
  }));
}

function solution(begin, target, words) {
  const count = dfs(begin, target, words);
  return (count === Infinity) ? 0 : count;
}
