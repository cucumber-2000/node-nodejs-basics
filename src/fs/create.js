import fs from 'fs/promises'
import { isFileExist } from './utils.js';

import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const message = 'I am fresh and young'
const filePath = path.join(__dirname, 'files', 'fresh.txt')

const create = async () => {
  try {
    const filePathExist = await isFileExist(filePath)
    
    if (filePathExist) {
      throw new Error('FS operation failed')
    }
    await fs.writeFile(filePath, message)
  } catch (err) {
    console.log(err.message);
  }
};

await create();