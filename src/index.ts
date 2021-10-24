import fs from 'fs';
import { main } from './lib/main';
import express, { Request, Response } from 'express';

function mane(num: number | undefined): number {
  return num ? num * 12 : 0;
}

if (!fs.existsSync('./img')) {
  fs.mkdirSync('./img');
}

console.log('mane -> ', mane(9));

console.log('hello');

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.json(main.hello({ name: 'Galt' }));
});

app.listen(4000, () => {
  console.log('Running on Port :>> ', 4000);
});
