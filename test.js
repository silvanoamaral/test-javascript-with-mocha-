// Require the built in 'assertion' library
const assert = require('assert');

// Create a group of tests about Arrays
describe('Array', function() {
    // Within our Array group, Create a group of tests for indexOf
    describe('#indexOf()', function() {
        // A string explanation of what we're testing
        it('should return -1 when the value is not present', function(){
            assert.equal(-1, [1,2,3].indexOf(4));
        });
    });
});

describe('Math', function() {
    // Test One: A string explanation of what we're testing
    it('should test if 3*3 = 9', function(){
      // Our actual test: 3*3 SHOULD EQUAL 9
      assert.equal(9, 3*3);
    });
    // Test Two: A string explanation of what we're testing
    it('should test if (3-4)*8 = -8', function(){
      // Our actual test: (3-4)*8 SHOULD EQUAL -8
      assert.equal(-8, (3-4)*8);
    });
});