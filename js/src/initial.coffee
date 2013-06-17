define(["main", "jQuery"], (mainView, $)->
    #init the DOM loader
    $(()->
        'use strict'
        #init the app
        new mainView()
    )
)