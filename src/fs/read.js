import fs from 'fs/promises'

import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import { isFileExist } from './utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.join(__dirname, 'files', 'fileToRead.txt')

const read = async () => {
  try {
    const fileExist = await isFileExist(filePath)

    if (!fileExist) {
      throw new Error('FS operation failed')
    }

    const fileContent = await fs.readFile(filePath, { encoding: 'utf8' })
    console.log(fileContent);
  } catch (err) {
    console.log(err.message);
  }
};

await read();