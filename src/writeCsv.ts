import { writeCsvFormatFakeData } from "./fake";
import { getFileNameAndNumber } from "./utils/getFileNameAndNumber";
import { readFile, writeFile } from "./fileApi";

const writeCsv = (n: number = 1): Promise<string> =>
  new Promise((resolve, reject) => {
    const [filename, numberOfFakeData] = getFileNameAndNumber(
      "./data/fake",
      n || 1
    );

    let newFileName = "";

    readFile("./data/totalFakeData.txt")
      .then((strTotal: string) => {
        newFileName = `${filename}-${strTotal}.csv`;
        return writeFile(
          "./data/totalFakeData.txt",
          `${parseInt(strTotal) + 1}`
        );
      })
      .then(
        (successWrite: string) =>
          successWrite.length > 0 &&
          writeCsvFormatFakeData(newFileName, numberOfFakeData)
      )
      .then((result) => {
        console.log(result);
        const startIdx = result.indexOf(".");
        resolve(result.substring(startIdx));
      })
      .catch((err) => {
        console.log(err);
        reject("FAIL to write");
      });
  });

writeCsv().then((createdFileName) =>
  console.log("File write: ", createdFileName)
);

export default writeCsv;
