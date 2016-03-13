'use strict'

module.exports = prevVal

const lastSymbol = Symbol('last')

function prevVal(search, map, wrap) {
  if (!(map instanceof Map)) {
    throw new TypeError('map must be a Map')
  }

  if (map.size < 2) {
    return null
  }

  let prev = null
  let last = null

  for (const item of map.values()) {
    if (item === search) {
      if (prev === null) {
        last = lastSymbol
        continue
      }
      return prev
    }

    prev = item
    if (last === lastSymbol) {
      last = item
    }
  }

  if (wrap && last) {
    return last
  }


  return null
}
