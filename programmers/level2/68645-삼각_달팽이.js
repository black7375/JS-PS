function initArray(n, acc = 0) {
  if(n === 1) return acc + 1;
  else return initArray(n - 1, acc + n);
}

function fillArray(n, array, index = 0, order = 1, depth = 0) {
  if(n < 1) return array;

  // Down
  const correction = 2 * depth;
  for(let i = 0; i < n; i++) {
    index += (i == 0) ? i : (i + correction);
    if(array[index] !== undefined) return array;

    array[index] = order;
    order++;
  }

  // Right
  const rightCount = (n - 1);
  for(let i = 0; i < rightCount; i++) {
    index++;
    if(array[index] !== undefined) return array;

    array[index] = order;
    order++;
  }

  // Up
  // n - 2번. n, n - 1, n - 2, n - 3 순.
  for(let i = n; i > 2; i--) {
    index -= (i + correction);
    if(array[index] !== undefined) return array;

    array[index] = order;
    order++;
  }

  index += (correction + 2);
  return fillArray(n - 3, array, index, order, depth + 1);
}

function solution(n) {
  const answer = new Array( initArray(n) );
  return fillArray(n, answer);
}
