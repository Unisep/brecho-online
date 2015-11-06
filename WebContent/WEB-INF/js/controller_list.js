shopApp.controller("ControllerList", function($scope, $location, $sce) {
    $scope.stars_html = function(item) {
        full = '<i class="fa fa-star amber-text accent-4"></i>';
        half = '<i class="fa fa-star-half-o amber-text accent-4"></i>'

        var string = '';

        for(i = item.rate_total; i > 0; i --){
            console.log(item.category.name + "  " + i);

            if (i > 0 && i < 1)
                string += half;
            else if (i > 0)
                string += full;
        }

        return $sce.trustAsHtml(string);
    };

    $scope.items = [
        // isso virá via requisição no web service
        {
            "images" : ["images/terno.png", "images/sapatos1.jpg", "images/gravata1.jpg"],
            "genre" : "masculino",
            "rate_total" : 4.5,
            "price" : 213.22,
            "category" : { "name" : "Terno, gravata e sapatos" },
            "owner" : { "name" : "Owner Name", "email": "owner@email.com", gender: "M" },
            "description": "Lorem ipsum dolor sit amet, eos homero animal vivendo id, te eam quod graecis referrentur, vis ex stet eruditi. " +
            "Ei unum sale impedit nam, te eius abhorreant sed. Utamur luptatum ea cum, assum homero expet"
        },
        {
            "images" : ["images/vestido1.jpg"],
            "genre" : "feminino",
            "rate_total" : 5,
            "price" : 55.19,
            "category" : { "name" : "Vestido de gala" },
            "owner" : { "name" : "Fulana de tal", "email": "fulaninha@email.com", gender: "F" },
            "description": "Lorem ipsum dolor sit amet, eos te eius abhorreant sed, homero animal vivendo id, te eam quod graecis referrentur, vis ex stet eruditi. " +
            "Ei unum sale impedit nam, te eius abhorreant sed. Utamur luptatum ea cum, assum homero te eius abhorreant sed expet"
        },
        {
            "images" : ["images/terno.png", "images/sapatos1.jpg", "images/gravata1.jpg"],
            "genre" : "masculino",
            "rate_total" : 3,
            "price" : 78.50,
            "category" : { "name" : "Outros" },
            "owner" : { "name" : "Owner Name", "email": "owner@email.com", gender: "M" },
            "description": "Lorem ipsum dolor sit amet, eos homero animal vivendo id, te eam quod graecis referrentur, vis ex stet eruditi. " +
            "Ei unum sale impedit nam, te eius abhorreant sed. Utamur luptatum ea cum, assum homero expet"
        }
    ]
});
