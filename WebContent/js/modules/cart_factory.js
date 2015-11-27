shopApp.service('CartService', function() {
    var basket = {
        items: [
            //{ images: ["./images/terno-1.jpg"], price: 23.99, name: 'Terno, apenas casaco.' },
            //{ images: ["./images/terno-2.jpg", "./images/terno.png"], price: 184.19, name: 'Outra coisa' }
        ]
    };

    return {
        getItems: function() {
            return basket.items;
        },
        getBasket: function() {
            return basket;
        },
        setItem: function(value) {
            basket.items.push(value);
        },
        exists: function(id){
            var result = $.grep(basket.items, function(e){ return e.id == id; });
            if (result.length == 1) return true;
        }
    };
});
