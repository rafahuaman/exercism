var rhyme = function(spec) {
	var that = {};
	that.get_animal = function() {
		return spec.animal;
	};

	that.get_line = function() {
		return spec.line;
	};
	return that;
};

var song = (function() {
	var that = {};

	var animalRhymes = [
		rhyme({animal: "fly", line: "I don't know why she swallowed the fly. Perhaps she'll die.\n"}),
		rhyme({animal: "spider", line: "It wriggled and jiggled and tickled inside her.\n"}),
		rhyme({animal: "bird", line: "How absurd to swallow a bird!\n"}),
		rhyme({animal: "cat", line: "Imagine that, to swallow a cat!\n"}),
		rhyme({animal: "dog", line: "What a hog, to swallow a dog!\n"}),
		rhyme({animal: "goat", line: "Just opened her throat and swallowed a goat!\n"}),
		rhyme({animal: "cow", line: "I don't know how she swallowed a cow!\n"}),
		rhyme({animal: "horse", line: "She's dead, of course!\n"})
	];

	var getAnimal = function(verseNumber){
		var animalIndex = verseNumber-1;
		var animal = animalRhymes[animalIndex].get_animal();
		return animal;
	};

	var getLine = function(verseNumber){
		var animalIndex = verseNumber-1;
		var line = animalRhymes[animalIndex].get_line();
		return line;
	};

	var buildVerseOpening = function(verseNumber) {
		var animal = getAnimal(verseNumber);
		var startLyric =  "I know an old lady who swallowed a " + animal + ".\n";
		var rhymeLyrics = getLine(verseNumber);
		return startLyric + rhymeLyrics;
	};

	var buildCatchLine = function(verseNumber) {
		var animalCatcher = getAnimal(verseNumber);
		var animalFugitive = getAnimal(verseNumber-1);
		if (animalFugitive == "spider"){
			var lyric = "She swallowed the " + animalCatcher + " to catch the " + animalFugitive + " that wriggled and jiggled and tickled inside her.\n"
		} else {
			var lyric = "She swallowed the " + animalCatcher + " to catch the " + animalFugitive + ".\n"	
		};
		
		return lyric;
	};

	var buildCatchVerses = function(verseNumber){
		var catchLyrics = ""
		for (var i = verseNumber ; i > 1; i--) {
			catchLyrics += buildCatchLine(i);
		};
		return catchLyrics;
	};

	var buildVerseEnding = function(verseNumber){
		var endLyric =""
		if (verseNumber > 1) {
			endLyric = animalRhymes[0].get_line();
		}
		return endLyric;
	};

	that.verse = function(verseNumber){
		var start = buildVerseOpening(verseNumber);
		var middle = "";
		var end = "";
		if (verseNumber < 8) {
			middle = buildCatchVerses(verseNumber);
			end = buildVerseEnding(verseNumber);
		};
		return start + middle + end;
	};

	that.verses = function(start, end){
		var selectedVerses = "";
		for (var i = start; i <= end; i++) {
			selectedVerses += that.verse(i) + "\n";
		};
		return selectedVerses;
	};

	that.sing = function(){
		return that.verses(1,8);
	}

return that;
})();

module.exports = song;