process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  const a = data.split(" ");
  const n = Number(a[0]);
  const m = Number(a[1]);

  const line = "*".repeat(n);
  const rect = (line + "\n").repeat(m);
  console.log(rect);
});
