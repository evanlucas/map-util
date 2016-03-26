# map-util

[![Build Status](https://travis-ci.org/evanlucas/map-util.svg)](https://travis-ci.org/evanlucas/map-util)
[![Coverage Status](https://coveralls.io/repos/evanlucas/map-util/badge.svg?branch=master&service=github)](https://coveralls.io/github/evanlucas/map-util?branch=master)

Simple set of utilities that make getting the previous or next value in a map
easier.

## Install

```bash
$ npm install [--save] map-util
```

## Usage

```js
'use strict'

const utils = require('map-util')
const nextVal = utils.nextVal
const prevVal = utils.prevVal

const map = new Map()
map.set('1', '1')
map.set('2', '2')

nextVal('1', map) // => '2'
nextVal('2', map) // => null
// If we want to wrap around:
nextVal('2', map, true) // => '1'

prevVal('2', map) // => '1'
prevVal('1', map) // => null
// If we want to wrap around:
prevVal('1', map, true) // => '2'

// or to get first and last
utils.first(map)    // => ['1', '1']
utils.firstKey(map) // => '1'
utils.firstVal(map) // => '1'

utils.last(map)     // => ['2', '2']
utils.lastKey(map)  // => '2'
utils.lastVal(map)  // => '2'

// Replace the key with another key, but keep the value
utils.replace('2', '10', map)
console.log(map.get('10'))
// => '2'
```

## Test

```bash
$ npm test
```

## Author

Evan Lucas

## License

MIT (See `LICENSE` for more info)
