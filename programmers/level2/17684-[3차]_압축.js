function alphabetI() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return alphabet.split('')
                 .map((char, index) => [char, index + 1]);
}

function lzw(msg, i, dic, size = 1, result = 0) {
  const str = msg.substr(i, size);
  if(size !== str.length) return result;

  const idx = dic.get(str);
  if(idx === undefined) {
    dic.set(str, dic.size + 1);
    return result;
  }
  else {
    return lzw(msg, i, dic, size + 1, [idx, size]);
  }
}

function solution(msg) {
  const dic  = new Map(alphabetI());
  const idx  = [];
  const msgL = msg.length;
  for(let i = 0; i < msgL; i++) {
    const [lzwI, size] = lzw(msg, i, dic);
    idx.push(lzwI);
    i += size - 1;
  }
  return idx;
}
