
var orderModule = angular.module('order', ['common'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/order', { templateUrl: '/AppJavascript/Order/Views/OrderHomeView.html', controller: 'orderHomeViewModel' });
        $routeProvider.when('/order/list', { templateUrl: '/AppJavascript/Order/Views/OrderListView.html', controller: 'orderListViewModel' });
        $routeProvider.when('/order/show/:orderId', { templateUrl: '/AppJavascript/Order/Views/OrderView.html', controller: 'orderViewModel' });
        $routeProvider.when('/order/detail/:orderId/:orderDetailId', { templateUrl: '/AppJavascript/Order/Views/OrderDetailView.html', controller: 'orderDetailViewModel' });
        $routeProvider.otherwise({ redirectTo: '/order' });
        $locationProvider.html5Mode(true);
    });

orderModule.factory('orderService', function ($rootScope, $http, $q, $location, viewModelHelper) { return MyApp.orderService($rootScope, $http, $q, $location, viewModelHelper); });

(function (myApp) {
    var orderService = function ($rootScope, $http, $q, $location, viewModelHelper) {

        var self = this;

        self.orderId = 0;

        return this;
    };
    myApp.orderService = orderService;
}(window.MyApp));
