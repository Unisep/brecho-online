shopApp.controller("ShowProductController", function($scope, $location, $sce, StarFactory, CartService) {
    $scope.stars = new StarFactory();

    $scope.product = {
        id: 1,
        "images" : ["./images/terno-1.jpg", "./images/terno-2.jpg", "./images/terno.png"],
        "gender" : "masculino",
        "rate_total" : 4.5,
        "size" : '39-40',
        "price" : 79.99,
        "category" : { "name" : "Roupas" },
        "name" : "Terno apenas casaco",
        "owner" : { "name" : "Owner Name", "email": "owner@email.com", gender: "M" },
        "description": "Os ternos sob encomenda Brook’s Brothers custam aproximadamente US$ 14.500. E são produzidos de acordo com as dimensões únicas dos clientes que os vestem." +
        "Todos os ternos são personalizados segundo a exigência do cliente e tecidos extremamente finos são usados para produção destes ternos."
    };

    $scope.buy = function(){
        CartService.setItem($scope.product);
        Materialize.toast('Adicionado ao carrinho! <i style="margin-left: 10px" class="small green-text material-icons">done</i>', 4000);
        $scope.disableButton();
    };

    $scope.disableButton = function(){
        console.log(CartService.exists($scope.product.id));
        if (CartService.exists($scope.product.id)){
            $('#button-buy').addClass('disabled');
        } else{
            $('#button-buy').removeClass('disabled');
        }
    };
});
