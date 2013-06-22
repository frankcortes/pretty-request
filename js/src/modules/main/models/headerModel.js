(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["Backbone"], function(Backbone) {
    var headerModel, _ref;
    headerModel = (function(_super) {
      __extends(headerModel, _super);

      function headerModel() {
        _ref = headerModel.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      headerModel.prototype.sync = function() {};

      return headerModel;

    })(Backbone.Model);
    return new headerModel();
  });

}).call(this);
