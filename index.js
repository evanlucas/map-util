'use strict'

exports.nextVal = require('./lib/next-val')
exports.prevVal = require('./lib/prev-val')

exports.first = function first(map) {
  if (!(map instanceof Map) && !(map instanceof Set)) {
    throw new TypeError('map must be a Map or Set')
  }

  if (!map.size) {
    return null
  }

  return map.entries().next().value
}

exports.firstKey = function firstKey(map) {
  const entry = exports.first(map)
  if (entry) {
    return entry[0]
  }

  return null
}

exports.firstVal = function firstVal(map) {
  const entry = exports.first(map)
  if (entry) {
    return entry[1]
  }

  return null
}

exports.last = function last(map) {
  if (!(map instanceof Map) && !(map instanceof Set)) {
    throw new TypeError('map must be a Map or Set')
  }

  if (!map.size) {
    return null
  }

  let out = null
  for (const item of map.entries()) {
    out = item
  }

  return out
}

exports.lastKey = function lastKey(map) {
  const entry = exports.last(map)
  if (entry) {
    return entry[0]
  }

  return null
}

exports.lastVal = function lastVal(map) {
  const entry = exports.last(map)
  if (entry) {
    return entry[1]
  }

  return null
}

exports.replace = function replace(from, to, map) {
  if (!(map instanceof Map) && !(map instanceof Set)) {
    throw new TypeError('map must be a Map or Set')
  }

  const o = map.get(from)
  map.delete(o)
  map.set(to, o)
}
