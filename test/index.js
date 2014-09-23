var type = require('../index');
var assert = require('better-assert');

describe('Types checking', function(){
	it('isArrayLike', function(){
		assert(type.isArrayLike([]));
		assert(!type.isArrayLike('abs'));
		assert(!type.isArrayLike(123));
		assert(type.isArrayLike({length: 3, 0: 1, 1: 2}));
		assert(!type.isArrayLike(function(a){}));

		//TODO: test form element with inner items
		//TODO: test window with frames
		//TODO: test nodelist
	});
});