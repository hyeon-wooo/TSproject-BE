import { fileExists } from "./fileExists";
import mkdirp from "mkdirp";

export const makeDir = (dir: string): Promise<boolean> =>
  new Promise(async (resolve, reject) => {
    const isAlready = await fileExists(dir);
    isAlready
      ? resolve(true)
      : mkdirp(dir)
          .then(() => resolve(true))
          .catch((err) => {
            console.log(err);
            reject(false);
          });
  });
