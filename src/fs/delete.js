import fs from 'fs/promises'
import { isFileExist } from './utils.js';

import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const filePath = path.join(__dirname, 'files', 'fileToRemove.txt')

const remove = async () => {
  try {
    const fileExist = await isFileExist(filePath)
    if (!fileExist) {
      throw new Error('FS operation failed')
    }
    await fs.unlink(filePath)
  } catch (err) {
    console.log(err.message);
  }
};

await remove();