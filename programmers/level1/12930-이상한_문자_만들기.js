function solution(s) {
  let flag = false;
  return s.split('')
          .map((char, index) => {
            if(char === ' ') {
              flag = false;
              return char;
            }

            flag = !flag;
            return flag
                 ? char.toUpperCase()
                 : char.toLowerCase();
          })
          .join('');
}
