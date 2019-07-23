import { compare } from "./compare";

const testInputs: { input: string[]; result: string }[] = [
  {
    input: ["xyaabbbccccdefww", "xxxxyyyyabklmopq"],
    result: "abcdefklmopqwxy"
  },
  {
    input: ["abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz"],
    result: "abcdefghijklmnopqrstuvwxyz"
  },
  {
    input: ["AaZz", "Bb1", "ЯGg"],
    result: "abgz"
  },
  {
    input: ["1", "2", "3", "4h"],
    result: "h"
  },
  {
    input: ["", ""],
    result: ""
  },
  {
    input: [],
    result: ""
  }
];

describe("compare", () => {
  it("default", () => {
    for (const item of testInputs) {
      expect(compare(...item.input)).toBe(item.result);
    }
  });
});
