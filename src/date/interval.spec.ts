import { getDateBucket } from "./interval";
import { Duration } from "../time/duration";

describe("getDateBucket", () => {
  it("should round to nearest 100-ms bucket", () => {
    const date = new Date("2025-04-16T10:30:45.123Z");
    const interval = Duration.fromMilliseconds(100);

    const result = getDateBucket(date, interval);

    expect(result.toISOString()).toBe("2025-04-16T10:30:45.100Z");
  });

  it("should round to nearest 1-second bucket", () => {
    const date = new Date("2025-04-16T10:30:45.123Z");
    const interval = Duration.fromSeconds(1);

    const result = getDateBucket(date, interval);

    expect(result.toISOString()).toBe("2025-04-16T10:30:45.000Z");
  });

  it("should round to the nearest 1-minute bucket", () => {
    const date = new Date("2025-04-16T10:07:45.123Z");
    const interval = Duration.fromMinutes(1);

    const result = getDateBucket(date, interval);

    expect(result.toISOString()).toBe("2025-04-16T10:07:00.000Z");
  });

  it("should round to the nearest 15-minute bucket", () => {
    const date = new Date("2025-04-16T10:22:45.123Z");
    const interval = Duration.fromMinutes(15);

    const result = getDateBucket(date, interval);

    expect(result.toISOString()).toBe("2025-04-16T10:15:00.000Z");
  });

  it("should round to the nearest 1-hour bucket", () => {
    const date = new Date("2025-04-16T10:45:45.123Z");
    const interval = Duration.fromHours(1);

    const result = getDateBucket(date, interval);

    expect(result.toISOString()).toBe("2025-04-16T10:00:00.000Z");
  });

  it("should round to nearest 1 day bucket", () => {
    const date = new Date("2025-04-16T10:30:45.123Z");
    const interval = Duration.fromDays(1);

    const result = getDateBucket(date, interval);

    expect(result.toISOString()).toBe("2025-04-16T00:00:00.000Z");
  });

  it("should return a new Date instance, not modify the input", () => {
    const date = new Date("2025-04-16T10:30:45.123Z");
    const originalTime = date.getTime();
    const interval = Duration.fromDays(1);

    const result = getDateBucket(date, interval);

    expect(result).not.toBe(date);
    expect(date.getTime()).toBe(originalTime);
  });
});
