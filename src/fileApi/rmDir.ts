import rimraf from "rimraf";
import { fileExists } from "./fileExists";

export const rmDir = (dir: string): Promise<boolean> =>
  new Promise(async (resolve, reject) => {
    const isExist = await fileExists(dir);
    !isExist
      ? resolve(true)
      : rimraf(dir, (err) => {
          if (!err) resolve(true);
          else {
            console.log(err);
            reject(false);
          }
        });
  });
