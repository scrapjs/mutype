module.exports = function(target){
	return typeof document !== 'undefined' && target instanceof HTMLElement;
};