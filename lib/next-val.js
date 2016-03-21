'use strict'

module.exports = nextVal

function nextVal(search, map, wrap) {
  if (!(map instanceof Map) && !(map instanceof Set)) {
    throw new TypeError('map must be a Map or Set')
  }

  if (map.size < 2) {
    return null
  }

  let found = false

  for (const item of map.values()) {
    if (found) {
      return item
    }

    if (search === item) {
      found = true
    }
  }

  // this means we tried to get the next value of the last value,
  // so return the first
  if (wrap && found) {
    return map.values().next().value
  }

  // could not find item
  return null
}
