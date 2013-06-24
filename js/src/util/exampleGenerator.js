(function() {
  define(["underscore"], function(_) {
    var exampleGenerator, fixturesForParams, fixturesForUrls;
    fixturesForParams = [
      {
        name: "name",
        possibles: ["Frank", "Miriam", "Abel", "Joel", "David", "Joana", "Andrew", "Steffi", "Thomas", "John", "William", "Henry"]
      }, {
        name: "surname",
        possibles: ["Polite", "Smith", "Sánchez", "Reading", "Middleton", "Snow", "Van Houten", "Ford", "Dafoe", "Stark"]
      }, {
        name: "age",
        possibles: (function(min, max) {
          var v;
          v = [];
          while (min <= max) {
            v.push(min);
            min++;
          }
          return v;
        })(21, 79)
      }, {
        name: "text",
        possibles: ["A example of text.", "Another example of text.", "Yep, this is a text.", "Bye, bye ugly HTTP request.", "Now I'm happy with this."]
      }, {
        name: "job",
        possibles: ["Programmer", "Developer", "Designer", "Medieval Soldier", "Translator", "Product Manager", "Writter"]
      }, {
        name: "city",
        possibles: ["Barcelona", "Badalona", "New Jersey", "London", "Oporto", "Brasilia", "New York", "San Francisco", "Palo Alto"]
      }
    ];
    fixturesForUrls = ["http://example.com", "dev.example.org", "http://foo.com/get/people", "foo.bar.com", "https://example.org/api/set/personal", ""];
    return exampleGenerator = function() {
      var example, randomKey, randomUrl;
      example = _.map(fixturesForParams, function(field) {
        var randomKey;
        randomKey = Math.floor(Math.random() * field.possibles.length);
        return {
          name: field.name,
          value: field.possibles[randomKey]
        };
      });
      randomKey = Math.floor(Math.random() * fixturesForUrls.length);
      randomUrl = fixturesForUrls[randomKey];
      example = _.reduce(example, function(result, elem, key) {
        return result + encodeURIComponent(elem.name) + "=" + encodeURIComponent(elem.value) + "&";
      }, randomUrl + "?");
      return example = example.slice(0, -1);
    };
  });

}).call(this);
