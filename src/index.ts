import createClassFunction from 'class-function'

function getClassNames(...classNames: any[]): string {
  let output: string = ''

  classNames.flat(Infinity).forEach((cn) => {
    if (cn && (typeof cn === 'string' || cn instanceof String)) {
      output += ' ' + cn
    }
  })

  return output.trim().replace(/ {2,}/gim, ' ')
}

class GetClassNames {
  default = getClassNames

  group(prefix: string, ...args: any[]): string {
    const className = getClassNames(...args)
    return className === ''
      ? className
      : prefix + className.replace(/ /gim, ' ' + prefix)
  }
}

interface InstanceType extends GetClassNames {
  (...args: any[]): string
}

export default createClassFunction<InstanceType>(GetClassNames)
