//create a var to save result "cityname" from a search
//create a key to a pet finder
//create a key to a truewayplaces
//make an ajax request with petfinder to bring out locations of organizations

var pf = new petfinder.Client({apiKey: "vYNkq3wbvswUKkr81aYrKbMyaGgd2JHx8S47lGH37GfkUoqgtm", secret: "tXoLVsBVrwoO8foqw23nd1AcDfLyI4EJNYVnrxE9"});

pf.animal.search()
    .then(function (response) {
        console.log(response)
        // Do something with `response.data.animals`
    })
    .catch(function (error) {
        // Handle the error
    });

pf.organization.search({location: "Minneapolis, MN"})
  .then(resp => {
      console.log(resp)
    // Do something with resp.data.organizations
  });




