function Bob() {
};

Bob.prototype.hey = function (message) {
	if (message  == message.toUpperCase() && message != message.toLowerCase() ) {
		return "Woah, chill out!";
	} else if (message.slice(-1) == "?") {
		return "Sure.";
	} else if (!message || !message.trim() ){
		return "Fine. Be that way!";
	} else {
		return "Whatever.";
	};
};

module.exports = Bob;