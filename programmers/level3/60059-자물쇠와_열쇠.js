function rotate(key, M) {
  const maxI   = M - 1;
  const result = Array.from( {length: M}, () => Array(M));

  for(let i = 0; i < M; i++)
    for(let j = 0; j < M; j++)
      result[i][j] = key[maxI - j][i];

  return result;
}

function paddingLock(key, lock, M, N) {
  const paddingL = M - 1;

  const emptyRows  = Array.from( {length: paddingL}, () => Array(N + (paddingL * 2)).fill(0));
  const emptyBlock = Array(paddingL).fill(0);

  const middleLock = lock.map(row => emptyBlock.slice(0)
                                               .concat(row, emptyBlock.slice(0)) );
  return emptyRows.concat(middleLock, emptyRows.slice(0));
}

function insertKey(x, y, key, pLock, M) {
  const eachLock = pLock.map(row => row.slice(0));

  for(let i = 0; i < M; i++)
    for(let j = 0; j < M; j++)
      eachLock[y + i][x + j] ^= key[i][j];

  return eachLock;
}

function checkLock(inserted, M, lastI) {
  const firstI = M - 1;
  for(let i = firstI; i <= lastI; i++)
    for(let j = firstI; j <= lastI; j++)
      if(inserted[i][j] === 0) return false;

  return true;
}

function getLock(inserted, M) {
  const startI = M - 1;
  const endI   = inserted.length - M + 1;
  const rows = inserted.slice(startI, endI);
  return rows.map(row => row.slice(startI, endI));
}

function solution(key, lock) {
  const M = key.length;
  const N = lock.length;

  const key2  = rotate(key,  M);
  const key3  = rotate(key2, M);
  const key4  = rotate(key3, M);
  const keys  = [key, key2, key3, key4];
  const pLock = paddingLock(key, lock, M, N);

  const lastI = pLock.length - M;
  for(const eachKey of keys) {
    for(let y = 0; y <= lastI; y++) {
      for(let x = 0; x <= lastI; x++) {
        const inserted = insertKey(x, y, eachKey, pLock, M);
        if(checkLock(inserted, M, lastI)) return true;
      }
    }
  }

  return false;
}
