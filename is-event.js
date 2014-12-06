module.exports = function(target){
	return typeof Event !== 'undefined' && target instanceof Event;
};