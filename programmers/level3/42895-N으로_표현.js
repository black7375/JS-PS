function solution(N, number) {
  if(N === number) return 1;
  const sets = new Array(9).fill()
                           .map((v, i) => {
                             const set     = new Set();
                             const repeatN = Number(String(N).repeat(i));
                             set.add(repeatN);
                             return set;
                           });

  for(let i = 1; i < 9; i++) {
    const limit = Math.floor(i / 2) + 1;
    const set   = sets[i];
    for(let j = 1; j < limit; j++) {
      for(const aValue of sets[j]) {
        for(const bValue of sets[i - j]) {
          set.add(aValue + bValue);
          set.add(aValue * bValue);
          set.add(aValue - bValue);
          set.add(bValue - aValue);
          if(bValue !== 0) set.add(Math.floor(aValue / bValue));
          if(aValue !== 0) set.add(Math.floor(bValue / aValue));
        }
      }
    }
    if(set.has(number)) return i;
  }
  return -1;
}
