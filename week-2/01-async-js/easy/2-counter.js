/* Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck. */

const process = require('node:process');

let seconds = 0;

function getTimeString(seconds) {
    let hrs = Math.floor(seconds/3600);
    let min = Math.floor(seconds/60);
    let sec = seconds%60
    return `${hrs<10?'0':''}${hrs}:${min<10?'0':''}${min}:${sec<10?'0':''}${sec}`
}

function counter() {
    process.stdout.write(` ${getTimeString(seconds++)}\r`);
    setTimeout(counter, 1000);
}

counter();