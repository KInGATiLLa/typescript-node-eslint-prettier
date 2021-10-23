import * as fs from 'fs';

function mane(num: number) {
  return num * 12;
}

if (!fs.existsSync('./img')) {
  fs.mkdirSync('./img');
}

console.log('hello');