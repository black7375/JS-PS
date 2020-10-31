// 문제가 이상함.. 최소값이 아냐;;;; TestCase 11
// 이건 최소값을 구하는 방법.
function alphabetControl(char) {
  const ascii     = char.charCodeAt(0);
  const alphabet  = 26;
  const Zcode     = 90;

  return Math.min( Math.abs(ascii - Zcode - 1),
                   Math.abs(Zcode - ascii - alphabet + 1) );
}

function indexCorrect(index, count) {
  return Math.max(0, index > count
                           ? 0
                           : index);
}

function indexRange(converted) {
  const AChange = 0;
  const count = converted.length - 1;
  const lastI   = count - converted.slice()
                                   .reverse()
                                   .findIndex(change => change !== AChange);
  const firstI  = converted.findIndex((change, index) => index > 0 && change !== AChange);
  return [firstI, lastI];
}

function turnedN(converted) {
  const convertedL = converted.length;
  const rangeL     = Math.ceil(convertedL / 2);
  const boundaryL  = convertedL - rangeL;

  const generalA   = converted.slice(0, boundaryL);
  const doubleA    = converted.slice(boundaryL);

  const [firstGI, lastGI] = indexRange(generalA);
  const [firstFI, lastFI] = indexRange(doubleA );
  const generalN = indexCorrect(lastGI, boundaryL - 1);
  const doubleN  = (rangeL - indexCorrect(firstFI, rangeL - 1)) * 2;
  return generalN + doubleN;
}

function cursorControl(converted) {
  const count   = converted.length - 1;
  const [firstI, lastI] = indexRange(converted);

  const forwardN = indexCorrect(lastI, count);
  const reverseN = indexCorrect((count + 1) - firstI, count);
  const turnN    = turnedN(converted);
  return Math.min(forwardN, reverseN, turnN);
}

function solution(name) {
  const converted = name.split('')
                        .map(alphabetControl);
  const alphabetN = converted.reduce((a, b) => a + b);
  const cursorN   = cursorControl(converted);
  return alphabetN + cursorN;
}
