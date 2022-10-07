const fs = require('fs')

const data = fs.readFileSync('./txt/input.txt', 'utf-8')
console.log(data);
console.log('waiting');

const text = `${data} i am adarsh shahi. \n Created on ${Date.now()}`

fs.writeFileSync('./txt/output.txt',text)
console.log(`Done`);


// console.log(fs);