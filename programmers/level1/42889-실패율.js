function solution(N, stages) {
  const countStages = Array(N).fill()
                              .map(() => ({doing: 0, try: 0}));
  const answer = [];

  stages.forEach(last => {
    const lastI = last - 1;
    if(lastI < N) {
      countStages[lastI].doing += 1;
      countStages[lastI].try   += 1;
    }
    countStages.some((stage, index) => {
      if(index === lastI)
        return true;
      countStages[index].try += 1;
    });
  });

  const failRateStages = countStages.map(
    (count, index) => ({
      index: (index + 1),
      failR: count.doing || count.try
           ? (count.doing / count.try)
           : 0
  }));

  return failRateStages.sort((a, b) => {
    if (a.failR > b.failR) return -1;
    if (a.failR < b.failR) return  1;
    return a.index - b.index;
  })
                       .map(stage => stage.index);
}
