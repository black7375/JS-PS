function findRoot(roots, w) {
  const rootV = roots[w][0];

  if(rootV === w) return w;
  else return findRoot(roots, rootV);
}

function union(roots, x, y, cost) {
  const xRoot = findRoot(roots, x);
  const yRoot = findRoot(roots, y);

  if(xRoot === yRoot) return;
  roots[yRoot] = [xRoot, cost];
}

function solution(n, costs) {
  const roots  = new Array(n).fill(0).map((cost, i) => [i, cost]);
  const sorted = costs.sort((connectA, connectB) => connectA[2] - connectB[2]);

  for(const [start, end, cost] of sorted) {
    union(roots, start, end, cost);
  }
  return roots.reduce((acc, root) => acc + root[1], 0);
}
