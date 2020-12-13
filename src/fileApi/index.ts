import { fileExists as f } from "./fileExists";
import { makeDir as m } from "./makeDir";
import { rmDir as r } from "./rmDir";
import { writeFile as w } from "./writeFile";
import { deleteFile as d } from "./deleteFile";

export default {
  fileExists: f,
  makeDir: m,
  rmDir: r,
  writeFile: w,
  deleteFile: d,
};
export const fileExists = f;
export const makeDir = m;
export const rmDir = r;
export const writeFile = w;
export const deleteFile = d;
