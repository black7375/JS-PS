function mergeRegExp(...regexps) {
  return new RegExp("(" +
                    regexps.map(regexp => regexp.source)
                           .join('|') +
                    ")"
  );
}

function domainN(domain) {
  switch(domain) {
    case 'S': return 1;
    case 'D': return 2;
    case 'T': return 3;
  }
}

function optionScore(answer, option) {
  const last = answer.length - 1;
  if (option === '*') {
    answer[last] *= 2;
    if(answer[last - 1] !== undefined)
      answer[last - 1] *= 2;
  } else {
    answer[last] *= -1;
  }
}

function solution(dartResult) {
  const score  = /\d{2}|\d{1}/;
  const domain = /[SDT]/;
  const option = /[*#]/;
  const regexp = mergeRegExp(score, domain, option);
  const tokenR = dartResult.split(regexp).filter(char => char);
  const answer = [];

  tokenR.forEach((exp, index) => {
    if (score.test(exp))
      answer.push(Number(exp));

    if (domain.test(exp))
      answer[answer.length - 1] **= domainN(exp);

    if (option.test(exp))
      optionScore(answer, exp);
  });

  return answer.reduce((a, b) => a + b);
}
