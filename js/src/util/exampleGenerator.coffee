define(["underscore"], (_)->
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
			name: "sex"
			possibles: [ "female", "male", "indiferent" ]
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

	fixturesForUrls = [
		"http://example.com"
		"dev.example.org"
		"http://foo.com/get/people"
		"foo.bar.com"
		"http://example.org/set/person"
		""
	]

	exampleGenerator = ()->
		#obtain a concrete value for each parameter.
		example = _.map( fixturesForParams, (field)->
			randomKey = Math.floor Math.random()*field.possibles.length
			{
				name: field.name
				value: field.possibles[randomKey]
			}
		)

		randomKey = Math.floor Math.random()*fixturesForUrls.length
		randomUrl = fixturesForUrls[randomKey]

		#convert into a get request and returns this.
		_.reduce( example, (result, elem, key)->
			result + encodeURIComponent(elem.name) + "=" + encodeURIComponent(elem.value) + "&"
		, randomUrl + "?")

)
