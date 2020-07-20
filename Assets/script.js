//create a var to save result "cityname" from a search
//create a key to a pet finder
//create a key to a truewayplaces
//make an ajax request with petfinder to bring out locations of organizations
//after test should be exchanged for citname

var userInput;
var parkArray = [];
var storeArray = [];
var imgList = [
  "images/image0.jpg",
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
  "images/image4.jpg",
  "images/image5.jpg",
  "images/image6.jpg",
  "images/image7.jpg",
  "images/image8.jpg",
  "images/image9.jpg",
  "images/image10.jpg",
];

$(function () {
  //get city name and generate all cards when reloaded
  userInput = localStorage.getItem("user-input");
  if (userInput !== null) {
    findOrganization();
    findPark();
    findStore();
  }
});

//get city name from input and do all function (KC)
$("form").submit(function (event) {
  //empty all elements before generate

  $("#parkCards").empty();
  $("#storeCards").empty();
  $("#adoptionCards").empty();

  event.preventDefault();
  userInput = $("input").val().trim();
  console.log(userInput);
  //store city name into localstorage
  localStorage.setItem("user-input", userInput);

  findOrganization();
  findPark();
  findStore();
});

//organization==========================================================
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
      var newAdoptionCardContent = $('<div class="card-content">');
      var media = $("<div class='media'>");
      var mediaContent = $("<div class='media-content'>");
      var dogImg = $(
        '<div class="media-left"><figure class="image is-96x96"><img class ="dog" src=' +
          imgList[Math.floor(Math.random() * imgList.length)] +
          ">"
      );

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

      var name = $("<h2 class='title is-4 park-1'>").text(
        resp.data.organizations[i].name
      );
      $(mediaContent).append(name);
      var phone = $('<h3 class="park-phone-1">').text(
        resp.data.organizations[i].phone
      );
      if (phone !== null || phone !== "") {
        $(mediaContent).append(phone);
      }
      var email = $('</h3><h3 class="park-link-1">').text(
        resp.data.organizations[i].email
      );
      if (email !== null || email !== "") {
        $(mediaContent).append(email);
      }
      var addressInfo = $("<h3 class='park-address-1'>").text(address);
      $(mediaContent).append(addressInfo);

      $(".dog").attr("alt", "dog image");
      $(media).append(dogImg);
      $(media).append(mediaContent);
      $(newAdoptionCardContent).append(media);
      $(newAdoptionOrgCard).append(newAdoptionCardContent);
      $("#adoptionCards").append(newAdoptionOrgCard);
    }
  });
}

//park==========================================================
function findPark() {
  //get search results array
  var parkStorage = JSON.parse(localStorage.getItem(userInput + "_park"));
  console.log("function findPark()");
  //if there's a data in local storage, gengerate park list
  if (parkStorage !== null) {
    console.log("if");
    parkArray = parkStorage;
    renderParkList();
  } else {
    // if there's no data in a local storage, go to API
    console.log("else");
    ajaxPark();
  }
}

function ajaxPark() {
  console.log("ajaxPark");
  console.log(userInput);
  //setup API for getting searched geolocation
  var settings = {
    url:
      "https://api.opencagedata.com/geocode/v1/json?q=" +
      userInput +
      "&key=3b446aa27f154ce1ba029aa576b449b1",
    method: "GET",
  };
  $.ajax(settings).done(function (response) {
    var lat = response.results[0].geometry.lat;
    var lon = response.results[0].geometry.lng;
    console.log("lat: " + lat);
    console.log("lon: " + lon);
    //setup API for searching parks
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
      //store search results into local storage
      localStorage.setItem(
        userInput + "_park",
        JSON.stringify(response.results)
      );
      console.log("JSON 完了");
    });
  });
  //timer for wating API response time
  setTimeout(function () {
    var parkStorage = JSON.parse(localStorage.getItem(userInput + "_park"));
    parkArray = parkStorage;
    console.log("parkArrayの中味" + parkArray);
    renderParkList();
  }, 2000);
}

function renderParkList() {
  console.log("function renderParkList()");
  //generate content cards
  for (let i = 0; i < 10; i++) {
    console.log("for loop" + i);
    console.log(parkArray[i]);

    var address = "";
    if (parkArray[i].address) {
      address = parkArray[i].address;
    }

    var phone = "";
    if (parkArray[i].phone_number) {
      var p = parkArray[i].phone_number;
      phone =
        p[0] +
        p[1] +
        " (" +
        p[2] +
        p[3] +
        p[4] +
        ") " +
        p[5] +
        p[6] +
        p[7] +
        " - " +
        p[8] +
        p[9] +
        p[10] +
        p[11];
    }
    var website = "";
    if (parkArray[i].website) {
      website = parkArray[i].website;
    }

    // Dog park contents
    var newParkCard = $(
      `<div class="card"> <div class="card-content"><div class="media"><div class="media-left"><figure class="image is-96x96"><img id=dog${i}></figure></div><div class="media-content"><h2 class="title is-4 park-1">` +
        parkArray[i].name +
        '</h2><h3 class="park-address-1">' +
        address +
        '</h3><h3 class="park-phone-1">' +
        phone +
        '</h3><h3 class="store-link-1"><a href=' +
        website +
        ">" +
        website +
        "</a></h3></div></div><br />"
    );
    $("#parkCards").append(newParkCard);
    // Dog images
    var imageUrl = `images/image${i}.jpg`;
    $(`#dog` + i).attr("src", imageUrl);
    $("img").attr("alt", "dog image");
  }
}

//pet store==========================================================
function findStore() {
  //get search results array
  var storeStorage = JSON.parse(localStorage.getItem(userInput + "_store"));
  console.log("function findStore()");
  //if there's a data in local storage, gengerate park list
  if (storeStorage !== null) {
    console.log("if");
    storeArray = storeStorage;
    renderStoreList();
  } else {
    // if there's no data in a local storage, go to API
    console.log("else");
    ajaxStore();
  }
}

function ajaxStore() {
  console.log("ajaxStore");
  console.log(userInput);
  //setup API for getting earched geolocation
  var settings = {
    url:
      "https://api.opencagedata.com/geocode/v1/json?q=" +
      userInput +
      "&key=3b446aa27f154ce1ba029aa576b449b1",
    method: "GET",
  };
  $.ajax(settings).done(function (response) {
    var lat = response.results[0].geometry.lat;
    var lon = response.results[0].geometry.lng;
    console.log("lat: " + lat);
    console.log("lon: " + lon);
    //setup API for searhing parks
    var inputPlace = "pet_store"; //pet_store, park
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
  //timer for wating API response time
  setTimeout(function () {
    var storeStorage = JSON.parse(localStorage.getItem(userInput + "_store"));
    storeArray = storeStorage;
    renderStoreList();
  }, 2000);
}

function renderStoreList() {
  console.log("function renderStoreList()");
  //generate content cards
  for (let i = 0; i < 10; i++) {
    console.log("for loop" + i);
    console.log(storeArray[i]);
    // Dog park contents
    var address = "";
    if (storeArray[i].address) {
      address = storeArray[i].address;
    }

    var phone = "";
    if (storeArray[i].phone_number) {
      var p = storeArray[i].phone_number;
      phone =
        p[0] +
        p[1] +
        " (" +
        p[2] +
        p[3] +
        p[4] +
        ") " +
        p[5] +
        p[6] +
        p[7] +
        " - " +
        p[8] +
        p[9] +
        p[10] +
        p[11];
    }
    var website = "";
    if (storeArray[i].website) {
      website = storeArray[i].website;
    }
    var newStoreCard = $(
      `<div class="card"> <div class="card-content"><div class="media"><div class="media-left"><figure class="image is-96x96"><img id=dog${i}></figure></div><div class="media-content"><h2 class="title is-4 park-1">` +
        storeArray[i].name +
        '</h2><h3 class="store-address-1">' +
        address +
        '</h3><h3 class="store-phone-1">' +
        phone +
        '</h3><h3 class="store-link-1"><a href=' +
        website +
        ">" +
        website +
        "</a></h3></div></div><br />"
    );
    $("#storeCards").append(newStoreCard);
    // Dog images
    var imageUrl = `images/image${i}.jpg`;
    $(`#dog` + i).attr("src", imageUrl);
    $("img").attr("alt", "dog image");
  }
}
