function logProcessing(log) {
  const [responseDate, responseTime, processingTime] = log.split(' ');
  const [hour, minute, second] = responseTime.split(':').map(s => Number(s));
  const processingSecond = Number( processingTime.slice(0, processingTime.length - 1) );

  const endTime   = (hour * 3600) + (minute * 60) + second;
  const startTime = Number((endTime - processingSecond).toFixed(3));
  return [startTime, endTime];
}

function getLimit(time) {
  const creta = 0.999;
  return [time - creta, time + creta];
}

function checkDuring(startA, endA, startB, endB) {
  return startA <= endB && endA > startB;
}

function solution(lines) {
  const times = lines.map(logProcessing);
  return times.reduce((count, time, index) => {
    const [startTime,   endTime   ] = time;
    const [startBefore, startAfter] = getLimit(startTime);
    const [endBefore,   endAfter  ] = getLimit(endTime);

    const checkTargets = times.slice(index + 1);
    const startBDuring = checkTargets.filter(otherTime => checkDuring(startBefore, startTime,  otherTime[0], otherTime[1]));
    const startADuring = checkTargets.filter(otherTime => checkDuring(startTime,   startAfter, otherTime[0], otherTime[1]));
    const endBDuring   = checkTargets.filter(otherTime => checkDuring(endBefore,   endTime,    otherTime[0], otherTime[1]));
    const endADuring   = checkTargets.filter(otherTime => checkDuring(endTime,     endAfter,   otherTime[0], otherTime[1]));
    return Math.max(count, startBDuring.length + 1, startADuring.length + 1,
                           endBDuring.length   + 1, endADuring.length   + 1);
  }, 1);
}
