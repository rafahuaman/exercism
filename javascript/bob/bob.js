var Bob = function () {

	var that = {};

	var responses = {
		chill : "Woah, chill out!",
		answer : "Sure.",
		angry : "Fine. Be that way!",
		whatever : "Whatever."
	};

	that.hey = function (message) {
		var receivedMessage = new Message(message)
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

var Message = function(text) {
	this.text = text;	
}

Message.prototype.isYelled = function(){
	return this.text  == this.text.toUpperCase() && this.text != this.text.toLowerCase() ;
}

Message.prototype.isQuestion = function() {
	return this.text.slice(-1) == "?";
}

Message.prototype.isSilence = function() {
	return !this.text || !this.text.trim()
}

module.exports = Bob;