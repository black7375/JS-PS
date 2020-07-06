function solution(clothes) {
  const clothesO = clothes.reduce((obj, item) => {
    const kind = item[1];
    const num  = obj[kind];
    obj[kind] = num === undefined ? 1 : num + 1;
    return obj;
  }, {});

  return Object.values(clothesO)
               .reduce((acc, num) => acc * (num + 1), 1) - 1;
}
