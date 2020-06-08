function solution(participant, completion) {
  let answer = "";
  const _participant = [...participant].sort();
  const _completion  = [...completion].sort();

  for(let i = 0; i < _completion.length; i++) {
    if(_participant[i] !== _completion[i]) {
      answer = _participant[i];
      break;
    }
  }
  if(answer === "") {
    answer = _participant[_participant.length - 1];
  }

  return answer;
}
