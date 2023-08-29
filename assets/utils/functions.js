/**
 * Returns a promise that resolves after a given amount of time
 * @param {*} ms
 * @returns Promise
 */
export function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Checks if the device is mobile
 * @returns boolean
 */
export function isMobile() {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return true;
  } else {
    return false;
  }
}
