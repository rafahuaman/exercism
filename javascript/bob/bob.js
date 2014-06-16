function Bob() {};

Bob.prototype.responses = {
		chill : "Woah, chill out!",
		answer : "Sure.",
		angry : "Fine. Be that way!",
		whatever : "Whatever."
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

Bob.prototype.hey = function (message) {
	var bobsMessage = new Message(message)
	if (bobsMessage.isYelled()) {
		return this.responses.chill;
	} else if (bobsMessage.isQuestion()) {
		return this.responses.answer;
	} else if (bobsMessage.isSilence()){
		return this.responses.angry;
	} else {
		return this.responses.whatever;
	};
};

module.exports = Bob;