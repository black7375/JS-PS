function calcAscii(ascii, n, start) {
  return (ascii + n - start) % 26 + start;
}

function caesarCipher(ascii, n) {
  return (ascii >= 97)
       ? calcAscii(ascii, n, 97)
       : calcAscii(ascii, n, 65);
}

function solution(s, n) {
  return s.split('').map(char => {
    if(char === ' ')
      return char;

    const ascii = char.charCodeAt();
    return String.fromCharCode(caesarCipher(ascii, n));
  }).join('');
}
