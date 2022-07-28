const { createReadStream, createWriteStream } = require('fs');

const readStream = createReadStream('../../powder-day.mp4')
const writeStream = createWriteStream('./copy.mp4');

readStream.pipe(writeStream);
