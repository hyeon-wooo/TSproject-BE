import { IFake } from "./Fake";
const Chance = require("chance");

const c = new Chance();
const cBirthday = c.birthday();
console.log(cBirthday);
export const makeFakeData = (): IFake => ({
  name: c.name(),
  email: c.email(),
  profession: c.profession(),
  birthday: c.birthday(),
  sentence: c.sentence(),
});

export { IFake };
