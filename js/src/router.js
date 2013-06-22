(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["Backbone", "modules/main/models/headerModel", "src/util/dataBeautifier", "src/util/exampleGenerator"], function(Backbone, headerModel, beautifier, exampleGenerator) {
    var MainRouter, _ref;
    return MainRouter = (function(_super) {
      __extends(MainRouter, _super);

      function MainRouter() {
        _ref = MainRouter.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      MainRouter.prototype.routes = {
        "example/:id": "generateRandomExample"
      };

      MainRouter.prototype.generateRandomExample = function() {
        var content, params;
        content = exampleGenerator();
        params = beautifier(content);
        return headerModel.save({
          content: content,
          params: params
        });
      };

      return MainRouter;

    })(Backbone.Router);
  });

}).call(this);
