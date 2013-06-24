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

      MainView.prototype.model = headerModel;

      MainView.prototype.firstTimeUsed = true;

      MainView.prototype.events = {
        "click #beautify": "beautifyTextarea"
      };

      MainView.prototype.initialize = function() {
        _.bindAll(this);
        this.model.on("change", this.render, this);
        return this.render();
      };

      MainView.prototype.render = function() {
        this.randomExample = Math.floor(Math.random() * 10000000);
        $(this.$el).html(mainTmpl(this.serializeData()));
        if (this.model.has("params") && this.firstTimeUsed) {
          this.startAnimation();
          return this.firstTimeUsed = false;
        } else if (!this.model.has("params") && this.model.has("content")) {
          return this.errorFeedback();
        }
      };

      MainView.prototype.serializeData = function() {
        return _.extend({}, this.model.attributes, {
          "firstTimeUsed": this.firstTimeUsed,
          "randomExample": this.randomExample
        });
      };

      MainView.prototype.startAnimation = function() {
        if ($(".question").hasClass("pure-u-1")) {
          setInterval(function() {
            $(".response").removeClass("hidden");
            return $(".question").css("transition", "none");
          }, 2350);
          return setInterval(function() {
            return $(".question").removeClass("pure-u-1").addClass("pure-u-1-2");
          }, 300);
        }
      };

      MainView.prototype.errorFeedback = function() {
        var $textarea;
        $textarea = $(".question").find("textarea");
        $textarea.addClass("error");
        $textarea.attr("placeholder", "Please insert a valid request.");
        $textarea.html("");
        $textarea.trigger("focus");
        return $textarea.one("keyup", this.removeErrorFeedback);
      };

      MainView.prototype.removeErrorFeedback = function() {
        var $textarea;
        $textarea = $(".question").find("textarea");
        $textarea.removeClass("error");
        return $textarea.attr("placeholder", "Enter a GET Request...");
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
