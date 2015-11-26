shopApp.controller("ShowProductController", function($scope, $location, $sce, StarFactory) {
    $scope.stars = new StarFactory();

    $scope.product = {
        "images" : ["images/terno.png", "images/sapatos1.jpg", "images/gravata1.jpg"],
        "genre" : "masculino",
        "rate_total" : 4.5,
        "price" : 213.22,
        "category" : { "name" : "Terno, gravata enf asjfjk asfkjs akjgfkasfjasj asgja sapatos" },
        "owner" : { "name" : "Owner Name", "email": "owner@email.com", gender: "M" },
        "description": "Lorem ipsum dolor sit amet, eos homero animal vivendo id, te eam quod graecis referrentur, vis ex stet eruditi. " +
        "Ei unum sale impedit nam, te eius abhorreant sed. Utamur luptatum ea cum, assum homero expet"
    };
});
