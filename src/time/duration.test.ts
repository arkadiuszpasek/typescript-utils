import { Duration } from "./duration";

describe("Duration", () => {
  it("should throw on negative value", () => {
    expect(() => Duration.fromMilliseconds(-1)).toThrow();
    expect(() => Duration.fromSeconds(-1)).toThrow();
    expect(() => Duration.fromMinutes(-1)).toThrow();
    expect(() => Duration.fromHours(-1)).toThrow();
    expect(() => Duration.fromDays(-1)).toThrow();
  });

  it("should get as milliseconds", () => {
    const duration: Duration = Duration.fromMilliseconds(24 * 60 * 60 * 1000);
    expect(duration.toMilliseconds).toBe(24 * 60 * 60 * 1000);
  });

  it("should get as seconds", () => {
    const duration: Duration = Duration.fromMilliseconds(24 * 60 * 60 * 1000);
    expect(duration.toSeconds).toBe(24 * 60 * 60);
  });

  it("should get as minutes", () => {
    const duration: Duration = Duration.fromMilliseconds(24 * 60 * 60 * 1000);
    expect(duration.toMinutes).toBe(24 * 60);
  });

  it("should get as hours", () => {
    const duration: Duration = Duration.fromMilliseconds(24 * 60 * 60 * 1000);
    expect(duration.toHours).toBe(24);
  });

  it("should get as days", () => {
    const duration: Duration = Duration.fromMilliseconds(24 * 60 * 60 * 1000);
    expect(duration.toDays).toBe(1);
  });

  it("should create duration from seconds", () => {
    const duration = Duration.fromSeconds(60);
    expect(duration.toMilliseconds).toBe(60 * 1000);
  });

  it("should create duration from minutes", () => {
    const duration = Duration.fromMinutes(60);
    expect(duration.toMilliseconds).toBe(60 * 60 * 1000);
  });

  it("should create duration from hours", () => {
    const duration = Duration.fromHours(24);
    expect(duration.toMilliseconds).toBe(24 * 60 * 60 * 1000);
  });

  it("should create duration from days", () => {
    const duration = Duration.fromDays(1);
    expect(duration.toMilliseconds).toBe(24 * 60 * 60 * 1000);
  });
});
