import fs, { PathOrFileDescriptor, PathLike } from 'fs'

export default {
  readFile(fileName: PathOrFileDescriptor) : Promise<string> {
    return new Promise((resolve, reject) => {
      fs.readFile(fileName, 'utf8', function(err, data){
        if (err) {
          reject(err)
          return
        }
  
        resolve(data);
      });
    });
  },

  readDir(path: PathLike) : Promise<string[]> {
    return new Promise((resolve, reject) => {
      fs.readdir(path, function(err, data){
        if (err) {
          reject(err)
          return
        }
  
        resolve(data);
      });
    });
  },

  async readJsonFile(fileName: PathOrFileDescriptor) {
    const data = await this.readFile(fileName);
    const json = JSON.parse(data);
    return json;
  }
}