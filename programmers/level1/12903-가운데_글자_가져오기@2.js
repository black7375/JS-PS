function solution(s) {
  const middle = s.length / 2;

  return s.substr(Math.ceil(middle) - 1,
                  Number.isInteger(middle)
                ? 2
                : 1);
}
