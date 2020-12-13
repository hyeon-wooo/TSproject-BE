const fs = require("fs");

export const writeFile = (filename: string, data: any): Promise<any> =>
  new Promise((resolve, reject) => {
    // writeFile API는 이미 존재하는 파일일 경우 자동으로 덮어쓴다
    fs.writeFile(filename, data, "utf8", (err: Error) => {
      err ? reject(err) : resolve(filename);
    });
  });
