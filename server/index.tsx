import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();

const htmlFile = path.join(__dirname, '../build/index.html')
const htmlContent = fs.readFileSync(htmlFile, { encoding: 'utf-8' });

app.use('/public', express.static('build'))

app.get('*', (req, res) => {
  res.send(htmlContent);
});

app.listen(7777);