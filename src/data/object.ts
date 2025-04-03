type ValueOf<T> = T[keyof T];

type MapTo<T, U> = {
  [P in keyof T]: U;
};

export function mapObject<T extends object, U>(
  obj: T,
  mappingFn: (v: ValueOf<T>) => U
): MapTo<T, U> {
  const newObj = {} as MapTo<T, U>;
  for (const i in obj) {
    if (obj.hasOwnProperty(i)) {
      const oldValue = obj[i];
      newObj[i] = mappingFn(oldValue);
    }
  }
  return newObj;
}
