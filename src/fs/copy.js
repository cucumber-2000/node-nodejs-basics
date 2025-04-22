import fs from 'fs/promises'
import { isFolderExist } from './utils.js';

import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const srcFolder = path.join(__dirname, 'files')
const distFolder = path.join(__dirname, 'files_copy')



const copy = async () => {
  try {
    const srcExist = await isFolderExist(srcFolder)
    const distExist = await isFolderExist(distFolder)
    if (!srcExist || distExist) {
      throw new Error('FS operation failed')
    }
    await fs.cp(srcFolder, distFolder, { recursive: true })
  } catch (err) {
    console.log(err.message);
  }
};


await copy();
