function findLocation() {
  var userInput = "new york";
  var lat;
  var lon;

  var settings = {
    url:
      "https://api.opencagedata.com/geocode/v1/json?q=" +
      userInput +
      "&key=3b446aa27f154ce1ba029aa576b449b1",
    method: "GET",
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    console.log("lat: " + response.results[0].geometry.lat);
    console.log("lon: " + response.results[0].geometry.lng);
    lat = response.results[0].geometry.lat;
    lon = response.results[0].geometry.lng;
    findPlace();
  });
}

function findPlace() {
  var inputPlace = "park"; //pet store, park

  var settings = {
    async: true,
    crossDomain: true,
    url:
      "https://trueway-places.p.rapidapi.com/FindPlacesNearby?type=" +
      inputPlace +
      "&radius=10000&language=en&location=" +
      lat +
      "%252C" +
      lon,

    method: "GET",
    headers: {
      "x-rapidapi-host": "trueway-places.p.rapidapi.com",
      "x-rapidapi-key": "33220dbdedmsh5499ccf0fb9b28fp11bb85jsn968ac695016c",
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}
