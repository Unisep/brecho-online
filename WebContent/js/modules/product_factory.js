// Product constructor function to encapsulate HTTP and pagination logic
shopApp.factory('ProductFactory', function($http) {
    var ProductFactory = function() {
        this.items = [];
        this.busy = false;
        this.after = '';
    };

    ProductFactory.prototype.nextPage = function() {
        if (this.busy) return;
        this.busy = true;

        var url = "ws/listProducts";// + this.after + "&jsonp=JSON_CALLBACK";
        $http.jsonp(url).success(function(data) {
            var items = data.data.children;
            for (var i = 0; i < items.length; i++) {
                this.items.push(items[i].data);
            }
            this.after = "t3_" + this.items[this.items.length - 1].id;
            this.busy = false;
        }.bind(this));
    };

    return ProductFactory;
});
