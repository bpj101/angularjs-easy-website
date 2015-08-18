var app = angular.module("computer", ['ngRoute']);

app.config(["$routeProvider",
  function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'main.html',
        controller: 'MainController'
      })
      .when('/about', {
        templateUrl: 'about.html',
        controller: 'MainController'
      })
      .when('/services', {
        templateUrl: 'services.html',
        controller: 'ServicesController'
      })
      .when('/contact', {
        templateUrl: 'contact.html',
        controller: 'ContactController'
      })
      .otherwise({
        redirectTo: '/main'
      });
  }
])
  .service('getServices', ['$http',
    function ($http) {
      this.theservices = function () {
        return $http.get('services.json');
      };
    }
  ])

.service('getLocations', ['$http',
  function ($http) {
    this.thelocations = function () {
      return $http.get('locations.json');
    };
  }
])

.controller('MainController', ['$scope', 'getServices',
  function ($scope, getServices) {
    getServices.theservices().then(function (response) {
      $scope.services = response.data;
    });
  }
])

.controller('ServicesController', ['$scope', 'getServices',
  function ($scope, getServices) {
    getServices.theservices().then(function (response) {
      $scope.services = response.data;
    });
  }
])

.controller('ContactController', ['$scope', 'getLocations',
  function ($scope, getLocations) {
    getLocations.thelocations().then(function (response) {
      $scope.locations = response.data;
    });
  }
]);