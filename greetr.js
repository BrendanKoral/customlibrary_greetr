(function (global, $) {
	
	var Greetr = function(firstName, lastName, language) {
		return new Greetr.init(firstName, lastName, language);
	}

	var supportedLangs = ['en','es'];

	greetings = {
		en: 'Hello',
		es: 'Hola'
	};

	formalGreetings = {
		en: 'Greetings',
		es: 'Saludos'
	};



	Greetr.prototype = {};

	Greetr.init = function(firstName, lastName, language) {

		//Set some defaults

		//Capture 'this' at this stage to avoid issues with that keyword
		var self = this;

		self.firstName = firstName || '';
		self.lastName = lastName || '';
		self.language = language || 'en';

	}

	Greetr.init.prototype = Greetr.prototype;

	global.Greetr = global.G$ = Greetr;

}(window, jQuery));