function solution(participant, completion) {
  const hashed = completion.reduce((hashed, value) => {
    hashed[value] = hashed[value]
                  ? hashed[value] + 1
                  : 1;
    return hashed;
  }, []);

  return participant.find((value) => {
    if(hashed[value])
      hashed[value] = hashed[value] - 1;
    else
      return true;
  });
}
