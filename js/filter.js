
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
        return '<a href="/profile/'+username+'" ng-href="/profile/'+username+'">'+u+'</a>';
    });
};

String.prototype.parseGroupName = function() {
    return this.replace(/[%]+[A-Za-z0-9-_]+/g, function(u) {
        var groupname = u.replace("%","");
        return '<a href="/openGroup/'+groupname+'" ng-href="/openGroup/'+groupname+'">'+u+'</a>';
        });
};

String.prototype.parseHashtag = function() {
    return this.replace(/[#]+[A-Za-z0-9-_]+/g, function(t) {
        var tag = t.replace("#","");
        return '<a href="/search/'+tag+'" ng-href="/search/'+tag+'">'+t+'</a>'; 
    });
};

angular.module('correilegante-parser', []).filter('linkfy', ["$sce", function($sce) {
    return function(input) {
        if (input) {
          return $sce.trustAsHtml(input.parseURL().parseUsername().parseGroupName().parseHashtag().parseIMG().parseVDO());
        } 
        return "";
    };
}]);


//codigo copiado de https://github.com/angular-ui/ui-select/blob/master/docs/assets/demo.js
angular.module('correileganteApp').filter('propsFilter', function() {
  return function(items, props) {
    var out = [];

    if (angular.isArray(items)) {
      var keys = Object.keys(props);
        
      items.forEach(function(item) {
        var itemMatches = false;

        for (var i = 0; i < keys.length; i++) {
          var prop = keys[i];
          var text = props[prop].toLowerCase();
          if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
            itemMatches = true;
            break;
          }
        }

        if (itemMatches) {
          out.push(item);
        }
      });
    } else {
      // Let the output be the input untouched
      out = items;
    }

    return out;
  };
});