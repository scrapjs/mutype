module.exports = function(target){
	return typeof NodeList !== 'undefined' && target instanceof NodeList;
};