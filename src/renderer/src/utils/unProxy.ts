/**
 * @returns plain js object from a proxy object.
 * used to manipulate solid js stores
 *
 * @param initialObject  the object to unproxy
 */

export const unproxy = (initialObject: Object) => {
  return JSON.parse(JSON.stringify(initialObject))
}
