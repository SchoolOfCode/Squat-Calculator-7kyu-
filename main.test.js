//👉 Write your tests below here:

import { squats } from "./main.js";

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

test("Throws when not all paramaters are integers.", () => {
  expect(() => {
    squats(null, 10, 1);
  }).toThrow();
});
test("Throws when not all paramaters are integers.", () => {
  expect(() => {
    squats(10, "abc", 1);
  }).toThrow();
});
test("Throws when not all paramaters are integers.", () => {
  expect(() => {
    squats(1, 1, undefined);
  }).toThrow();
});
test("Throws when not all paramaters are integers.", () => {
  expect(() => {
    squats("abc", null, undefined);
  }).toThrow();
});
