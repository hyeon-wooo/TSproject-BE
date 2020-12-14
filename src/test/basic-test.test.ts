import { getFileNameAndNumber } from "../utils/getFileNameAndNumber";
import {
  fileExists,
  makeDir,
  rmDir,
  writeFile,
  deleteFile,
  readFile,
  appendFile,
} from "../fileApi";
import { makeFakeData, IFake } from "../fake/makeFakeData";

// describe("Basic Types", () => {
//   test("GetFileNameAndNumber: empty process.argv", () => {
//     enum Color {
//       Red,
//       Green,
//       Blue,
//     }
//     let c: Color = Color.Green;
//     expect(getFileNameAndNumber("data/fake.csv", 1000)).toStrictEqual([
//       "data/fake.csv",
//       1000,
//     ]);
//   });
// });

// describe("File API", () => {
//   test("FileExists: wrong path", async () => {
//     const existsResult = await fileExists("./package1.json");
//     expect(existsResult).toBe(false);
//   });
//   test("FileExists: correct path", async () => {
//     const existsResult = await fileExists("./package.json");
//     expect(existsResult).toBe(true);
//   });

//   test("Make Dir", async () => {
//     const isDirCreated = await makeDir("./joke/kk");
//     expect(isDirCreated).toBe(true);
//   });
//   test("Make Dir2", () => {
//     makeDir("./hey/you").then((isCreated: boolean) => {
//       expect(isCreated).toBe(true);
//     });
//   });
//   test("Remove Dir: existed dir", () => {
//     rmDir("./joke").then((isRemoved: boolean) => {
//       expect(isRemoved).toBe(true);
//     });
//   });
//   test("Remove Dir: not existed dir", () => {
//     rmDir("./joke").then((isRemoved: boolean) => {
//       expect(isRemoved).toBe(true);
//     });
//   });
//   test("Create File: .txt", () => {
//     writeFile("./data/test.txt", "Hello This is Test File").then((result) => {
//       expect(result).toBe("./data/test.txt");
//     });
//   });
//   test("Create File: .json", () => {
//     writeFile(
//       "./data/test.json",
//       JSON.stringify({ name: "hyeonwoo", age: 24 }, null, 2)
//     ).then((result) => {
//       expect(result).toBe("./data/test.json");
//     });
//   });
//   test("Delete File: wrong path", async () => {
//     try {
//       const isDeleted = await deleteFile("test.txt");
//       expect(isDeleted).toBe(true);
//     } catch (err) {
//       expect(err).toBe(false);
//     }
//   });
//   test("Delete File: correct path", async () => {
//     const isDeleted = await deleteFile("./data/test.json");
//     expect(isDeleted).toBe(true);
//   });
//   test("Read File: wrong path", () => {
//     readFile("test.txt")
//       .then((result) => "여기오면 이상한거")
//       .catch((result) => expect(result).toBe(undefined));
//   });
//   test("Read File: correct path", async () => {
//     const result = await readFile("./data/test.txt");
//     expect(result).toBe("Hello This is Test File");
//   });
//   test("Append File: wrong path", () => {
//     appendFile("test.txt", "BlahBlah")
//       .then((result) => "여기오면 이상한거")
//       .catch((result) => expect(result).toBe(undefined));
//   });
//   test("Append File: correct path", async () => {
//     appendFile("./data/test.txt", "Blah")
//       .then((data) => {
//         return readFile("./data/test.txt");
//       })
//       .then((newData: string) =>
//         expect(newData).toBe("Hello This is Test FileBlah")
//       );
//   });
// });

describe("#FAKE", () => {
  test("Make Fake data", () => {
    const fakeData = makeFakeData();
    expect(typeof fakeData).toBe("object");
  });
});
