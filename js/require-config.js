requirejs.config({
	deps:["initial"],
	paths: {
		//libraries
		"Handlebars": "lib/Handlebars",
		"Backbone": "lib/backbone",
		"underscore": "lib/lodash",
		"jQuery": "lib/zepto",
		"hbs": "lib/hbs",
		//Modules and starting
		"initial": "src/initial",
		"main": "src/modules/main/views/main"
	},
	shim : {
		"Backbone": {
			deps: ["underscore"],
			exports: "Backbone"
		},
		"underscore": {
			exports: "_"
		},
		"jQuery": {
			exports: "Zepto"
		}
	},
	map: {
		"*": {
			"modules": "src/modules"
		}
	},
	hbs: {
    	disableI18n: true,
   		disableHelpers: true,
   		extension: "hbs"
	}
});