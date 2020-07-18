
//create a var to save result "cityname" from a search
//create a key to a pet finder
//create a key to a truewayplaces
//make an ajax request with petfinder to bring out locations of organizations

$("input").on("click", function (event) {
  event.preventDefault();

  var cityname = $("input").val().trim();
  return cityname
});
//=======================ADD KEY "ENTER" AS A TRIGGER
$("input").on("keypress",function(event){
  if(event.which===13 || event.keyCode ===13){
    var cityname = $("input").val().trim();
    return cityname
  }

})
var userInput = "new york";//after test should be exchanged for city name
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
   var street = resp.data.organizations[i].address.address1
   var city =resp.data.organizations[i].address.city
   var state =resp.data.organizations[i].address.state 
   var postcode =resp.data.organizations[i].address.postcode
   var address = street+city+state+postcode
  //+resp.data.organizations[i].city+resp.data.organizations[i].state+resp.data.organizations[i].postcode
   console.log(address)

     var newAdoptionOrgCard =
     $('<div class="card">');
     
     var name = $('<h2 class="title is-4 park-1>').text(resp.data.organizations[i].name)
     $("<h3 class='park-address-1'>") 
  
    var phone=  $( '<h3 class="park-phone-1">').text(resp.data.organizations[i].phone) 
  
    var email =  $('</h3><h3 class="park-link-1">').text(resp.data.organizations[i].email) 
       
        var addressInfo =
        $("<h3 class='park-address-1'>").text(address)

        console.log(addressInfo)


    $("#adoptionCards").append(addressInfo);
    
    }
  
  })
}

findOrganization();

findLocationPark();
findLocationShop();
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
    // console.log(response);
    lat = response.results[0].geometry.lat;
    lon = response.results[0].geometry.lng;
    // console.log("lat: " + lat);
    // console.log("lon: " + lon);
    findPark();
  });
}
function findLocationShop() {
  var settings = {
    url:
      "https://api.opencagedata.com/geocode/v1/json?q=" +
      userInput +
      "&key=3b446aa27f154ce1ba029aa576b449b1",
    method: "GET",
  };
  $.ajax(settings).done(function (response) {
    // console.log(response);
    lat = response.results[0].geometry.lat;
    lon = response.results[0].geometry.lng;
    findPetShop();
  });
}
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
      "x-rapidapi-key": "cfef53d7cdmsh72ff2dcd84c03fap109e6djsn9398e97c0e46",
    },
  };
  $.ajax(settings).done(function (response) {
    // console.log("=====Park=====");
    // console.log(response);
    var parkArray = response.results;
    for (let i = 0; i < 10; i++) {
      // =======(Dog park contents)=====================================================
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
      "x-rapidapi-key": "cfef53d7cdmsh72ff2dcd84c03fap109e6djsn9398e97c0e46",
    },
  };
  $.ajax(settings).done(function (response) {
    // console.log("=====Pet Shop=====");
    // console.log(response);
    var shopArray = response.results;
    for (let i = 0; i < 20; i++) {
      // =======(Dog park contents)=====================================================
      var newParkCard = $(
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
        // ============================================================
      });
    }
  });
};

