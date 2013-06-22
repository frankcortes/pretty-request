define(["Backbone", "modules/main/models/headerModel", "src/util/dataBeautifier", "src/util/exampleGenerator"], ( Backbone, headerModel, beautifier, exampleGenerator)->
	#Creates a class that extends Backbone.router
	class MainRouter extends Backbone.Router
		routes: {
			"example/:id": "generateRandomExample"
		}
		generateRandomExample: ()->
			content = exampleGenerator()
			params = beautifier(content)
			headerModel.save(
				content: content
				params: params
			)
)