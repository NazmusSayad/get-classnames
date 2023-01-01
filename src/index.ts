const getClassNames = (...classNames: any[]): string => {
  let output: string = ''

  classNames.flat(Infinity).forEach((cn) => {
    if (cn && (typeof cn === 'string' || cn instanceof String)) {
      output += ' ' + cn
    }
  })

  return output.trim().replace(/ {2,}/gim, ' ')
}

export default getClassNames
