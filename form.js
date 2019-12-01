$(document).ready(function () {
    // $("#loading").hide();
    $("#frmSearch").submit(function (e) {
        e.preventDefault();
        var i = 0;
        let query = $ ("#txtQuery").val();
        findRecipe(query);
        // var alertMsg = "";
        // alertMsg += $("#meat").val();
        // alert(alertMsg); //What is this and how does it work?
        // console.log(alertMsg)
        // })
    });

    $(document).on("click", "a", function () {
        console.log($(this).data("Recipes"));

        var Recipes = $(this).data("Recipes");

    });



    function findRecipe(query) { 
        console.log("finding");
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/site/search?query=" + query,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key": "28b07e21ccmsh9cf791b8dac4546p121d9fjsna67b0a0ef7c0",
            },
            // "beforeSend": function(xhr) {
            //     // UI changes before the ajax request query is sent
            //     $("#loading").show();
            // 
        }

        $.ajax(settings)
        .done(function () {
            console.log ("you");
            // // reverse back UI changes
            // $("#loading").hide();
            // console.log(response)

            let responseSummary = ""; //define the variable

            for (var i = 0; i < response.length; i++) { //loop through the entire function
                var obj = response[i];
            responseSummary += "<img src='" + response [i]["image"] + "' width='200' height='200'>"; 


            //     // responseSummary += response[i]["name"];
            //     // console.log(response[i]["originalame"]);
            //     // responseSummary += "<img src='" + response[i] ["youTubeId"] + "' width='200' height='200'>"; 
            //     // responseSummary += "<video src='" + response[i] ["youTubeId"] + "' "; 

            //     //responseSummary +=  response[i] ["thumbnail"] ; 
            responseSummary += response[i]["name"] ; //include keys
            //             }
            $("#response").html(responseSummary); //results in html
        
            }

        });

    }
});

