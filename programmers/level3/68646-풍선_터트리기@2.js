// 재귀방식으로 런타임 에러뜨는 코드.

function slice(a, i) {
  const before = a.slice(0, i);
  const target = a.slice(i, i + 2);
  const after  = a.slice(i + 2);
  return [before, target, after];
}

function minArr(a) {
  const aL = a.length;
  if(aL === 0) return [];

  let min = Infinity;
  for(let i = 0; i < aL; i++) {
    const val = a[i];
    min = min > val ? val : min;
  }
  return [min];
}

function checkBig(minBefore, min, minAfter) {
  const mBL = minBefore.length;
  const mAL = minAfter.length;

  if(mBL === 0 || mAL === 0) return false;
  return (min > minBefore[0] && min > minAfter[0]);
}

function bPop(a, set) {
  if(a.length <= 3) {
    for(const val of a) {
      set.add(val);
    }
    return;
  }

  const maxCase = a.length - 1;
  let   minBefore = [];
  for(let i = 0; i < maxCase; i++) {
    const [before, target, after] = slice(a, i);
    const big = target[0] > target[1];
    const min = big ? target[1] : target[0];
    const max = big ? target[0] : target[1];

    if(i === 1)        minBefore = before;
    else if(i !== 0) minBefore = [minBefore[0] > before[i] ? before[i] : minBefore[0]];
    const minAfter  = minArr(after);

    const doPop = minBefore.concat(max, minAfter);
    const noPop = minBefore.concat(min, after   );
    set.add(minArr(doPop)[0]);

    if(checkBig(minBefore, min, minAfter)) set.add(minArr(noPop)[0]);
    else bPop(noPop, set);
  }
}

function solution(a) {
  const result = new Set();
  bPop(a, result);
  return result.size;
}
