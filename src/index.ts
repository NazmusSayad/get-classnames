interface DeepArray<T> extends Array<T | DeepArray<T>> {}
type ClassNames = DeepArray<string | number>

const getClassNames = (...classNames: ClassNames): string => {
  return (
    // @ts-ignore
    classNames
      // @ts-ignore
      .flat(Infinity)
      .filter((a: String) => a)
      .join(' ')
      .replace(/ {2,}/gim, ' ')
  )
}

export default getClassNames
