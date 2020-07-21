function solution(s) {
  const rexpT = new RegExp(/\{[\d,]+\}/, 'g');
  const rexpN = new RegExp(/\d+/, 'g');
  const sSet  = s.match(rexpT)
                 .map(t => t.match(rexpN))
                 .sort((a, b) => a.length - b.length)
                 .reduce((set, arr) => {
                   arr.forEach(n => set.add(n));
                   return set;
                 }, new Set([]));
  return Array.from(sSet, Number);
}
