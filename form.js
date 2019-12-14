
$(document).ready(function () {
    $("#frmSearch").submit(function (e) {
        e.preventDefault();
        let food = $("#txtQuery").val();
        findRecipe(food);
    });

    function findRecipe(food) {

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/videos/search?query=${food}&minLength=0&maxLength=999&offset=0&number=10`,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key": "28b07e21ccmsh9cf791b8dac4546p121d9fjsna67b0a0ef7c0",
            }
        }
       

        $.ajax(settings).done(function (response) {

            let newResponse = response['videos'][0]["youTubeId"];
            $("#frame").attr("src","https://www.youtube.com/embed/"+ newResponse);
        
        });
    }
});
