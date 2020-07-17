
//create a var to save result "cityname" from a search
//create a key to a pet finder
//create a key to a truewayplaces
//make an ajax request with petfinder to bring out locations of organizations



var pf = new petfinder.Client({apiKey: "vYNkq3wbvswUKkr81aYrKbMyaGgd2JHx8S47lGH37GfkUoqgtm", secret: "tXoLVsBVrwoO8foqw23nd1AcDfLyI4EJNYVnrxE9"});
var city = "Minneapolis"
pf.organization.search({query: city})
  .then(resp => {
      console.log(resp)
    // Do something with resp.data.organizations
    var listLength = resp.data.organizations.length
    console.log(listLength)
    for (var i = 1; i < listLength; i++) {

      var newCard =$("<div class='card'>")
      var newContent=$("<div class='media-content'>")
      $(newContent).append(newCard)
      var name = resp.data.organizations[i].name
  
      var email=resp.data.organizations[i].email
      var  address=JSON.stringify(resp.data.organizations[i].address)
      var phoneNumber=resp.data.organizations[i].phone
      console.log(name)
      console.log(email)
      console.log(phoneNumber)
      console.log(address)
      var orgName =$("<h2 class='title is-4 adoption-1'>")
      $(orgName).text(name)
      var orgAddress =$("<h3 class='adoption-address-1'>")
      $(orgAddress).text(address)
      var orgPhone=$("<h3 'adoption-phone-1'>")
      $(orgPhone).text(phoneNumber)
      var orgEmail =$("<h3 'adoption-link-1'>")
      $(orgEmail).text(email)


      $(newCard).append(orgName)
      $(newCard).append(orgEmail)
      $(newCard).append(orgAddress)
      $(newCard).append(orgPhone)
    }
  });





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

