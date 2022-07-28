function delay(seconds, callback) {
    setTimeout(callback, seconds*1000);
}

delay(1, () => {
    console.log('one second');
})

console.log('end first tick');
