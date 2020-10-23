function posW(number) {
  const LastKey = ["*", 0, "#"];
  const lastKeyI = LastKey.indexOf(number);
  if(lastKeyI !== -1) return lastKeyI;

  const remainder = (number % 3) - 1;
  if(remainder === -1) return 2;
  else                 return remainder;
}
function posH(number) {
  const LastKey = ["*", 0, "#"];
  if(LastKey.includes(number)) return 3;

  return Math.floor((number - 1) / 3);
}

function distance(prevN, nextN) {
  const prevW = posW(prevN);
  const nextW = posW(nextN);

  const prevH = posH(prevN);
  const nextH = posH(nextN);

  const distanceW = Math.abs(prevW - nextW);
  const distanceH = Math.abs(prevH - nextH);
  return distanceW + distanceH;
}

function solution(numbers, hand) {
  const checkA = [2, 5, 8, 0];
  const left   = (hand == "left");
  let leftN    = "*";
  let rightN   = "#";
  let answer   = "";

  for(const number of numbers) {
    if(checkA.includes(number)) {
      const leftD  = distance(leftN,  number);
      const rightD = distance(rightN, number);

      if(leftD === rightD)    numberUpdate(left, number);
      else if(leftD < rightD) leftUpdate(number);
      else                   rightUpdate(number);
    }
    else {
      const remainder = number % 3;
      const leftCond  = remainder === 1; // right: 0
      numberUpdate(leftCond, number);
    }
  }

  function numberUpdate(leftCond, number) {
    if(leftCond)  leftUpdate(number);
    else         rightUpdate(number);
  }
  function leftUpdate(number) {
    answer += "L";
    leftN   = number;
  }
  function rightUpdate(number) {
    answer += "R";
    rightN  = number;
  }
  return answer;
}
