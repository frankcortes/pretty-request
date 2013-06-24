(function() {
  define(["Handlebars", "underscore"], function(Handlebars, _) {
    var beautifier, _obtainParts, _trim;
    _trim = function(t) {
      return t.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, '').replace(/\s+/g, ' ');
    };
    _obtainParts = function(text) {
      var paramRegexp;
      paramRegexp = /([\?\&]([\-\+;%@\.\w]*)=([\-\+;%@\.\w]*)*)/g;
      return text.match(paramRegexp);
    };
    return beautifier = function(text) {
      var parameters;
      text = _trim(text);
      parameters = _obtainParts(text);
      if (parameters == null) {
        return void 0;
      } else {
        return _.map(parameters, function(parameter) {
          var name, value, _ref;
          _ref = parameter.split("="), name = _ref[0], value = _ref[1];
          name = name.slice(1);
          return {
            name: decodeURIComponent(name),
            value: decodeURIComponent(value)
          };
        }, this);
      }
    };
  });

}).call(this);
