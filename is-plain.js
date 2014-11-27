module.exports = function isPlain(a){
	return !a || require('./is-string')(a) || require('./is-number')(a) || require('./is-bool')(a);
}