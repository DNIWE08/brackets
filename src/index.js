module.exports = function check(str, bracketsConfig) {
  let cfg = bracketsConfig.map(el => {
    return el.join("");
  })

  for (let j = 0; j < cfg.length; j++) {
    if (str.includes(cfg[j])) {
      str = str.replace(cfg[j], '')
      j = -1;
    }
  }
  return str === '';
}
