(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["Backbone", "modules/main/models/headerModel", "src/util/dataBeautifier", "hbs!modules/main/templates/main"], function(Backbone, headerModel, beautifier, mainTmpl) {
    var MainView, _ref;
    return MainView = (function(_super) {
      __extends(MainView, _super);

      function MainView() {
        _ref = MainView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      MainView.prototype.el = "body";

      MainView.prototype.events = {
        "click #beautify": "beautifyTextarea"
      };

      MainView.prototype.initialize = function() {
        _.bindAll(this);
        return this.render();
      };

      MainView.prototype.render = function() {
        return $(this.$el).html(mainTmpl({}));
      };

      MainView.prototype.beautifyTextarea = function(evt) {
        var content;
        content = $("#textarea-request").val();
        return console.log(content);
      };

      return MainView;

    })(Backbone.View);
  });

}).call(this);
