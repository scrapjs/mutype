/**
 * @module mutype/is-object
 */

//TODO: add st8 tests

//isPlainObject indeed
module.exports = function(a){
	// return obj === Object(obj);
	return a && a.constructor && a.constructor.name === "Object";
};
