import * as fs from 'fs';
import express, { Request, Response } from 'express';

function mane(num: number | undefined) {
  return num ? num * 12 : 0;
}

if (!fs.existsSync('./img')) {
  fs.mkdirSync('./img');
}

console.log('mane -> ', mane(9));

console.log('hello');

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.end('Hello world');
});

app.listen(4000, () => {
  console.log('Running on Port :>> ', 4000);
});
