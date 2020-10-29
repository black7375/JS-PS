function getInfo(log) {
  const logArr = log.split(' ');
  const cmd    = logArr[0];
  return [logArr, cmd];
}

function solution(record) {
  const ENTER  = "Enter";
  const LEAVE  = "Leave";
  const CHANGE = "Change";

  const users   = new Map();
  for(const log of record) {
    const [logArr, cmd] = getInfo(log);

    if(cmd === ENTER || cmd === CHANGE) {
      const uid  = logArr[1];
      const nick = logArr[2];

      const info = users.get(uid);
      users.set(uid, nick);
    }
  }

  const answer = [];
  for(const log of record) {
    const [logArr, cmd] = getInfo(log);
    const uid = logArr[1];

    const nick = users.get(uid);
    switch(cmd) {
      case ENTER:
        answer.push( nick + "님이 들어왔습니다." );
        break;
      case LEAVE:
        answer.push( nick + "님이 나갔습니다." );
        break;
    }
  }
  return answer;
}
