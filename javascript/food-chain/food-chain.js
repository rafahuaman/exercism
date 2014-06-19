var song = (function() {
	var that = {};
	var rhymelyrics  = {
		"fly" : "I don't know why she swallowed the fly. Perhaps she'll die.\n",
		"spider" : "It wriggled and jiggled and tickled inside her.\n",
		"bird" : "How absurd to swallow a bird!\n",
		"cat" : "Imagine that, to swallow a cat!\n",
		"dog" : "What a hog, to swallow a dog!\n",
		"goat" : "Just opened her throat and swallowed a goat!\n",
		"cow" : "I don't know how she swallowed a cow!\n",
		"horse" : "She's dead, of course!\n"
	};

	var animals = [
		"fly",
		"spider",
		"bird",
		"cat",
		"dog",
		"goat",
		"cow",
		"horse"];

	var getAnimal = function(verseNumber){
		var animalIndex = verseNumber-1;
		var animal = animals[animalIndex];
		return animal;
	};

	var buildVerseOpening = function(verseNumber) {
		var animal = getAnimal(verseNumber);
		var startLyric =  "I know an old lady who swallowed a " + animal + ".\n";
		var rhymeLyrics = rhymelyrics[animal];
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
			endLyric = rhymelyrics.fly;
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