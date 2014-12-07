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
	it('isPlain', function(){
		assert(type.isPlain(1));
		assert(type.isPlain('asdf'));
		assert(type.isPlain(false));
		assert(type.isPlain());
		assert(type.isPlain(null));
		assert(type.isPlain(NaN));
		assert(type.isPlain(undefined));
		assert(type.isPlain(Infinity));
		assert(!type.isPlain({}));
		assert(!type.isPlain([]));
	});
	it('isObject', function(){
		assert(type.isObject({}));
		assert(!type.isObject(1));
		assert(!type.isObject('asdf'));
		assert(!type.isObject(false));
		assert(!type.isObject());
		assert(!type.isObject(null));
		assert(!type.isObject(NaN));
		assert(!type.isObject(undefined));
		assert(!type.isObject(Infinity));
		assert(!type.isObject([]));
		assert(!type.isObject(function(){}));
		assert(!type.isObject(new Date));

		var x = new function(){};
		assert(!type.isObject(x));
	});
});
