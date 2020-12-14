const fs = require("fs");

export const appendFile = (filename: string, data: any): Promise<any> =>
  new Promise((resolve, reject) => {
    fs.appendFile(filename, data, "utf8", (err: Error) => {
      if (!err) resolve(data);
      else {
        console.log("#appendFile.ts:08 -> ", err);
        reject(undefined);
      }
    });
  });
