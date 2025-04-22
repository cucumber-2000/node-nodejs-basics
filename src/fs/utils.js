import fs from 'fs/promises'

export const isFileExist = async (path) => {
  try {
    await fs.access(path)
    return true
  } catch (err) {
    return false
  }
}

export const isFolderExist = async (path) => {
  try {
    const stats = await fs.stat(path)
    return stats.isDirectory()
  } catch (err) {
    return false
  }
}