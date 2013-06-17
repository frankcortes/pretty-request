define(["Handlebars", "underscore"], ( Handlebars, _ )->

	#trim a string with this regExp
	_trim = (t)->
		t.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g,'').replace(/\s+/g,' ')

	#obtain if the text contains a url.
	#if so, returns a shorter version of text.
	#otherwise, returns the same text.
	_obtainParts = (text)->
		#We have create a regExp to find the get parameters.
		paramRegexp = ///
				(
				[\?\&]				#optional ? o & instead
				([\-\+;%@\.\w]*) 	#the name of the parameter
				=
				([\-\+;%@\.\w]*)	#the value of the parameter
				*)					#...a set of elements
			///g                    #global
		text.match paramRegexp

	#the function to obtain the parts to beautify
	beautifier = (text)->
		text = _trim text
		parameters = _obtainParts text
		#Returns an Array of parameters...
		_.map( parameters, (parameter)->
			#where each parameter is an object with name and value
			[name, value] = parameter.split "="
			name = name.slice 1
			return {
				name: name
				value: value
			}
		, this)
		

)