var delay = (seconds, callback) => {
    if (seconds > 3) {
        callback(new Error(`${seconds} seconds it too long!`));
    } else {
        setTimeout(() =>
            callback(null, `the ${seconds} second delay is over.`),
            seconds
        );
    }
}

delay(2, (error, message) => {
    if (error) {
        console.log(error.message);
    } else {
        console.log(message);
    }
});
