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

	var logMessages = {
		en: 'Logged in',
		es: 'Inició sesión'
	}


	Greetr.prototype = {

		fullName: function() {
			return this.firstname + ' ' + this.lastName;
		},

		validate: function() {
			if (supportedLangs.indexOf(this.language) === -1) {
				throw "Invalid language";
			}
		},

		greeting: function() {
			return greetings[this.language] + ' ' + this.firstName + '!';
		},

		formalGreeting: function() {
			return formalGreetings[this.language] + ' ' + this.fullName + '!';
		},

		greet: function(formal) {
			var msg = this.greeting();

			if (formal) {
				msg = this.formalGreeting();
			}
			else {
				msg = this.greeting();
			}

			// 'This' refers to the calling at execution time
			// Makes method chainable
			return this;

		},

		setLang: function(lang) {
			this.language = lang;

			this.validate();

			return this; 
		}

	};

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