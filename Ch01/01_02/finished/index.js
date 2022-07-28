var delay = (seconds) => new Promise((resolves, rejects) => {
    setTimeout(() => {
        resolves('the long delay has ended')
    }, seconds);
});

delay(1)
  .then(console.log)
  .then(() => 42)
  .then((number) => console.log(`Hello world: ${number}`))

console.log('end first tick');
