/* File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```
*/

const fs = require('fs');

const initString = 'hello     world    my    name   is       raman';
let outString = ''

fs.writeFile('./testFile.txt', initString, (err) => {
    console.log('Created dummy test file - testFile.txt');
})

fs.readFile('./testFile.txt', 'utf-8', (err, data) => {
    console.log(`Before \n ${data}`)
    outString = data.replace(/\s+/g, ' ')
})

setTimeout(()=> {
    fs.writeFile('./testFile.txt', outString, (err) => {
    console.log('Writing to dummy test file - testFile.txt');
    console.log(`After \n ${outString}`);
})
},50)
