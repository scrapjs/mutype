//speedy implementation of `in`
//NOTE: `!target[propName]` 2-3 orders faster than `!(propName in target)`
module.exports = function(a, b){
	if (!a) return false;

	//NOTE: this causes getter fire
	if (a[b]) return true;

	//FIXME: why in is better than hasOwnProperty? Something with prototypes. Show a case.
	return b in a;
	// return a.hasOwnProperty(b);
}
