function collazCount(num, count) {
  if(count >= 500) {
    return -1;
  }

  if(num === 1) {
    return count;
  } else {
    return collazCount((num % 2)
                     ? (num * 3) + 1
                     : num / 2
                     , ++count);
  }
}

function solution(num) {
  return collazCount(num, 0);
}
