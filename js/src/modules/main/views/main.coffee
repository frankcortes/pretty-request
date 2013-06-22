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
		model: headerModel
		#if it is the first time used, useful by initial animation
		firstTimeUsed: true
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
			@randomExample = Math.floor(Math.random() * 10000000) 
			$( @$el ).html mainTmpl @serializeData()
			#start the animation the first time you send correct params.
			if @model.has("params") and @firstTimeUsed
				@startAnimation()
				@firstTimeUsed = false
		#function to serialize the information sending to the view
		serializeData: ()->
			_.extend({}, @model.attributes, { "firstTimeUsed": @firstTimeUsed, "randomExample": @randomExample })
		#if any, start animation with class
		startAnimation: ()->
			#animation if question is not pure-u-1 is not needed
			if $(".question").hasClass("pure-u-1")
				setInterval(
					()->
						$(".response").removeClass("hidden")
					2350 #2 seconds in the animation plus the retard to add and remove class
				)
				setInterval(
					()->
						$(".question").removeClass("pure-u-1").addClass("pure-u-1-2")
					300
				)
		#...if you press the button, the content must be beautifier 
		beautifyTextarea: (evt)->
			content = $( "#textarea-request" ).val()
			params = beautifier(content)
			@model.save(
				content: content
				params: params
			)
)