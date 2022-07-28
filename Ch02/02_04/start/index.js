const { createReadStream } = require('fs');
const readStream = createReadStream('../../powder-day.mp4');

readStream.on('data', (chunk) => {
    console.log('size: ', chunk.length);
});

readStream.on('error', (error) => {
    console.log('an error occurred', error.message);
});

readStream.on('end', () => {
    console.log('done!');
});
