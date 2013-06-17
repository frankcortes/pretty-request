(function() {
  define(["main", "jQuery"], function(mainView, $) {
    return $(function() {
      'use strict';
      return new mainView();
    });
  });

}).call(this);
