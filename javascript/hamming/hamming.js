var hamming = { 
	compute: function (leftStrand, rightStrand){
		var hammingDifference = 0;
		var leftArray = leftStrand.split('');
		var rightArray = rightStrand.split('');
		var minLength = Math.min(leftArray.length,rightArray.length)

		for (var i = 0 ; i <= minLength - 1; i++) {
			if (leftArray[i] != rightArray[i] ) {
				hammingDifference++;
			};
		};
		return hammingDifference;
	}
};

module.exports = hamming;