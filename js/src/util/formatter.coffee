define(["Handlebars", "underscore"], ( Handlebars, _ )->
	#This helper of Handlebars defines the type of the value.
	Handlebars.registerHelper("formatter", (value)->
		formatterTmpl = Handlebars.compile "<span class=\"formatter {{type}}\">{{value}}</span>"
		params = {
			value: value
			type: "formatter-normal"
		}
		#verifies the type and changes the type if not defined.
		if !isNaN parseInt value
			params.type = "formatter-number"
		else if value == "true" or value == "false"
			params.type = "formatter-boolean"
		else if _.isNull value
			params.type = "formatter-null"
		else if _.isUndefined value
			params.type = "formatter-undefined"
		else if _.isString value
			params.type = "formatter-string"
			params.value = "\"" + value + "\""	

		#Returns a string formatted
		new Handlebars.SafeString formatterTmpl params
	)
)