//import gendiff from '../index.js' //(импортируем из корневой папки index.js)
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from "fs";
import path from 'path';
import data11 from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (fixtureFilename) => path.join(__dirname, '..', '__fixtures__', fixtureFilename);
const readFile = (fixtureFilename) => fs.readFileSync(getFixturePath(fixtureFilename), 'utf-8');


test('Сomparison of two files', () => {
    expect(data11(getFixturePath('file1.json'), getFixturePath('file2.json'))).toEqual(readFile('result.txt'));
    
})
