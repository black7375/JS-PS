function solution(arrangement) {
  let   flag  = false;
  const depth = [];
  const pushB = '(';

  return arrangement.split('')
                    .reduce((count, brace) => {
                      if( brace === pushB ) {
                        flag = true;
                        depth.push(true);
                        return count;
                      } else {
                        depth.pop();

                        if (flag) {
                          flag = false;
                          return depth.length + count;
                        }
                        else {
                          return count + 1;
                        }
                      }
                    }, 0);
}
