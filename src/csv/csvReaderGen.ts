import { readFileGen } from "../fileApi";
import { zip } from "../utils";

export function* csvReaderGen(filename: string, delim: string = ",") {
  let header = [];
  for (let line of readFileGen(filename)) {
    if (!header.length) header = line.split(delim);
    yield zip(header, line.split(delim));
  }
}
