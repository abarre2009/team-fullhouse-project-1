console.log("jsfile")
// var searchbutton = $("#searchbar").val().trim()
var key = "bf3bbf0ea22e7e35ceaa37777ebf0b82"
var proxy = "https://chriscastle.com/proxy/index.php?:proxy:";

// $("#getInfo").on("click", function (event) {
//     event.preventDefault()
//     $("#addressDetail").show();
//     $(".jumbotron").hide();
//     $("#getInfo").hide();
// })

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

https://www.googleapis.com/civicinfo/v2/elections
function electionInfo(searchValue, searchValue1) {
    console.log(searchValue)
    var searchURL = "https://www.googleapis.com/civicinfo/v2/voterinfo?key=AIzaSyCfJ43LRmmtdLASppmxY0NB5aIfzi5knmY&address=" + searchValue
    console.log(searchURL)
    var searchURL1 = "https://api.propublica.org/congress/v1/116/nominees/state/" + searchValue1 + ".json";
    console.log(searchURL1)
    $.ajax({

        url: searchURL,
        type: "GET"
    }).then(function (response) {
        console.log(response)
        var city = response.pollingLocations[0].address.city;
        var line1 = response.pollingLocations[0].address.line1;
        var locationName = response.pollingLocations[0].address.locationName;
        var state = response.pollingLocations[0].address.state;
        var zip = response.pollingLocations[0].address.zip;

        var candName = response.contests[0].candidates[0].name;
        var party = response.contests[0].candidates[0].party;
        var candEmail = response.contests[0].candidates[0].email;
        var candPhone = response.contests[0].candidates[0].phone;

        var candName1 = response.contests[0].candidates[1].name;
        var party1 = response.contests[0].candidates[1].party;
        var candEmail1 = response.contests[0].candidates[1].email;
        var candPhone1 = response.contests[0].candidates[1].phone;
console.log(response.contests[0].candidates[2])
       // var candName2 = response.contests[0].candidates[2].name;
       // var party2 = response.contests[0].candidates[2].party;
        //var candEmail2 = response.contests[0].candidates[2].email;
       // var candPhone2 = response.contests[0].candidates[2].phone;

        var candName3 = response.contests[0].candidates[3].name;
        var party3 = response.contests[0].candidates[3].party;
        var candEmail3 = response.contests[0].candidates[3].email;
        var candPhone3 = response.contests[0].candidates[3].phone;
            console.log("name", locationName)
        $("#pollingLocation").show();
        $("#polAddress").show();
        $("#polCity").append("City:" + " " + city);
        $("#polline1").append("Address Line:" + " " + line1);
        $("#polLocationName").append("Location Name:" + " " + locationName);
        $("#polState").append("State:" + " " + state);
        $("#polZip").append("Zip" + " " + zip);
        $('body').css('background-image', 'url(state.jpg)');

        $("#candList").show();
        $(".tile").show();
        $("#candName").append("Candidate Name:" + " " + candName);
        $("#party").append("Party:" + " " + party);
        $("#candEmail").append("Email:" + " " + candEmail);
        $("#candPhone").append("PhNo:" + " " + candPhone);

        $("#candName1").append("Candidate Name:" + " " + candName1);
        $("#party1").append("Party:" + " " + party1);
        $("#candEmail1").append("Email:" + " " + candEmail1);
        $("#candPhone1").append("PhNo:" + " " + candPhone1);

        $("#candName2").append("Candidate Name:" + " " + candName2);
        $("#party2").append("Party:" + " " + party2);
        $("#candEmail2").append("Email:" + " " + candEmail2);
        $("#candPhone2").append("PhNo:" + " " + candPhone2);

        $("#candName3").append("Candidate Name:" + " " + candName3);
        $("#party3").append("Party:" + " " + party3);
        $("#candEmail3").append("Email:" + " " + candEmail3);
        $("#candPhone3").append("PhNo:" + " " + candPhone3);

    })

    $.ajax({

        url: searchURL1,
        headers: { 'X-API-Key': 'KZ2YzzrmOQNnLGyYy9Mo4tc0Rmflw1aZDrouL2aV' },
        type: "GET"
    }).then(function (response1) {
        console.log(response1)
    })
}

$("#searchbutton").on("click", function (event) {
    event.preventDefault()
    var value = $("#houseNo").val().trim();
    var value1 = $("#StreetName").val().trim();
    var value2 = $("#city").val().trim();
    var value3 = $("#state").val().trim();
    var value4 = $("#zipcode").val().trim();
    var allValues = (value + "%20" + value1 + "%20" + value2 + "%20" + value3 + "%20" + value4);
    electionInfo(allValues, value3);
    $("#addressDetail").hide();
    $(".jumbotron").hide();
})
