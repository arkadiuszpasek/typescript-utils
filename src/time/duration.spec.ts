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

  it("should multiply duration by a positive factor", () => {
    const duration = Duration.fromMilliseconds(1000);
    const result = duration.mul(3);
    expect(result.toMilliseconds).toBe(3000);
  });

  it("should multiply duration by zero", () => {
    const duration = Duration.fromMilliseconds(1000);
    const result = duration.mul(0);
    expect(result.toMilliseconds).toBe(0);
  });

  it("should multiply duration by a fractional factor", () => {
    const duration = Duration.fromMilliseconds(1000);
    const result = duration.mul(0.5);
    expect(result.toMilliseconds).toBe(500);
  });

  it("should add two durations", () => {
    const duration1 = Duration.fromMilliseconds(1000);
    const duration2 = Duration.fromMilliseconds(2000);
    const result = duration1.add(duration2);
    expect(result.toMilliseconds).toBe(3000);
  });

  it("should handle mixed unit addition", () => {
    const duration1 = Duration.fromSeconds(30);
    const duration2 = Duration.fromMinutes(1);
    const duration3 = Duration.fromHours(1);
    const result = duration1.add(duration2).add(duration3);
    expect(result.toMilliseconds).toBe(30 * 1000 + 60 * 1000 + 60 * 60 * 1000);
  });

  it("should add a duration of zero", () => {
    const duration1 = Duration.fromMilliseconds(1000);
    const duration2 = Duration.fromMilliseconds(0);
    const result = duration1.add(duration2);
    expect(result.toMilliseconds).toBe(1000);
  });
});
