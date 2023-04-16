const uncompress = (s) => {
  const numbers = "0123456789";
  let i = 0;
  let j = 0;
  const out = [];

  while (j < s.length) {
    if (numbers.includes(s[j])) {
      j++;
    } else {
      const num = Number(s.slice(i, j));
      for (let i = 0; i < num; i++) {
        out.push(s[j]);
      }
      j++;
      i = j;
    }
  }
  return out.join("");
};
