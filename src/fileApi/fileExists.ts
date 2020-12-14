const fs = require("fs");

export const fileExists = (filepath: string): Promise<boolean> =>
  new Promise((resolve) =>
    fs.access(filepath, (err) => {
      resolve(err ? false : true);
    })
  );
