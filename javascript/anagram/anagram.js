var anagram = function(word) {
	var that = {};
	var word = word.toLowerCase();
	var letters =  word.toLowerCase().split('');

	var removeFromArray = function(array, index) {
		var left = array.slice(0,index);
		var right = array.slice(index+1);
		return left.concat(right);
	};

	var isValidProspect = function(prospect) {
		return (word.length == prospect.length && word != prospect);
	};

	var isAnagram = function(prospect){
		var prospectLetters = prospect.split('');
		for (var y = 0; y < letters.length; y++) {
			var matchIndex =  prospectLetters.indexOf(letters[y]); 
			if (matchIndex>= 0) {
				prospectLetters = removeFromArray(prospectLetters, matchIndex);
			} else {
				break;
			};
		};
		return (prospectLetters.length == 0);
	};

	var evaluateProspects = function(prospects){
		var validAnagrams = [];
		for (var i = 0; i < prospects.length; i++) {
			var originalProspect = prospects[i];
			var prospect = originalProspect.toLowerCase();
			if (isValidProspect(prospect)) {
				if (isAnagram(prospect)) {
					validAnagrams.push(originalProspect);
				};
			};
		};
		return validAnagrams;
	};

	that.matches = function(arg){
		if (arguments.length > 1) {
			var prospects = Array.prototype.slice.call(arguments, 0);
		} else {
			var prospects = arg;
		}
		return evaluateProspects(prospects);
	};

	return that;
}

module.exports = anagram;