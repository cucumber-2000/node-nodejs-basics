import fs from 'fs/promises'
import { isFileExist } from './utils.js';

import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.join(__dirname, 'files', 'wrongFilename.txt')
const newFilePath = path.join(__dirname, 'files', 'properFilename.md')

const rename = async () => {
  try {
    const fileExist = await isFileExist(filePath)
    const newFileExist = await isFileExist(newFilePath)
    if (!fileExist || newFileExist) {
      throw new Error('FS operation failed')
    }
    await fs.rename(filePath, newFilePath)
  } catch (err) {
    console.log(err.message);
  }
};

await rename();