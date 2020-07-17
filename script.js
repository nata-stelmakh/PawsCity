
<<<<<<< HEAD
// //create a var to save result "cityname" from a search
// //create a key to a pet finder
// //create a key to a truewayplaces
// //make an ajax request with petfinder to bring out locations of organizations



// var pf = new petfinder.Client({apiKey: "vYNkq3wbvswUKkr81aYrKbMyaGgd2JHx8S47lGH37GfkUoqgtm", secret: "tXoLVsBVrwoO8foqw23nd1AcDfLyI4EJNYVnrxE9"});
// var city = "Minneapolis"
// pf.organization.search({query: city})
//   .then(resp => {
//       console.log(resp)
//     // Do something with resp.data.organizations
//     var listLength = resp.data.organizations.length
//     console.log(listLength)
//     for (var i = 1; i < listLength; i++) {

//       var newCard =$("<div class='card'>")
//       var newContent=$("<div class='media-content'>")
//       $(newContent).append(newCard)
//       var name = resp.data.organizations[i].name
  
//       var email=resp.data.organizations[i].email
//       var  address=JSON.stringify(resp.data.organizations[i].address)
//       var phoneNumber=resp.data.organizations[i].phone
//       console.log(name)
//       console.log(email)
//       console.log(phoneNumber)
//       console.log(address)
//       var orgName =$("<h2 class='title is-4 adoption-1'>")
//       $(orgName).text(name)
//       var orgAddress =$("<h3 class='adoption-address-1'>")
//       $(orgAddress).text(address)
//       var orgPhone=$("<h3 'adoption-phone-1'>")
//       $(orgPhone).text(phoneNumber)
//       var orgEmail =$("<h3 'adoption-link-1'>")
//       $(orgEmail).text(email)


//       $(newCard).append(orgName)
//       $(newCard).append(orgEmail)
//       $(newCard).append(orgAddress)
//       $(newCard).append(orgPhone)
//     }
//   });





// function findLocation() {
//   var userInput = "new york";
//   var lat;
//   var lon;

//   var settings = {
//     url:
//       "https://api.opencagedata.com/geocode/v1/json?q=" +
//       userInput +
//       "&key=3b446aa27f154ce1ba029aa576b449b1",
//     method: "GET",
//   };

//   $.ajax(settings).done(function (response) {
//     console.log(response);
//     console.log("lat: " + response.results[0].geometry.lat);
//     console.log("lon: " + response.results[0].geometry.lng);
//     lat = response.results[0].geometry.lat;
//     lon = response.results[0].geometry.lng;
//     findPlace();
//   });
// }

// function findPlace() {
//   var inputPlace = "park"; //pet store, park

//   var settings = {
//     async: true,
//     crossDomain: true,
//     url:
//       "https://trueway-places.p.rapidapi.com/FindPlacesNearby?type=" +
//       inputPlace +
//       "&radius=10000&language=en&location=" +
//       lat +
//       "%252C" +
//       lon,

//     method: "GET",
//     headers: {
//       "x-rapidapi-host": "trueway-places.p.rapidapi.com",
//       "x-rapidapi-key": "33220dbdedmsh5499ccf0fb9b28fp11bb85jsn968ac695016c",
//     },
//   };

//   $.ajax(settings).done(function (response) {
//     console.log(response);
//   });
// }




// test code
//create a var to save result “cityname” from a search
//create a key to a pet finder
//create a key to a truewayplaces
//make an ajax request with petfinder to bring out locations of organizations
// var pf = new petfinder.Client({
//   apiKey: “vYNkq3wbvswUKkr81aYrKbMyaGgd2JHx8S47lGH37GfkUoqgtm”,
//   secret: “tXoLVsBVrwoO8foqw23nd1AcDfLyI4EJNYVnrxE9”,
// });
// var city = “Minneapolis”;
// pf.organization.search({ query: city }).then((resp) => {
//   console.log(resp);
//   // Do something with resp.data.organizations
//   var listLength = resp.data.organizations.length;
//   console.log(listLength);
//   for (var i = 1; i < listLength; i++) {
//     var newCard = $(“<div class=‘card’>“);
//     var newContent = $(“<div class=‘media-content’>“);
//     $(newContent).append(newCard);
//     var name = resp.data.organizations[i].name;
//     var email = resp.data.organizations[i].email;
//     var address = JSON.stringify(resp.data.organizations[i].address);
//     var phoneNumber = resp.data.organizations[i].phone;
//     console.log(name);
//     console.log(email);
//     console.log(phoneNumber);
//     console.log(address);
//     var orgName = $(“<h2 class=‘title is-4 adoption-1’>“);
//     $(orgName).text(name);
//     var orgAddress = $(“<h3 class=‘adoption-address-1’>“);
//     $(orgAddress).text(address);
//     var orgPhone = $(“<h3 ‘adoption-phone-1’>“);
//     $(orgPhone).text(phoneNumber);
//     var orgEmail = $(“<h3 ‘adoption-link-1’>“);
//     $(orgEmail).text(email);
//     $(newCard).append(orgName);
//     $(newCard).append(orgEmail);
//     $(newCard).append(orgAddress);
//     $(newCard).append(orgPhone);
//   }
// });
var userInput = “new york”;
var lat;
var lon;
findLocationPark();
findLocationShop();
// $(“input”).submit(function () {
=======
//create a var to save result "cityname" from a search
//create a key to a pet finder
//create a key to a truewayplaces
//make an ajax request with petfinder to bring out locations of organizations
var userInput = "new york";
var lat
var lon
function findOrganization (){
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
   
    var newAdoptionOrgCard = $(
      `<div class="card"> <div class="card-content"><div class="media"><div class="media-left"><figure class="image is-96x96"><img id=dog${i}></figure></div><div class="media-content"><h2 class="title is-4 park-1">` +
       resp.data.organizations[i].name +
        '</h2><h3 class="park-address-1">' +
        + JSON.stringify(resp.data.organizations[i].address)+
        '</h3><h3 class="park-phone-1">' +
       resp.data.organizations[i].phone +
        '</h3><h3 class="park-link-1">' +
       resp.data.organizations[i].email +
        "</h3></div></div><br />"
    );
  
    $("#adoptionCards").append(newAdoptionOrgCard);
    
    }
  
  })
}

findOrganization();

findLocationPark();
findLocationShop();
// $("input").submit(function () {
>>>>>>> master
//   userInput = input.val();
//   console.log(userInput);
// });
function findLocationPark() {
  var settings = {
    url:
      “https://api.opencagedata.com/geocode/v1/json?q=” +
      userInput +
      “&key=3b446aa27f154ce1ba029aa576b449b1",
    method: “GET”,
  };
  $.ajax(settings).done(function (response) {
    // console.log(response);
    lat = response.results[0].geometry.lat;
    lon = response.results[0].geometry.lng;
<<<<<<< HEAD
    // console.log(“lat: ” + lat);
    // console.log(“lon: ” + lon);
=======
    // console.log("lat: " + lat);
    // console.log("lon: " + lon);
>>>>>>> master
    findPark();
  });
}
function findLocationShop() {
  var settings = {
    url:
<<<<<<< HEAD
      “https://api.opencagedata.com/geocode/v1/json?q=” +
      userInput +
      “&key=3b446aa27f154ce1ba029aa576b449b1”,
    method: “GET”,
=======
      "https://api.opencagedata.com/geocode/v1/json?q=" +
      userInput +
      "&key=3b446aa27f154ce1ba029aa576b449b1",
    method: "GET",
>>>>>>> master
  };
  $.ajax(settings).done(function (response) {
    // console.log(response);
    lat = response.results[0].geometry.lat;
    lon = response.results[0].geometry.lng;
    findPetShop();
  });
}
function findPark() {
<<<<<<< HEAD
  var inputPlace = “park”; //pet store, park
=======
  var inputPlace = "park"; //pet store, park
>>>>>>> master
  var settings = {
    async: true,
    crossDomain: true,
    url:
      “https://trueway-places.p.rapidapi.com/FindPlacesNearby?type=” +
      inputPlace +
      “&radius=10000&language=en&location=” +
      lat +
      “%252C” +
      lon,
<<<<<<< HEAD
    method: “GET”,
    headers: {
      “x-rapidapi-host”: “trueway-places.p.rapidapi.com”,
      “x-rapidapi-key”: “cfef53d7cdmsh72ff2dcd84c03fap109e6djsn9398e97c0e46”,
    },
  };
  $.ajax(settings).done(function (response) {
    // console.log(“=====Park=====“);
=======
    method: "GET",
    headers: {
      "x-rapidapi-host": "trueway-places.p.rapidapi.com",
      "x-rapidapi-key": "cfef53d7cdmsh72ff2dcd84c03fap109e6djsn9398e97c0e46",
    },
  };
  $.ajax(settings).done(function (response) {
    // console.log("=====Park=====");
>>>>>>> master
    // console.log(response);
    var parkArray = response.results;
    for (let i = 0; i < 10; i++) {
      // =======(Dog park contents)=====================================================
      var newParkCard = $(
<<<<<<< HEAD
        `<div class=“card”> <div class=“card-content”><div class=“media”><div class=“media-left”><figure class=“image is-96x96”><img id=dog${i}></figure></div><div class=“media-content”><h2 class=“title is-4 park-1”>` +
          parkArray[i].name +
          ‘</h2><h3 class=“park-address-1">’ +
          parkArray[i].address +
          ‘</h3><h3 class=“park-phone-1”>’ +
          parkArray[i].phone_number +
          ‘</h3><h3 class=“park-link-1">’ +
          parkArray[i].website +
          “</h3></div></div><br />”
      );
      $(“#parkContainer”).append(newParkCard);
      // =====(dog img)=======================================================
      var queryURL =
        “https://api.giphy.com/v1/gifs/random?api_key=U6VCGpL2YUv20Ogbx5MUqBXnuarsa34Q&tag=dogs”;
      $.ajax({
        url: queryURL,
        method: “GET”,
      }).then(function (response) {
        // console.log(“=====dog imgs=====“);
        // console.log(response);
        var imageUrl = response.data.fixed_width_small_url;
        $(`#dog` + i).attr(“src”, imageUrl);
        $(“img”).attr(“alt”, “dog image”);
=======
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
      $("#parkContainer").append(newParkCard);
      // =====(dog img)=======================================================
      var queryURL =
        "https://api.giphy.com/v1/gifs/random?api_key=U6VCGpL2YUv20Ogbx5MUqBXnuarsa34Q&tag=dogs";
      $.ajax({
        url: queryURL,
        method: "GET",
      }).then(function (response) {
        // console.log("=====dog imgs=====");
        // console.log(response);
        var imageUrl = response.data.fixed_width_small_url;
        $(`#dog` + i).attr("src", imageUrl);
        $("img").attr("alt", "dog image");
>>>>>>> master
        // ============================================================
      });
    }
  });
}
function findPetShop() {
<<<<<<< HEAD
  var inputPlace = “pet_store”; //pet store, park
=======
  var inputPlace = "pet_store"; //pet store, park
>>>>>>> master
  var settings = {
    async: true,
    crossDomain: true,
    url:
<<<<<<< HEAD
      “https://trueway-places.p.rapidapi.com/FindPlacesNearby?type=” +
      inputPlace +
      “&radius=10000&language=en&location=” +
      lat +
      “%252C” +
      lon,
    method: “GET”,
    headers: {
      “x-rapidapi-host”: “trueway-places.p.rapidapi.com”,
      “x-rapidapi-key”: “cfef53d7cdmsh72ff2dcd84c03fap109e6djsn9398e97c0e46”,
    },
  };
  $.ajax(settings).done(function (response) {
    // console.log(“=====Pet Shop=====“);
=======
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
    // console.log("=====Pet Shop=====");
>>>>>>> master
    // console.log(response);
    var shopArray = response.results;
    for (let i = 0; i < 10; i++) {
      // =======(Dog park contents)=====================================================
      var newParkCard = $(
<<<<<<< HEAD
        `<div class=“card”> <div class=“card-content”><div class=“media”><div class=“media-left”><figure class=“image is-96x96”><img id=dog${i}></figure></div><div class=“media-content”><h2 class=“title is-4 store-1”>` +
          shopArray[i].name +
          ‘</h2><h3 class=“store-address-1">’ +
          shopArray[i].address +
          ‘</h3><h3 class=“store-phone-1”>’ +
          shopArray[i].phone_number +
          ‘</h3><h3 class=“store-link-1">’ +
          shopArray[i].website +
          “</h3></div></div><br />”
      );
      $(“#storeContainer”).append(newParkCard);
      // =====(dog img)=======================================================
      var queryURL =
        “https://api.giphy.com/v1/gifs/random?api_key=U6VCGpL2YUv20Ogbx5MUqBXnuarsa34Q&tag=dogs”;
      $.ajax({
        url: queryURL,
        method: “GET”,
      }).then(function (response) {
        // console.log(“=====dog imgs=====“);
        // console.log(response);
        var imageUrl = response.data.fixed_width_small_url;
        $(`#dog` + i).attr(“src”, imageUrl);
        $(“img”).attr(“alt”, “dog image”);
=======
        `<div class="card"> <div class="card-content"><div class="media"><div class="media-left"><figure class="image is-96x96"><img id=dog${i}></figure></div><div class="media-content"><h2 class="title is-4 store-1">` +
          shopArray[i].name +
          '</h2><h3 class="store-address-1">' +
          shopArray[i].address +
          '</h3><h3 class="store-phone-1">' +
          shopArray[i].phone_number +
          '</h3><h3 class="store-link-1">' +
          shopArray[i].website +
          "</h3></div></div><br />"
      );
      $("#storeContainer").append(newParkCard);
      // =====(dog img)=======================================================
      var queryURL =
        "https://api.giphy.com/v1/gifs/random?api_key=U6VCGpL2YUv20Ogbx5MUqBXnuarsa34Q&tag=dogs";
      $.ajax({
        url: queryURL,
        method: "GET",
      }).then(function (response) {
        // console.log("=====dog imgs=====");
        // console.log(response);
        var imageUrl = response.data.fixed_width_small_url;
        $(`#dog` + i).attr("src", imageUrl);
        $("img").attr("alt", "dog image");
>>>>>>> master
        // ============================================================
      });
    }
  });
<<<<<<< HEAD
}
=======
};

>>>>>>> master
