function solution(array, commands) {
  const answer = [];
  for(const command of commands) {
    const value = array.slice(command[0]-1,command[1])
                       .sort((a,b) => a-b)
                       [command[2]-1];

    answer.push(value);
  }
  return answer;
}
