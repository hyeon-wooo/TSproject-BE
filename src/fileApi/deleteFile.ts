const fs = require("fs");
import { fileExists } from "./fileExists";

export const deleteFile = (filename: string): Promise<boolean> =>
  new Promise((resolve, reject) => {
    fileExists(filename)
      .then((alreadyExist: boolean) =>
        alreadyExist
          ? fs.unlink(filename, (err: Error) => {
              if (!err) resolve(true);
              else {
                console.log(err);
                reject(false);
              }
            })
          : resolve(false)
      )
      .catch((err: Error) => {
        console.log(err);
        reject(false);
      });
  });
