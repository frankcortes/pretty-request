(function() {
  define(["main", "mainRouter", "Backbone", "jQuery"], function(mainView, mainRouter, Backbone, $) {
    return $(function() {
      'use strict';
      new mainView();
      new mainRouter();
      return Backbone.history.start();
    });
  });

}).call(this);
