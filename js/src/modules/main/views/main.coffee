define(["Backbone",
	"modules/main/models/headerModel",
	"src/util/dataBeautifier",
	"hbs!modules/main/templates/main"
	], (Backbone, headerModel, beautifier, mainTmpl)->

	class MainView extends Backbone.View
		el:"body"

		events: {
			"click #beautify": "beautifyTextarea"
		}

		initialize: ()->
			_.bindAll @
			@render()

		render: ()->
			$( @$el ).html mainTmpl {}

		beautifyTextarea: (evt)->
			content = $( "#textarea-request" ).val()
			console.log content;
)