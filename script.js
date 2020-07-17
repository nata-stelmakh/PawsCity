var userInput = "New york";
var lat;
var lon;

findLocationPark();
// findLocationShop();
// $("input").submit(function () {
//   userInput = input.val();
//   console.log(userInput);
// });

function findLocationPark() {
  var settings = {
    url:
      "https://api.opencagedata.com/geocode/v1/json?q=" +
      userInput +
      "&key=3b446aa27f154ce1ba029aa576b449b1",
    method: "GET",
  };

  $.ajax(settings).done(function (response) {
    console.log(response);

    lat = response.results[0].geometry.lat;
    lon = response.results[0].geometry.lng;
    console.log("lat: " + lat);
    console.log("lon: " + lon);
    findPark();
  });
}

// function findLocationShop() {
//   var settings = {
//     url:
//       "https://api.opencagedata.com/geocode/v1/json?q=" +
//       userInput +
//       "&key=3b446aa27f154ce1ba029aa576b449b1",
//     method: "GET",
//   };

//   $.ajax(settings).done(function (response) {
//     // console.log(response);

//     lat = response.results[0].geometry.lat;
//     lon = response.results[0].geometry.lng;
//     findPetShop();
//   });
// }

function findPark() {
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
      "x-rapidapi-key": "4eb5968d74msh7a28f9eece9c17ap13c40djsnde5aaab47e32",
    },
  };

  $.ajax(settings).done(function (response) {
    console.log("=====Park=====");
    console.log(response);
    var parkArray = response.results;
    for (let i = 0; i < parkArray.length; i++) {
      // ============================================================
      var newParkCard = $(
        `<div class="card"> <div class="card-content"><div class="media" id="dogMedia"><div class="media-left" id="newParkFigure"><figure class="image is-96x96" id="dogImg"><img id=dog${i}></figure></div><div class="media-content" id="newParkContent"><h2 class="title is-4 park-1">` +
          parkArray[i].name +
          '</h2><h3 class="park-address-1">' +
          parkArray[i].address +
          '</h3><h3 class="park-phone-1">' +
          parkArray[i].phone_number +
          '</h3><h3 class="park-link-1">' +
          parkArray[i].website +
          "</h3></div></div>"
      );

      // ============================================================
      // var newParkCard = $(
      //   '<div class="card"><div class="card-content"><div class="media">'
      // );
      // var newParkFigure = $(
      //   `<div class="media-left"><figure class="image is-96x96"><img id=dog${i}>`
      // );

      // ============================================================
      // var newParkContent = $('<div class="media-content" id="newParkContent">');

      // var name = $(
      //   '<h2 class="title is-4 park-1">' + parkArray[i].name + "</h2>"
      // );
      // var adress = $(
      //   '<h3 class="park-address-1">Adress: ' + parkArray[i].address + "</h3>"
      // );
      // var phone = $(
      //   '<h3 class="park-phone-1">Phone: ' + parkArray[i].phone_number + "</h3>"
      // );

      // var website = $(
      //   '<h3 class="park-link-1">Website: ' +
      //     parkArray[i].website +
      //     "</h3><br />"
      // );
      // newParkContent.append(name, adress, phone, website);

      // $("#dogMedia").append(newParkFigure, newParkContent);

      $("#parkContainer").append(newParkCard);

      // =====(dog img)=======================================================
      var queryURL =
        "https://api.giphy.com/v1/gifs/random?api_key=U6VCGpL2YUv20Ogbx5MUqBXnuarsa34Q&tag=dogs";

      $.ajax({
        url: queryURL,
        method: "GET",
      }).then(function (response) {
        console.log("=====dog imgs=====");
        console.log(response);
        var imageUrl = response.data.fixed_width_small_url;
        $(`#dog` + i).attr("src", imageUrl);
        $("img").attr("alt", "dog image");
        // ============================================================
      });
    }
  });
}

function findPetShop() {
  var inputPlace = "pet_store"; //pet store, park

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
      "x-rapidapi-key": "4eb5968d74msh7a28f9eece9c17ap13c40djsnde5aaab47e32",
    },
  };

  $.ajax(settings).done(function (response) {
    console.log("=====Pet Shop=====");
    console.log(response);
  });
}
