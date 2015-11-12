shopApp.controller("ControllerList", function($scope, $location, $sce) {
    $scope.stars_html = function(item) {
        var string = '';

        if (item.rate_total > 0) {
            full = '<i class="fa fa-star amber-text accent-4"></i>';
            half = '<i class="fa fa-star-half-o amber-text accent-4"></i>'

            for (i = item.rate_total; i > 0; i--) {
                if (i > 0 && i < 1)
                    string += half;
                else if (i > 0)
                    string += full;
            }
        }else{
            star_o = '<i class="fa fa-star-o amber-text accent-4"></i>'

            for (i = 0; i < 5; i++) {
                string += star_o;
            }
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
            "category" : { "name" : "Terno, gravata enf asjfjk asfkjs akjgfkasfjasj asgja sapatos" },
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
        },
        {
            "images" : ["images/sapatos1.jpg"],
            "genre" : "feminino",
            "rate_total" : 0,
            "price" : 55.19,
            "category" : { "name" : "Sapato Social n° 42" },
            "owner" : { "name" : "Fulana de tal", "email": "fulaninha@email.com", gender: "F" },
            "description": "Lorem ipsum dolor sit amet, eos te eius abhorreant sed, homero animal vivendo id, te eam quod graecis referrentur, vis ex stet eruditi. " +
            "Ei unum sale impedit nam, te eius abhorreant sed. Utamur luptatum ea cum, assum homero te eius abhorreant sed expet"
        },
        {
            "images" : ["images/sapatos1.jpg"],
            "genre" : "feminino",
            "rate_total" : 0,
            "price" : 55.19,
            "category" : { "name" : "Sapato Social n° 42" },
            "owner" : { "name" : "Fulana de tal", "email": "fulaninha@email.com", gender: "F" },
            "description": "Lorem ipsum dolor sit amet, eos te eius abhorreant sed, homero animal vivendo id, te eam quod graecis referrentur, vis ex stet eruditi. " +
            "Ei unum sale impedit nam, te eius abhorreant sed. Utamur luptatum ea cum, assum homero te eius abhorreant sed expet"
        },
        {
            "images" : ["images/sapatos1.jpg"],
            "genre" : "feminino",
            "rate_total" : 0,
            "price" : 55.19,
            "category" : { "name" : "Sapato Social n° 42" },
            "owner" : { "name" : "Fulana de tal", "email": "fulaninha@email.com", gender: "F" },
            "description": "Lorem ipsum dolor sit amet, eos te eius abhorreant sed, homero animal vivendo id, te eam quod graecis referrentur, vis ex stet eruditi. " +
            "Ei unum sale impedit nam, te eius abhorreant sed. Utamur luptatum ea cum, assum homero te eius abhorreant sed expet"
        }
    ];

    $scope.addFilter = function(item, id) {
        var list = angular.element(document.querySelector('.filters_list'));
        list.append("<div class='chip chip-pad' id='" + item + "'>" + item +
            "<i class='material-icons' onclick='removeFilter(\"" + id + "\")'>close</i></div>");
        $("#" + id).addClass('inactive-link');
    };

    $scope.removeFilter = function(id) {
        $("#" + id).removeClass('inactive-link');
    };
});

function removeFilter(id) {
    var scope = angular.element($('.filters_list')).scope();
        scope.$apply(function () {
            scope.removeFilter(id);
        });
}
