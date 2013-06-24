define(["underscore"], (_)->
	#These fixtures generates several examples for parameters.
	fixturesForParams = [
		{
			name: "name"
			possibles: [ "Frank", "Miriam", "Abel", "Joel", "David", "Joana", "Andrew", "Steffi", "Thomas", "John", "William", "Henry"]
		}
		{
			name: "surname"
			possibles: [ "Polite", "Smith", "Sánchez", "Reading", "Middleton", "Snow", "Van Houten", "Ford", "Dafoe", "Stark" ]
		}
		{
			name: "age"
			#Creates a vector between 21 and 79
			possibles: (( min, max )->
				v = []
				while min <= max
					v.push(min)
					min++
				v
			)(21, 79)
		}
		{
			name: "text"
			possibles: [ "A example of text.", "Another example of text.", "Yep, this is a text.", "Bye, bye ugly HTTP request.", "Now I'm happy with this."]
		}
		{
			name: "job"
			possibles: [ "Programmer", "Developer", "Designer", "Medieval Soldier", "Translator", "Product Manager", "Writter" ]
		}
		{
			name: "city"
			possibles: [ "Barcelona", "Badalona", "New Jersey", "London", "Oporto", "Brasilia", "New York", "San Francisco", "Palo Alto"]
		}
	]

	#These fixtures generates several examples for urls.
	fixturesForUrls = [
		"http://example.com"
		"dev.example.org"
		"http://foo.com/get/people"
		"foo.bar.com"
		"https://example.org/api/set/personal"
		""
	]

	#This function returns a data to save in the model.
	exampleGenerator = ()->
		#obtain a concrete value for each parameter.
		example = _.map( fixturesForParams, (field)->
			randomKey = Math.floor Math.random()*field.possibles.length
			{
				name: field.name
				value: field.possibles[randomKey]
			}
		)
		#Random url too
		randomKey = Math.floor Math.random()*fixturesForUrls.length
		randomUrl = fixturesForUrls[randomKey]

		#convert into a get request and returns this.
		example = _.reduce( example, (result, elem, key)->
			result + encodeURIComponent(elem.name) + "=" + encodeURIComponent(elem.value) + "&"
		, randomUrl + "?")
		#removes the last "&"
		example = example[..-2]

)
