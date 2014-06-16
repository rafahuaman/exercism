var Bob = function () {

	var that = {};

	var responses = {
		chill : "Woah, chill out!",
		answer : "Sure.",
		angry : "Fine. Be that way!",
		whatever : "Whatever."
	};

	that.hey = function (msg) {
		var receivedMessage = message(msg);
		
		if (receivedMessage.isYelled()) {
			return responses.chill;
		} else if (receivedMessage.isQuestion()) {
			return responses.answer;
		} else if (receivedMessage.isSilence()){
			return responses.angry;
		} else {
			return responses.whatever;
		};
	};

	return that;
};

var message = function(text) {
	var that = {};
	var text = text;

	that.isYelled = function() {
		return text  == text.toUpperCase() && text != text.toLowerCase() ;
	}

	that.isQuestion = function() {
		return text.slice(-1) == "?";
	}

	that.isSilence = function() {
		return !text || !text.trim();
	}

	return that;
}

module.exports = Bob;