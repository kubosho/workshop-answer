export const PI = 3.141592

/**
 * @private
 */
function sqrtCore (s, x, last) {
    return x !== last ? sqrtCore(s, (x + s / x) / 2.0, x) : x
}

export function sqrt (s) {
    return sqrtCore(s, s / 2.0, 0.0)
}

export function square (x) {
    return x * x
}
