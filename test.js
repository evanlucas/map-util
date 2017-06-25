'use strict'

const test = require('tap').test
const utils = require('./')

test('nextVal', (t) => {
  t.throws(function() {
    t.equal(utils.nextVal())
  }, /map must be a Map/)

  const m = new Map()
  t.equal(utils.nextVal(null, m), null)
  m.set('1', '1')
  t.equal(utils.nextVal(null, m), null)

  m.set('2', '2')
  t.equal(utils.nextVal('2', m), null)
  t.equal(utils.nextVal('2', m, true), '1')
  t.equal(utils.nextVal('1', m), '2')
  t.equal(utils.nextVal('3', m), null)

  m.set('3', '1')
  t.equal(utils.nextVal(utils.firstVal(m), m), '2')
  t.equal(utils.nextVal(utils.lastVal(m), m), null)

  const s = new Set()
  t.equal(utils.nextVal(null, s), null)
  s.add('1')
  t.equal(utils.nextVal(null, s), null)

  s.add('2')
  t.equal(utils.nextVal('2', s), null)
  t.equal(utils.nextVal('2', s, true), '1')
  t.end()
})

test('prevVal', (t) => {
  t.throws(function() {
    t.equal(utils.prevVal())
  }, /map must be a Map/)

  const m = new Map()
  t.equal(utils.prevVal(null, m), null)
  m.set('1', '1')
  t.equal(utils.prevVal(null, m), null)

  m.set('2', '2')
  m.set('4', '4')
  t.equal(utils.prevVal('2', m), '1')
  t.equal(utils.prevVal('1', m, true), '4')
  t.equal(utils.prevVal('1', m), null)
  t.equal(utils.prevVal('4', m), '2')
  t.equal(utils.prevVal('3', m), null)
  t.end()
})

test('first', (t) => {
  t.throws(function() {
    utils.first()
  }, /map must be a Map/)

  const m = new Map()
  t.equal(utils.first(m), null)
  t.equal(utils.firstKey(m), null)
  t.equal(utils.firstVal(m), null)
  m.set('1', '1')
  m.set('2', '2')
  t.deepEqual(utils.first(m), ['1', '1'])
  t.equal(utils.firstKey(m), '1')
  t.equal(utils.firstVal(m), '1')
  t.end()
})

test('last', (t) => {
  t.throws(function() {
    utils.last()
  }, /map must be a Map/)

  const m = new Map()
  t.equal(utils.last(m), null)
  t.equal(utils.lastKey(m), null)
  t.equal(utils.lastVal(m), null)
  m.set('1', '1')
  m.set('2', '2')
  t.deepEqual(utils.last(m), ['2', '2'])
  t.equal(utils.lastKey(m), '2')
  t.equal(utils.lastVal(m), '2')
  t.end()
})

test('replace', (t) => {
  t.throws(() => {
    utils.replace()
  }, /map must be a Map or Set/)

  const m = new Map()
  m.set('a', 1)
  utils.replace('a', 'b', m)
  t.equal(m.get('b'), 1)
  t.equal(m.has('a'), false)
  t.end()
})
