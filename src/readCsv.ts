import { getFileNameAndNumber } from "./utils";
import { csvReaderGen } from "./csv/csvReaderGen";

const [filename, numberOfFakeData] = getFileNameAndNumber(
  "./data/fake-0.csv",
  1
);

let line = 1;
for (let obj of csvReaderGen(filename)) {
  console.log(`[${line++}] ${JSON.stringify(obj)}`);
}
console.log("\n read complete.");
