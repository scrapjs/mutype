//FIXME: add tests from http://jsfiddle.net/ku9LS/1/
module.exports = function (a){
	return require('./is-array')(a) || (a && !require('./is-string')(a) && !a.nodeType && (typeof window != 'undefined' ? a != window : true) && !require('./is-fn')(a) && typeof a.length === 'number');
}