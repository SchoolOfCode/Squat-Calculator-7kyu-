//👉 Write your tests below here:

import { squats } from "./main.js";

//test("Checks for the correct value of squats", () => {
//  expect(() => {
//    squats(1, 10, 1).toBe(91);
//  });
//});

test.each([
  { a: 1, b: 10, c: 1, expected: 91 },
  { a: 10, b: 14, c: 2, expected: 5810 },
  { a: 16, b: 10, c: 1, expected: 7336 },
])(
  "When 'squats' runs it returns the correct integer on the parameters.",
  ({ a, b, c, expected }) => {
    expect(squats(a, b, c)).toBe(expected);
  }
);
