function first(index) {
  const remain = index % 5;
  return remain === 0
       ? 5
       : remain;
}

function second(index) {
  if( (index % 2) === 0 ) {
    const remain = (index / 2) % 4;
    if( remain === 0 ) {
      return 5;
    } else {
      return remain === 1
           ? remain
           : remain + 1;
    };
  } else {
    return 2;
  }
}

function third(index) {
  const indexPattern = Math.ceil(index / 2);
  switch(indexPattern % 5) {
    case 1:  return 3;
    case 2:  return 1;
    case 3:  return 2;
    case 4:  return 4;
    default: return 5;
  }
}

function applyCount(answer, expect, callback) {
  if(answer === expect) {
    callback();
  }
}

function countAnswer(index, answer, person) {
  const _index = index + 1;
  applyCount(first(_index),  answer, () => { person[0] += 1; });
  applyCount(second(_index), answer, () => { person[1] += 1; });
  applyCount(third(_index),  answer, () => { person[2] += 1; });
}

function highIndex(person) {
  const highList = [];
  let max = 0;

  person.forEach((count, index) => {
    if(count > max) {
      highList.length = 0;
      highList.push(index + 1);
      max = count;
    }
    else if(count === max) {
      highList.push(index + 1);
    }
  });
  return highList;
}

function solution(answers) {
  const person = [0, 0, 0];
  answers.forEach((answer, index) => {
    countAnswer(index, answer, person);
  });

  return highIndex(person);
}
