const lib = require("../lib");

test("absolute - should return postive number when input is postivie" , () => {
  const result =  lib.absolute(1);
  expect(result).toBe(1);
});

test("absolute - should return postive number when input is negative" , () => {
    const result =  lib.absolute(-1);
    expect(result).toBe(1);
  });

  test("absolute - should return 0  when input is 0" , () => {
    const result =  lib.absolute(0);
    expect(result).toBe(0);
  });

