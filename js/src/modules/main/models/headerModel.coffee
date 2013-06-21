define(["Backbone"], (Backbone)->
	#This is the most really simplest posible Backbone Model.
	class headerModel extends Backbone.Model
		#The method sync has been deleted to syncronize with nothing
		sync: ()->
			return
)