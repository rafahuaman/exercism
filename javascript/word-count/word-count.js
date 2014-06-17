var words = function(text){
	var wordCount = {};
	var text = text.toLowerCase() ;

	var wordArray = text.match(/[\u0030-\u0039\u0041-\u005A\u0061-\u007A\u00c0-\u00FF\u0400-\u04FF]+/g)

	for (var i = 0; i <= wordArray.length - 1; i++) {
		var wordCountProperty = wordCount[wordArray[i]]
		if ( wordCountProperty && typeof wordCountProperty == "number" ) {
			wordCount[wordArray[i]]++;
		} else {
			wordCount[wordArray[i]] = 1;
		};
	};

	return wordCount;
}

module.exports = words;
