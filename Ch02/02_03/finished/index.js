const fs = require('fs');


const readStream = fs.createReadStream('./powder-day.mp4');

readStream.on('data', (chunk) => {
  console.log('size: ', chunk.length)
});

readStream.on('end', () => {
  console.log('read stream finished');
});

readStream.on('error', (error) => {
  console.log('an error has occured.')
  console.error(error);
});

// Making in non flowing mode
readStream.pause();  

// Asking one bit of a video == Making non Flowing mode
// process.stdin.on('data', (chunk) => {
//   readStream.read();
// });

// Non flowing mode vs Flowing mode 


process.stdin.on('data', (chunk) => {
    if (chunk.toString().trim() === 'finish') {     // If you type finish stream in finished
        readStream.resume();
    }
    readStream.read();
});
