define(["main", "mainRouter", "Backbone", "jQuery"], (mainView, mainRouter, Backbone, $)->
    #init the DOM loader
    $(()->
        'use strict'
        #init the app
        new mainView()
        #init the router
        new mainRouter()
        Backbone.history.start();
    )
)