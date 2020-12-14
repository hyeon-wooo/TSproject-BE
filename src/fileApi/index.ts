import { fileExists as f } from "./fileExists";
import { makeDir as m } from "./makeDir";
import { rmDir as r } from "./rmDir";
import { writeFile as w } from "./writeFile";
import { deleteFile as d } from "./deleteFile";
import { readFile as rf } from "./readFile";
import { appendFile as a } from "./appendFile";
import { readFileGen as rg } from "./readFileGen";

export default {
  fileExists: f,
  makeDir: m,
  rmDir: r,
  writeFile: w,
  deleteFile: d,
  readFile: rf,
  appendFile: a,
  readFileGen: rg,
};
export const fileExists = f;
export const makeDir = m;
export const rmDir = r;
export const writeFile = w;
export const deleteFile = d;
export const readFile = rf;
export const appendFile = a;
export const readFileGen = rg;
