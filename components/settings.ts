import fs, { PathOrFileDescriptor } from 'fs'

export async function getSettings(): Promise<any> {
  const settings = await readJsonFile('./settings.json')

  return settings
}

function readJsonFile(fileName: PathOrFileDescriptor) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', function(err, data){
      if (err) {
        reject(err)
        return
      }

      const json = JSON.parse(data);

      resolve(json);
    });
  });
}