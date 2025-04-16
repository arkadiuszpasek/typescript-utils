import { Duration } from "../time/duration";

export const getDateBucket = (date: Date, interval: Duration): Date => {
  const dateCopy = new Date(date);
  if (interval.toMilliseconds < Duration.fromSeconds(1).toMilliseconds) {
    dateCopy.setUTCMilliseconds(
      Math.floor(date.getUTCMilliseconds() / interval.toMilliseconds) *
        interval.toMilliseconds
    );

    return dateCopy;
  }

  if (interval.toMilliseconds < Duration.fromMinutes(1).toMilliseconds) {
    dateCopy.setUTCSeconds(
      Math.floor(date.getUTCSeconds() / interval.toSeconds) *
        interval.toSeconds,
      0
    );

    return dateCopy;
  }

  if (interval.toMilliseconds < Duration.fromHours(1).toMilliseconds) {
    dateCopy.setUTCMinutes(
      Math.floor(date.getUTCMinutes() / interval.toMinutes) *
        interval.toMinutes,
      0,
      0
    );

    return dateCopy;
  }

  if (interval.toMilliseconds < Duration.fromDays(1).toMilliseconds) {
    dateCopy.setUTCHours(
      Math.floor(date.getUTCHours() / interval.toHours) * interval.toHours,
      0,
      0,
      0
    );

    return dateCopy;
  }

  if (interval.toMilliseconds === Duration.fromDays(1).toMilliseconds) {
    dateCopy.setUTCHours(0, 0, 0, 0);

    return dateCopy;
  }

  throw Error(`getDateBucket only supports intervals up to 1 day`);
};
