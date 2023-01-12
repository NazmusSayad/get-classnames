import createClassFunction from 'class-function'

const getString = (arg: any[]): string => {
  const flattedArray = arg.flat(Infinity)
  let output: string = ''

  let i = 0
  for (i; i < flattedArray.length; i++) {
    const cn = flattedArray[i]
    if (cn && (typeof cn === 'string' || cn instanceof String)) {
      output += ' ' + cn
    }
  }

  return output
}

const formatString = (str: string): string => {
  return str.trim().replace(/ {2,}/gim, ' ')
}

function getClassNames(...args: any[]): string {
  return formatString(getString(args))
}

class GetClassNames {
  prefix(prefix: string, ...args: any[]): string {
    const className = getClassNames(...args)
    return className === ''
      ? className
      : prefix + className.replace(/ /gim, ' ' + prefix)
  }

  suffix(suffix: string, ...args: any[]): string {
    const className = getClassNames(...args)
    return className === ''
      ? className
      : className.replace(/ /gim, suffix + ' ') + suffix
  }

  tw(...args: any[]) {
    let variantClass = ''
    let normalClass = getString(args)
    const matchedVariants = [...normalClass.matchAll(tailwindVariantRegex)]

    matchedVariants.forEach(([full, key, value]) => {
      normalClass = normalClass.replace(full, ' ')
      variantClass += ' ' + this.prefix(key, value)
    })

    return formatString(getString([normalClass]) + variantClass)
  }
}

interface InstanceType extends GetClassNames {
  (...args: any[]): string
}

export const tailwindVariantRegex = /([a-z\-0-9:]+:)\((.*?)\)/gim
export default createClassFunction<InstanceType>(GetClassNames, getClassNames)
