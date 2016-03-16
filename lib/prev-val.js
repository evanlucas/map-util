'use strict'

module.exports = prevVal

const lastSymbol = Symbol('last')

const utils = require('../')

function prevVal(search, map, wrap) {
  if (!(map instanceof Map)) {
    throw new TypeError('map must be a Map')
  }

  if (map.size < 2) {
    return null
  }

  const first = utils.firstVal(map)
  if (search === first) {
    if (wrap) {
      return utils.lastVal(map)
    } else {
      return null
    }
  }

  let prev = null

  for (const item of map.values()) {
    if (item === search) {
      return prev
    }

    prev = item
  }

  return null
}
