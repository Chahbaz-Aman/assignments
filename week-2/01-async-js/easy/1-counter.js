/* Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second */

const process = require('node:process');

let startTime = Date.now();
let seconds = 0;
function getTimeString(seconds) {
    let hrs = Math.floor(seconds/3600);
    let min = Math.floor(seconds/60);
    let sec = seconds%60
    return `${hrs<10?'0':''}${hrs}:${min<10?'0':''}${min}:${sec<10?'0':''}${sec}`
}
while (true) {
    if (Date.now() - startTime > 1000) {
        startTime = Date.now();
        process.stdout.write(` ${getTimeString(seconds++)}\r`);
    }
}