import { IFake, makeFakeData } from "./makeFakeData";
import { makeDir, writeFile, appendFile } from "../fileApi";
import { range } from "../utils/range";
const path = require("path");

const rmKorean = (strDate: string): string => {
  const idxStart = strDate.indexOf("(");
  return strDate.substr(0, idxStart - 1);
};

export const writeCsvFormatFakeData = async (
  filename: string,
  numberOfItems: number
): Promise<string> => {
  const dirname = path.dirname(filename);
  await makeDir(dirname);

  const comma = ",",
    newLine = "\n";
  for (let n of range(numberOfItems)) {
    const fake: IFake = makeFakeData();
    if (n === 0) {
      const keys = Object.keys(fake).join(",");
      await writeFile(filename, keys);
    }
    const arrValues = Object.values(fake);
    const values = `${arrValues[0]},${arrValues[1]},${arrValues[2]},${rmKorean(
      arrValues[3].toString()
    )},${arrValues[4]}`;
    await appendFile(filename, newLine + values);
  }

  return `write ${numberOfItems} items to ${filename} file`;
};
