define(["Backbone",
	"modules/main/models/headerModel",
	"src/util/dataBeautifier",
	"jQuery",
	"underscore",
	"hbs!modules/main/templates/main",
	"src/util/formatter"
	], (Backbone, headerModel, beautifier, $, _, mainTmpl)->
	#A simple backbone view that shows the main page.
	class MainView extends Backbone.View
		#The element is directly the body
		el:"body"
		#The model where we are saving the info
		model: new headerModel()
		#Events when click
		events: {
			"click #beautify": "beautifyTextarea"
		}
		#Initialize the view
		initialize: ()->
			_.bindAll @
			#Reload the view if the model has changed
			@model.on("change", @render , this)
			@render()
		#render the view with parameters
		render: ()->
			$( @$el ).html mainTmpl @model.attributes
		#...if you press the button, the content must be beautifier 
		beautifyTextarea: (evt)->
			content = $( "#textarea-request" ).val()
			params = beautifier(content)
			@model.save(
				content: content
				params: params
			)
)