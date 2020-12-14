import { readFile } from "../fileApi";

export const zip = (keys: string[], values: any[]): object => {
  const makeObject = (key: string, value: any) => ({ [key]: value });
  const mergeObject = (a: any[]) =>
    a.reduce((sum, val) => ({ ...sum, ...val }), {});

  let tmp = keys
    .map((key, idx) => [key, values[idx]])
    .filter((a) => a[0] && a[1])
    .map((a) => makeObject(a[0], a[1]));
  return mergeObject(tmp);
};
