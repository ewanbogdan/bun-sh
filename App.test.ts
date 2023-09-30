import { describe, expect, test } from "bun:test";

describe("math", () => {
  test("add", () => {
    expect(2 + 2).toEqual(4);
  });

  test("multiply", () => {
    expect(2 * 2).toEqual(4);
  });
});
