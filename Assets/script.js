//create a var to save result "cityname" from a search
//create a key to a pet finder
//create a key to a truewayplaces
//make an ajax request with petfinder to bring out locations of organizations
var userInput; //after test should be exchanged for citname
var parkArray = [];
var lat;
var lon;
// var address=[]

//get city name from input and do all function (KC)
$("form").submit(function (event) {
  $("#parkCards").empty();
  $("#storeCards").empty();

  event.preventDefault();
  userInput = $("input").val().trim();
  console.log(userInput);

  findOrganization();
  findPark();
  findStore();
});

// $("input").on("click", function (event) {
//   event.preventDefault();

//   var cityname = $("input").val().trim();
//   return cityname;
// });
// //=======================ADD KEY "ENTER" AS A TRIGGER
// $("input").on("keypress", function (event) {
//   if (event.which === 13 || event.keyCode === 13) {
//     var cityname = $("input").val().trim();
//     return cityname;
//   }
// });

function findOrganization() {
  var pf = new petfinder.Client({
    apiKey: "vYNkq3wbvswUKkr81aYrKbMyaGgd2JHx8S47lGH37GfkUoqgtm",
    secret: "tXoLVsBVrwoO8foqw23nd1AcDfLyI4EJNYVnrxE9",
  });
  var city = userInput;

  pf.organization.search({ query: city }).then((resp) => {
    console.log(resp);
    // Do something with resp.data.organizations

    var listLength = resp.data.organizations.length;
    console.log(listLength);

    for (var i = 0; i < listLength; i++) {
      var newAdoptionOrgCard = $('<div class="card">');

      var address = [];
      var street = resp.data.organizations[i].address.address1;
      var city = resp.data.organizations[i].address.city;
      var state = resp.data.organizations[i].address.state;
      var postcode = resp.data.organizations[i].address.postcode;
      if (street !== null || street !== "") {
        address.push(street);
      }
      if (city !== null || city !== "") {
        address.push(city);
      }
      if (state !== null || state !== "") {
        address.push(state);
      }
      if (postcode !== null || postcode !== "") {
        address.push(postcode);
      }
      console.log(address);

      // var name = ;
      var name = $("<h2>").text(resp.data.organizations[i].name);
      $(newAdoptionOrgCard).append(name);

      var phone = $('<h3 class="park-phone-1">').text(
        resp.data.organizations[i].phone
      );
      if (phone !== null || phone !== "") {
        $(newAdoptionOrgCard).append(phone);
      }
      var email = $('</h3><h3 class="park-link-1">').text(
        resp.data.organizations[i].email
      );
      if (email !== null || email !== "") {
        $(newAdoptionOrgCard).append(email);
      }
      var addressInfo = $("<h3 class='park-address-1'>").text(address);
      $(newAdoptionOrgCard).append(addressInfo);

      //======================ADDING A DOG IMG
      // var queryURL =
      //   "https://api.giphy.com/v1/gifs/random?api_key=U6VCGpL2YUv20Ogbx5MUqBXnuarsa34Q&tag=dogs";
      // $.ajax({
      //   url: queryURL,
      //   method: "GET",
      // }).then(function (response) {
      //   // console.log(“=====dog imgs=====“);
      //   // console.log(response);
      //   var imageUrl = response.data.fixed_width_small_url;
      //   $(`#dog` + i).attr("src", imageUrl);
      //   $("img").attr("alt", "dog image");

      //  var dogImg= $('<div class="media"><div class="media-left"><figure class="image is-96x96"><img id=dog${i}></figure></div>')
      //  $(newAdoptionOrgCard).append(dogImg)

      $("#adoptionCards").append(newAdoptionOrgCard);

      // })
    }
  });
}

//park
function findPark() {
  var parkStorage = JSON.parse(localStorage.getItem(userInput + "_park"));
  console.log("function findPark()");
  if (parkStorage !== null) {
    console.log("if");
    parkArray = parkStorage;
    renderParkList();
  } else {
    console.log("else");
    ajaxPark();
  }
}

function ajaxPark() {
  console.log("ajaxPark");
  console.log(userInput);
  var settings = {
    url:
      "https://api.opencagedata.com/geocode/v1/json?q=" +
      userInput +
      "&key=3b446aa27f154ce1ba029aa576b449b1",
    method: "GET",
  };
  $.ajax(settings).done(function (response) {
    // console.log(response);
    var lat = response.results[0].geometry.lat;
    var lon = response.results[0].geometry.lng;
    console.log("lat: " + lat);
    console.log("lon: " + lon);
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
        "x-rapidapi-key": "cfef53d7cdmsh72ff2dcd84c03fap109e6djsn9398e97c0e46",
      },
    };
    $.ajax(settings).done(function (response) {
      // console.log("=====Park=====");
      // console.log(response);
      localStorage.setItem(
        userInput + "_park",
        JSON.stringify(response.results)
      );
    });
  });
  var parkStorage = JSON.parse(localStorage.getItem("city_park"));
  parkArray = parkStorage;
  renderParkList();
}

function renderParkList() {
  console.log("function renderParkList()");
  for (let i = 0; i < 10; i++) {
    console.log("for loop" + i);
    console.log(parkArray[i]);
    // Dog park contents
    var newParkCard = $(
      `<div class="card"> <div class="card-content"><div class="media"><div class="media-left"><figure class="image is-96x96"><img id=dog${i}></figure></div><div class="media-content"><h2 class="title is-4 park-1">` +
        parkArray[i].name +
        '</h2><h3 class="park-address-1">' +
        parkArray[i].address +
        '</h3><h3 class="park-phone-1">' +
        parkArray[i].phone_number +
        '</h3><h3 class="park-link-1">' +
        parkArray[i].website +
        "</h3></div></div><br />"
    );
    $("#parkCards").append(newParkCard);
    // Dog images
    var imageUrl = `images/image${i}.jpg`;
    $(`#dog` + i).attr("src", imageUrl);
    $("img").attr("alt", "dog image");
  }
}

//pet store
function findStore() {
  var storeStorage = JSON.parse(localStorage.getItem(userInput + "_store"));
  console.log("function findStore()");
  if (storeStorage !== null) {
    console.log("if");
    storeArray = storeStorage;
    renderStoreList();
  } else {
    console.log("else");
    ajaxStore();
  }
}

function ajaxStore() {
  console.log("ajaxStore");
  console.log(userInput);
  var settings = {
    url:
      "https://api.opencagedata.com/geocode/v1/json?q=" +
      userInput +
      "&key=3b446aa27f154ce1ba029aa576b449b1",
    method: "GET",
  };
  $.ajax(settings).done(function (response) {
    // console.log(response);
    var lat = response.results[0].geometry.lat;
    var lon = response.results[0].geometry.lng;
    console.log("lat: " + lat);
    console.log("lon: " + lon);
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
        "x-rapidapi-key": "cfef53d7cdmsh72ff2dcd84c03fap109e6djsn9398e97c0e46",
      },
    };
    $.ajax(settings).done(function (response) {
      // console.log("=====Park=====");
      // console.log(response);
      localStorage.setItem(
        userInput + "_store",
        JSON.stringify(response.results)
      );
    });
  });
  var storeStorage = JSON.parse(localStorage.getItem(userInput + "_store"));
  storeArray = storeStorage;
  renderStoreList();
}

function renderStoreList() {
  console.log("function renderStoreList()");
  for (let i = 0; i < 10; i++) {
    console.log("for loop" + i);
    console.log(storeArray[i]);
    // Dog park contents
    var newStoreCard = $(
      `<div class="card"> <div class="card-content"><div class="media"><div class="media-left"><figure class="image is-96x96"><img id=dog${i}></figure></div><div class="media-content"><h2 class="title is-4 park-1">` +
        storeArray[i].name +
        '</h2><h3 class="store-address-1">' +
        storeArray[i].address +
        '</h3><h3 class="store-phone-1">' +
        storeArray[i].phone_number +
        '</h3><h3 class="store-link-1">' +
        storeArray[i].website +
        "</h3></div></div><br />"
    );
    $("#storeCards").append(newStoreCard);
    // Dog images
    var imageUrl = `images/image${i}.jpg`;
    $(`#dog` + i).attr("src", imageUrl);
    $("img").attr("alt", "dog image");
  }
}
