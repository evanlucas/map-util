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
  t.equal(utils.prevVal('2', m), '1')
  t.equal(utils.prevVal('1', m, true), '2')
  t.equal(utils.prevVal('1', m), null)
  t.equal(utils.prevVal('3', m), null)
  t.end()
})
