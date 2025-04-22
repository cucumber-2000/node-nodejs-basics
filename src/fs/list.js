import fs from 'fs/promises'
import { isFolderExist } from './utils.js';

import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pathFolder = path.join(__dirname, 'files')

const list = async () => {
  try {
    const folderExist = await isFolderExist(pathFolder)
    if (!folderExist) {
      throw new Error('FS operation failed')
    }

    const folderContent = await fs.readdir(pathFolder)
    console.log(folderContent);
    
  } catch (err) {
    console.log(err.message);
  }
};

await list();