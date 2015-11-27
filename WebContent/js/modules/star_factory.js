shopApp.factory('StarFactory', function($sce) {
    var StarFactory = function(){};

    StarFactory.prototype.stars_html = function(item) {
        var string = '',
            full = '<i class="fa fa-star amber-text accent-4"></i>',
            half = '<i class="fa fa-star-half-o amber-text accent-4"></i>',
            star_o = '<i class="fa fa-star-o amber-text accent-4"></i>';

        if (item.rate_total > 0) {
            for (i = item.rate_total; i > 0; i--) {
                if (i > 0 && i < 1)
                    string += half;
                else if (i > 0)
                    string += full;
            }
        } else {
            for (i = 0; i < 5; i++)
                string += star_o;
        }

        return $sce.trustAsHtml(string);
    };

    return StarFactory;
});
