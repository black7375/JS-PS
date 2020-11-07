function findRoot(roots, w) {
  const rootV = roots[w];

  if(rootV === w) return w;
  else return roots[w] = findRoot(roots, rootV);
}

function getConnects(infos, i) {
  const connects = [];
  const infosL = infos.length;

  for(let j = 0; j < infosL; j++) {
    if(i !== j && infos[j] === 1) connects.push(j);
  }
  return connects;
}

function solution(n, computers) {
  const roots = Array.from(Array(n).keys());

  for(let i = 0; i < n; i++) {
    const connects = getConnects(computers[i], i);
    const rootI = findRoot(roots, i);

    for(const v of connects) {
      const rootV = findRoot(roots, v);
      if(rootI !== rootV) {
        roots[v]     = i;
        roots[rootV] = i;
      }
    }
  }

  const reRoots = roots.map((_, i) => findRoot(roots, i));
  return new Set(reRoots).size;
}
