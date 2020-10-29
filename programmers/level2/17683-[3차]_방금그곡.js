function melodySplit(m) {
  const mRegExp = new RegExp(/[CDEFGAB]#?/g);
  return [...m.matchAll(mRegExp)].map(arr => arr[0]);
}

function getTime(timeS) {
  return timeS.split(':').map(s => parseInt(s));
}

function playTime(start, end) {
  const [sH, sM] = getTime(start);
  const [eH, eM] = getTime(end);

  const hDiffer = (eH - sH) * 60;
  const mDiffer = eM - sM;
  return hDiffer + mDiffer;
}
function playMelody(time, melody) {
  const melodyL = melody.length;
  const pMelody = melody.slice(0, time);
  if(time <= melodyL) return pMelody;
  else return pMelody.concat(playMelody(time - melodyL, melody));
}

function satisfiedCheck(infoM, m) {
  const mI    = infoM.indexOf(m);
  if(mI === -1) return false;

  const nextM = infoM.slice(mI + m.length);
  if(nextM === '' ||
     nextM[0] !== "#") return true;
  return satisfiedCheck(nextM, m);
}
function satisfiedI(satisfied) {
  const times   = satisfied.map(info => info[0]);
  const maxTime = Math.max(...times);
  return times.indexOf(maxTime);
}

function solution(m, musicinfos) {
  const infos  = musicinfos.map(info => {
    const infoArr = info.split(',');

    const infoP = playTime(infoArr[0], infoArr[1]);
    const infoT = infoArr[2];
    const infoS = melodySplit(infoArr[3]);

    const infoM = playMelody(infoP, infoS).join('');
    return [infoP, infoT, infoM];
  }); // PlayTime Title PlayMelody

  const satisfied = [];
  for(const [infoP, infoT, infoM] of infos) {
    if(satisfiedCheck(infoM, m)) satisfied.push([infoP, infoT]);
  }

  return satisfied.length === 0
       ?  "(None)"
       : satisfied[satisfiedI(satisfied)][1];
}
