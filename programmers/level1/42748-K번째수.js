function solution(array, commands) {
  return commands.map(command => {
    const start = command[0] - 1;
    const end   = command[1];
    const pick  = command[2] - 1;

    return array.slice(start, end)
                .sort((a, b) => a - b)
                [pick];
  });
}
