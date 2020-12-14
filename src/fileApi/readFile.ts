const fs = require("fs");

export const readFile = (filename: string): Promise<any> =>
  new Promise((resolve, reject) => {
    fs.readFile(filename, "utf8", (err: Error, data: any) => {
      if (!err) resolve(data);
      else {
        console.log("#readFile.ts -> ", err);
        reject(undefined);
      }
    });
  });
