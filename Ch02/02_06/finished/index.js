const { createWriteStream } = require('fs');

const writeStream = createWriteStream('./file.txt');

// Pipe method also handle backpressure

process.stdin.pipe(writeStream);

// open cmd write text it will continue stream words to file and saved