const fs = require("fs");
import { fileExists } from "./fileExists";

export const deleteFile = (filename: string): Promise<boolean> =>
  new Promise((resolve, reject) => {
    fileExists(filename).then((isExist: boolean) =>
      isExist
        ? resolve(true)
        : fs.unlink(filename, (err: Error) => {
            if (!err) resolve(true);
            else {
              console.log(err);
              reject(false);
            }
          })
    );
  });
