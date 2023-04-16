const compress = (s) => {
  let i = 0;
  let j = 0;
  let out = [];

  while (j <= s.length) {
    if (s[i] === s[j]) {
      j++;
    } else {
      if (j - i === 1) {
        out.push(s[i]);
      } else {
        out.push(j - i, s[i]);
      }
      i = j;
    }
  }

  return out.join("");
};
