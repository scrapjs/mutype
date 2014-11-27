module.exports = function(a){
	if (!a) return true;
	for (var k in a) {
		return false;
	}
	return true;
}