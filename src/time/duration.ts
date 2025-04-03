export class Duration {
  private constructor(private readonly milliseconds: number) {
    if (milliseconds < 0) {
      throw new Error(`Duration cannot be negative: ${milliseconds}`);
    }
  }

  get toMilliseconds() {
    return this.milliseconds;
  }

  get toSeconds() {
    return this.milliseconds / 1000;
  }

  get toMinutes() {
    return this.milliseconds / (60 * 1000);
  }

  get toHours() {
    return this.milliseconds / (60 * 60 * 1000);
  }

  get toDays() {
    return this.milliseconds / (24 * 60 * 60 * 1000);
  }

  static fromMilliseconds(milliseconds: number) {
    return new Duration(milliseconds);
  }

  static fromSeconds(seconds: number) {
    return new Duration(seconds * 1000);
  }

  static fromMinutes(minutes: number) {
    return new Duration(minutes * 60 * 1000);
  }

  static fromHours(hours: number) {
    return new Duration(hours * 60 * 60 * 1000);
  }

  static fromDays(days: number) {
    return new Duration(days * 24 * 60 * 60 * 1000);
  }
}
