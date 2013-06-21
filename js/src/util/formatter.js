(function() {
  define(["Handlebars", "underscore"], function(Handlebars, _) {
    return Handlebars.registerHelper("formatter", function(value) {
      var formatterTmpl, params;
      formatterTmpl = Handlebars.compile("<span class=\"formatter {{type}}\">{{value}}</span>");
      params = {
        value: value,
        type: "formatter-normal"
      };
      if (!isNaN(parseInt(value))) {
        params.type = "formatter-number";
      } else if (value === "true" || value === "false") {
        params.type = "formatter-boolean";
      } else if (_.isNull(value)) {
        params.type = "formatter-null";
      } else if (_.isUndefined(value)) {
        params.type = "formatter-undefined";
      } else if (_.isString(value)) {
        params.type = "formatter-string";
        params.value = "\"" + value + "\"";
      }
      return new Handlebars.SafeString(formatterTmpl(params));
    });
  });

}).call(this);
