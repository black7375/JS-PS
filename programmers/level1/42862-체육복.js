function lostFilter(lost, reserve, findT) {
  const filterT = { me: true, friend: false };

  return lost.filter(lostN => {
    const existI = reserve.findIndex(reserveN => filterT[findT]
                                               ? reserveN === lostN
                                               : Math.abs(reserveN - lostN) <= 1);
    if(existI === -1) return true;
    reserve.splice(existI, 1);
  });
}

function solution(n, lost, reserve) {
  const selfLost = lostFilter(lost,     reserve, 'me'    );
  const realLost = lostFilter(selfLost, reserve, 'friend');

  return n - realLost.length;
}
