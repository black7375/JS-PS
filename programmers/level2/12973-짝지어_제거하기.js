function solution(s) {
  const pair =  s.split('')
                 .reduce((acc, char) => {
                   const accL = acc.length;
                   if(accL === 0) acc.push(char);
                   else {
                     const prevChar = acc[accL - 1];

                     if(prevChar === char) acc.pop();
                     else                  acc.push(char);
                   }
                   return acc;
                 }, []);
  return pair.length === 0 ? 1 : 0;
}
