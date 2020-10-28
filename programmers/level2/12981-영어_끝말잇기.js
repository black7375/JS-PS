function failInfo(n, i) {
  const order = i + 1;

  const remainder = order % n;
  const person    = (remainder === 0)
                  ? n : remainder;

  const pOrder = Math.ceil(order / n);
  return [person, pOrder];
}

function solution(n, words) {
  const wordsL = words.length;

  for(let i = 0; i < wordsL; i++) {
    const word  = words[i];

    // Duplicate Check
    const wordI = words.indexOf(word);
    if(i !== wordI) return failInfo(n, i);

    // Word Check
    if(i !== 0) {
      const prevWord = words[i - 1];
      const prevLast = prevWord[prevWord.length - 1];
      const curFirst = word[0];

      if(prevLast !== curFirst) return failInfo(n, i);
    }
  }
  return [0, 0];
}
