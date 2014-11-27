/**
* Trivial types checkers.
* Because there’re no common lib for that ( lodash_ is a fatguy)
*/
//TODO: make main use as `is.array(target)`
//TODO: separate by libs, included per-file

module.exports = {
	has: require('./has'),
	isObject: require('./is-object'),
	isFn: require('./is-fn'),
	isString: require('./is-string'),
	isNumber: require('./is-number'),
	isBoolean: require('./is-bool'),
	isPlain: require('./is-plain'),
	isArray: require('./is-array'),
	isArrayLike: require('./is-array-like'),
	isElement: require('./is-element'),
	isPrivateName: require('./is-private-name'),
	isRegExp: require('./is-regex'),
	isEmpty: require('./is-empty')
};
