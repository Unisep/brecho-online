shopApp.controller("ControllerList", function($scope, $location, $sce, ProductFactory) {
    $scope.query = {};
    $scope.product = new ProductFactory();
    $scope.filters_list = angular.element(document.querySelector('.filters_list'));

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
            "images" : ["images/vestido1.jpg"],
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

    $scope.filters = [
        {
            name: 'Gênero',
            kind: 'genre',
            items: [
                {
                    id_caller: 'male',
                    id_chip: 'male_chip',
                    text: 'Masculino',
                    value: 'm'
                },
                {
                    id_caller: 'female',
                    id_chip: 'female_chip',
                    text: 'Feminino',
                    value: 'f'
                }
            ]
        },
        {
            name: 'Categorias',
            kind: 'category',
            items: [
                {
                    id_caller: 'r_filter',
                    id_chip: 'r_chip',
                    text: 'Roupas',
                    value: 'r'
                },
                {
                    id_caller: 's_filter',
                    id_chip: 's_chip',
                    text: 'Sapatos',
                    value: 's'
                },
                {
                    id_caller: 'a_filter',
                    id_chip: 'a_chip',
                    text: 'Acessórios',
                    value: 'a'
                }
            ]
        },
        {
            name: 'Reputação',
            kind: 'reputation',
            items: [
                {
                    id_caller: '5_filter',
                    id_chip: '5_chip',
                    text: '5 estrelas',
                    value: 5
                },
                {
                    id_caller: '4_filter',
                    id_chip: '4_chip',
                    text: '4 estrelas',
                    value: 4
                },
                {
                    id_caller: '3_filter',
                    id_chip: '3_chip',
                    text: '3 estrelas',
                    value: 3
                },
                {
                    id_caller: '2_filter',
                    id_chip: '2_chip',
                    text: '2 estrelas',
                    value: 2
                },
                {
                    id_caller: '1_filter',
                    id_chip: '1_chip',
                    text: '1 estrela',
                    value: 1
                }
            ]
        }
    ];

    $scope.addFilter = function(kind_index, index) {
        root = $scope.filters[kind_index];
        item = root.items[index];

        if ($.inArray(root.kind, Object.keys($scope.query)) >= 0){
            $(".filters_list div[name='" + root.kind + "']").map(function() {
                $scope.removeAllFilters(kind_index);
            });
        }

        $scope.filters_list.append("<div class='chip chip-pad' name='"+ root.kind +"' id='" + item.id_chip + "'>"
            + item.text +
            "<i class='material-icons' onclick='removeFilter(" + kind_index+ "," + index + ")'>close</i></div>");

        $("#" + item.id_caller).addClass('inactive-link');

        $scope.query[root.kind] = item.value;
    };

    $scope.removeFilter = function(kind_index, index) {
        root = $scope.filters[kind_index];
        item = root.items[index];

        $("#" + item.id_caller).removeClass('inactive-link');
        $("#" + item.id_chip).remove();

        delete $scope.query[root.kind];
    };

    $scope.removeAllFilters = function(kind_index) {
        root = $scope.filters[kind_index];

        root.items.forEach(function(item){
            $("#" + item.id_caller).removeClass('inactive-link');
            $("#" + item.id_chip).remove();
        });

        delete $scope.query[root.kind];
    };
});

function removeFilter(kind_index, index) {
    var scope = angular.element($('.filters_list')).scope();
        scope.$apply(function () {
            scope.removeFilter(kind_index, index);
        });
}
