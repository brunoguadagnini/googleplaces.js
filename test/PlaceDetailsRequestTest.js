var assert = new require("assert");

var PlaceSearch = require("../lib/PlaceSearch.js");
var PlaceDetailsRequest = require("../lib/PlaceDetailsRequest.js");
var config = require("./config.js");

var placeSearch = new PlaceSearch(config.apiKey, config.outputFormat);
var placeDetailsRequest = new PlaceDetailsRequest(config.apiKey, config.outputFormat);

var parameters = {
  location:[-33.8670522, 151.1957362],
  types:"doctor"
};

placeSearch(parameters, function (response) {
  placeDetailsRequest({reference:response.results[0].reference}, function (response) {
    assert.equal(response.status, "OK", "Place details request response status is OK");
  });
});