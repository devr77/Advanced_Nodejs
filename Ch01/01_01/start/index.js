// function hideString(str) {
//     return str.replace(/[a-zA-Z]/g, 'X');
// }

// var hidden = hideString("Hello World");

// console.log( hidden );
// console.log("End");

// --------------------------------------------------------------------

// function hideString(str,done) {
//     process.nextTick(() => {
//         done(str.replace(/[a-zA-Z]/g, 'X'));
//     });
// }

// hideString("hello World",(hidden) => {
//     console.log(hidden);
// })

// console.log("End");