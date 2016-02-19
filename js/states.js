var app = angular.module('states', []);

app.controller('StatesController', ['$http', function($http) {

    this.states = [];
    var _this = this;

    $http.get('/js/contested.json')
        .success(function(data) {
            console.log(data);
            console.log(this);
            _this.states = data;
        })
        .error(function(msg) {
            console.log("This request failed.\n" + msg);
        });
        
}]);




