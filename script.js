//create a var to save result "cityname" from a search
//create a key to a pet finder
//create a key to a truewayplaces
//make an ajax request with petfinder to bring out locations of organizations
///make an ajax request to get park location and pet stores
var cityname=""

// $("#search").on("click", function (event){
//     event.preventDefault();
    
//   var cityname = $("#townSearch").val().trim();
//   $("#currentCity").empty()

  
    // var queryURL ="https://www.petfinder.com/member/us/nj/jersey-city/nj333-petfinder-test-account/?referrer_id=d7e3700b-2e07-11e9-b3f3-0800275f82b1"
    // 
    var queryURL ="https://api.petfinder.com/v2/organizations"
     $.ajax({
  url: queryURL,
  method: "GET"
   }).then(function(response) {
       console.log(response)
   })


//    var queryURL = ""
//   $.ajax({
//   url: queryURL,
//   method: "GET"
//    }).then(function(response) {
//        console.log(response)
//    })
// })
//
