const assert = require('chai').assert;
const bubbleSort = require('../bubble_sort')

describe('bubbleSort functionality', function(){
  it('can sort an array', function(){
    assert.deepEqual(bubbleSort([4, 9807, 2, 465]), [2, 4, 465, 9807])
  })
})
