shopApp.controller("ControllerList", function($scope, $location) {
    $scope.items = [
        {
            "images" : ["images/terno.png", "images/terno2.jpg", "images/terno3.jpg"],
            "genre" : "masculino",
            "rate_total" : 4.5,
            "price" : 213.22,
            "category" : { "name" : "Terno, gravata e sapatos" },
            "owner" : { "name" : "Owner Name", "email": "owner@email.com", gender: "M" },
            "description": "Lorem ipsum dolor sit amet, eos homero animal vivendo id, te eam quod graecis referrentur, vis ex stet eruditi. " +
                           "Ei unum sale impedit nam, te eius abhorreant sed. Utamur luptatum ea cum, assum homero expet"
        }
    ]
});
