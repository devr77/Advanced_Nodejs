var delay = (seconds) => new Promise((resolves) => {
    setTimeout(resolves, seconds*1000);
});

var tasks = [
  delay(4),
  delay(6),
  delay(4),
  delay(3),
  delay(5),
  delay(7),
  delay(9),
  delay(10),
  delay(3),
  delay(5)
];
