function solution(progresses, speeds) {
  let   recent  = 0;
  const publish = [];
  progresses.forEach((w, i) => {
    const worked = Math.ceil((100 - w) / speeds[i]);

    if (worked > recent) {
      recent = worked;
      publish.push(1);
    } else {
      publish[publish.length - 1] += 1;
    }
  });
  return publish;
}
