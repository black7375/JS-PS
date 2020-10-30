function splitName(file) {
  const numReg  = new RegExp(/([0-9]+)/);
  const fileArr = file.split(numReg);
  return [fileArr[0], fileArr[1], fileArr.slice(2).join('')];
}

function bool4sort(bool) {
  return bool ? -1 : 0;
}

function solution(files) {
  const splitFiles = files.map(file => splitName(file));
  return splitFiles.sort((aFile, bFile) => {
    const aHead = aFile[0].toLowerCase();
    const bHead = bFile[0].toLowerCase();
    if(aHead === bHead) {
      const aNumber = parseInt(aFile[1]);
      const bNumber = parseInt(bFile[1]);
      return bool4sort(aNumber < bNumber);
    }
    return bool4sort(aHead < bHead);
  })
                   .map(file => file.join(''));
}
