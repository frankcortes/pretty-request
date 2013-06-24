requirejs.config({
	deps:["initial"],
	paths: {
		//libraries
		"Handlebars": "lib/Handlebars",
		"Backbone": "lib/backbone",
		"underscore": "lib/lodash",
		"zepto": "lib/zepto",
		"zeptoData": "lib/zepto-data",
		"hbs": "lib/hbs",
		//Modules and starting
		"initial": "src/initial",
		"main": "src/modules/main/views/main",
		"mainRouter": "src/router",
		"boostrapModal": "lib/bootstrap-modal/js/bootstrap"
	},
	shim : {
		"Backbone": {
			deps: ["underscore"],
			exports: "Backbone"
		},
		"underscore": {
			exports: "_"
		},
		"zepto": {
			exports: "Zepto"
		},
		"zeptoData": {
			deps: ["zepto"],
			exports: "Zepto"
		},
		"boostrapModal": {
			deps: ["jQuery"]
		}
	},
	map: {
		"*": {
			"modules": "src/modules",
			"jQuery": "zeptoData"
		}
	},
	hbs: {
    	disableI18n: true,
   		disableHelpers: true,
   		extension: "hbs"
	}
});