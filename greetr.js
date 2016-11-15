(function (global, $) {
	
	var Greetr = function(firstName, lastName, language) {
		return new Greetr.init(firstName, lastName, language);
	}

	Greetr.prototype = {};

	Greetr.init = function(firstName, lastName, language) {

		//Set some defaults

		//Capture 'this' at this stage to avoid issues with that keyword
		var self = this;

		self.firstName = firstName || '';
		self.lastName = lastName || '';
		self.language = language || 'en';

	}

	Greetr.init.prototype;

}(window, jQuery));