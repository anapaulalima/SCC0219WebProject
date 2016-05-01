//codigo baseado em http://someweblog.com/url-regular-expression-javascript-link-shortener/

String.prototype.parseURL = function() {
    var regex = /\$l:"(.+?)"/g;
    return this.replace(regex, '<a href="$1" target="_blank">$1</a>');
};

String.prototype.parseIMG = function() {
    var regex = /\$i:"(.+?)"/g;
    return this.replace(regex, '<a href="$1" target="_blank"><img src="$1" width="100px" /></a>');
};

String.prototype.parseVDO = function() {
    var regex = /\$v:"(.+?)"/g;
    return this.replace(regex, '<video src="$1" width="320" height="240" controls/>');
};

String.prototype.parseUsername = function() {
    return this.replace(/[@]+[A-Za-z0-9-_]+/g, function(u) {
        var username = u.replace("@","");
        return u.link("https://twitter.com/"+username); //backend
    });
};

String.prototype.parseHashtag = function() {
    return this.replace(/[#]+[A-Za-z0-9-_]+/g, function(t) {
        var tag = t.replace("#","%23");
        return t.link("https://twitter.com/search?q="+tag+"&src=hash"); //backend
    });
};

angular.module('correilegante-parser', []).filter('linkfy', ["$sce", function($sce) {
    return function(input) {
        console.log(input);
        return $sce.trustAsHtml(input.parseURL().parseUsername().parseHashtag().parseIMG().parseVDO());
    };
}]);