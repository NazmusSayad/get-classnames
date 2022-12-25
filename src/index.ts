const getClassNames = (...classNames: any[]): string => {
  return (
    // @ts-ignore
    classNames
      .flat(Infinity)
      .filter((item: any) => item && typeof item === 'string')
      .join(' ')
      .trim()
      .replace(/ {2,}/gim, ' ')
  )
}

export default getClassNames
