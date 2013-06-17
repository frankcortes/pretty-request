(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["Backbone", "modules/main/models/headerModel", "src/util/dataBeautifier", "jQuery", "underscore", "hbs!modules/main/templates/main", "src/util/formatter"], function(Backbone, headerModel, beautifier, $, _, mainTmpl) {
    var MainView, _ref;
    return MainView = (function(_super) {
      __extends(MainView, _super);

      function MainView() {
        _ref = MainView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      MainView.prototype.el = "body";

      MainView.prototype.model = new headerModel();

      MainView.prototype.events = {
        "click #beautify": "beautifyTextarea"
      };

      MainView.prototype.initialize = function() {
        _.bindAll(this);
        this.model.on("change", this.render, this);
        return this.render();
      };

      MainView.prototype.render = function() {
        return $(this.$el).html(mainTmpl(this.model.attributes));
      };

      MainView.prototype.beautifyTextarea = function(evt) {
        var content, params;
        content = $("#textarea-request").val();
        params = beautifier(content);
        return this.model.save({
          content: content,
          params: params
        });
      };

      return MainView;

    })(Backbone.View);
  });

}).call(this);
