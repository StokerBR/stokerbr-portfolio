/**
 * Returns a promise that resolves after a given amount of time
 * @param {*} ms
 * @returns
 */
export function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
