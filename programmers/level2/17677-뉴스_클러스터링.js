function tokenize(str) {
  const converted  = str.toLowerCase();
  const convertedL = converted.length - 1;
  const regexp     = new RegExp(/[^a-z]/g);
  const result     = [];

  for(let i = 0; i < convertedL; i++) {
    const element = converted.substr(i, 2);
    if(element.search(regexp) === -1) result.push(element);
  }
  return result;
}

function toSet(tokens1, tokens2) {
  const inter = [];
  const union = [];

  for(const element of tokens1) {
    const tokens2I = tokens2.indexOf(element);
    if(tokens2I !== -1) {
      tokens2.splice(tokens2I, 1); // Remove at tokens2
      inter.push(element);
    }

    union.push(element);
  }

  for(const element of tokens2) {
    union.push(element);
  }

  return [inter, union];
}

function jaccard(strInter, strUnion) {
  const strInterL = strInter.length;
  const strUnionL = strUnion.length;

  if(strUnionL === 0) return 1;
  else return strInterL / strUnionL;
}

function solution(str1, str2) {
  const str1T = tokenize(str1);
  const str2T = tokenize(str2);

  const [inter, union] = toSet(str1T, str2T);

  const jaccardN = jaccard(inter, union);
  return Math.floor(jaccardN * 65536);
}
