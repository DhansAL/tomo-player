enum AVAILABLE_FORMAT_VALUES {
  HHMMSS = 11,
  MMSS = 14
}

/**
 *
 * @param seconds number total seconds to format
 * @param format  format return type
 * @returns
 */
export const formatSeconds = (seconds: number, format: 'HHMMSS' | 'MMSS') => {
  const result = new Date(seconds * 1000).toISOString().slice(AVAILABLE_FORMAT_VALUES[format], 19)
  return result
}
