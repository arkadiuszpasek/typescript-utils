import { mapObject } from "./object";

describe("object", () => {
  it("should mapFunction to same types", () => {
    const x = { a: 1, b: 2 };
    expect(mapObject(x, (v) => v + 1)).toEqual({ a: 2, b: 3 });
  });
  it("should mapFunction to different types", () => {
    const x = { a: 1, b: 2 };
    expect(mapObject(x, (v) => v.toString())).toEqual({ a: "1", b: "2" });
  });
});
