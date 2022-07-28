const { createReadStream, createWriteStream } = require('fs');

// Manual Pipeline
// Handling stream when it flow at higher rate == BAckpressure

const readStream = createReadStream('./powder-day.mp4');
const writeStream = createWriteStream('./copy.mp4', {
    // Controlling how much data can be following through the stream
    // highWaterMark: 1628920
});

readStream.on('data', (chunk) => {
    const result = writeStream.write(chunk);
    if (!result) {
       console.log('backpressure')
       readStream.pause();
    }
});

readStream.on('error', (error) => {
    console.log('an error occurred', error.message);
});

readStream.on('end', () => {
    writeStream.end();
});

writeStream.on('drain', () => {
    console.log('drained');
    readStream.resume();
})

writeStream.on('close', () => {
    process.stdout.write('file copied\n');
})
