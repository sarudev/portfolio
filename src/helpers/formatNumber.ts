export default function formatNumber (number: number): string {
  if (number >= 0 && number <= 999) {
    return number.toString()
  }
  if (number >= 1_000 && number <= 999_999) {
    return format((number / 1_000).toString()) + 'K'
  }

  if (number >= 1_000_000 && number <= 999_999_999) {
    return format((number / 1_000_000).toString()) + 'M'
  }

  if (number >= 1_000_000_000 && number <= 999_999_999_999) {
    return format((number / 1_000_000_000).toString()) + 'B'
  }

  return 'ERROR'
}

function format (fixed: string): string {
  if (fixed.includes('.')) {
    const splited = fixed.split('.')
    if (fixed.length > splited[0].length + 3) {
      fixed = fixed.substring(0, splited[0].length + 3)
    }

    if (fixed.endsWith('.00')) {
      fixed = fixed.substring(0, splited[0].length)
    }

    if (fixed.endsWith('0')) {
      fixed = fixed.substring(0, fixed.length - 1)
    }
  }
  return fixed
}
