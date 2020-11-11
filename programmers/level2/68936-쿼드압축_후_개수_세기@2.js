// This is concept. not work

// State Info
// 0 => all 0
// 1 => all 1
// 2 => not all same
function createInfo(state, count) {
  return {state: state, count: count};
}

function convertInfo(row) {
  const converted = [];
  for(const val of row) {
    const zero  = (val === 0);
    const count = zero
                ? [1, 0]
                : [0, 1];
    converted.push(zero
                 ? createInfo(0, count)
                 : createInfo(1, count));
  }
  return converted;
}

function quadCompression(arr, pos, size) {
  const x = pos[0];
  const y = pos[1];

  const quad1 = arr[x       ][y       ];
  const quad2 = arr[x + size][y       ];
  const quad3 = arr[x       ][y + size];
  const quad4 = arr[x + size][y + size];

  const quad = [quad1, quad2, quad3, quad4];
  const sum  = quad.reduce((acc, cur) => acc + cur.state, 0);
  if(sum === 0 || sum === 4) {
    return quad1;
  }
  else if(sum === 4) {
    return quad1;
  }
  else {
    const count = quad.reduce((acc, cur) => {
      const curC = cur.count;
      return [acc[0] + curC[0],
              acc[1] + curC[1]];
    }, [0, 0]);
    return createInfo(2, count);
  }
}

function solution(arr) {
  const arrL = arr.length;
  const converted = Array.from(arr, convertInfo);

  for(let interval = 2; interval <= arrL; interval *= 2) {
    for(let y = 0; y < arrL; y += interval) {
      for(let x = 0; x < arrL; x += interval) {
        const compressed = quadCompression(converted, pos, interval / 2);
        converted[x][y]  = compressed;
      }
    }
  }

  const answer = converted[0][0].count;
  return answer;
}
