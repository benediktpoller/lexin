'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'LexinController'
        })
        .when('/aktuell', {
            templateUrl: 'views/aktuell/aktuell.html',
            controller: 'LexinController'
        })
        .when('/lexin', {
            templateUrl: 'views/lexin/lexin.html',
            controller: 'LexinController'
        })
        .when('/lexin/auxine', {
            templateUrl: 'views/lexin/lexin_auxine.html',
            controller: 'LexinController'
        })
        .when('/lexin/huminosaeuren', {
            templateUrl: 'views/lexin/lexin_huminosaeuren.html',
            controller: 'LexinController'
        })
        .when('/lexin/fulvosaeuren', {
            templateUrl: 'views/lexin/lexin_fulvosaeuren.html',
            controller: 'LexinController'
        })
        .when('/dosierung', {
            templateUrl: 'views/dosierung/dosierung.html',
            controller: 'LexinController'
        })
        .when('/downloads', {
            templateUrl: 'views/downloads/downloads.html',
            controller: 'LexinController'
        })
        .when('/kontakt', {
            templateUrl: 'views/kontakt/kontakt.html',
            controller: 'LexinController'
        })
        .when('/bestellen', {
            templateUrl: 'views/bestellen.html',
            controller: 'LexinController'
        })
        .when('/impressum', {
            templateUrl: 'views/impressum.html',
            controller: 'LexinController'
        })
        .when('/agb', {
            templateUrl: 'views/agb.html',
            controller: 'LexinController'
        });

}])

.controller('LexinController', ['$scope', '$http', function ($scope, $http) {

    angular.extend($scope, {
        resetContactForm: resetContactForm,
        submitContactForm: submitContactForm

    });

    resetContactForm();
    resetOrder();

    ///////////////////////

    function submitContactForm(ev) {

        ev.preventDefault();

        $http.post('http://formspree.io/benedikt.poller@gmail.com', $scope.contact)
            .success(function () {
                $scope.messageSent = true;
            });
    }

    function submitOrder() {
        $http.post('http://formspree.io/benedikt.poller@gmail.com', $scope.order)
            .success(function () {
                $scope.orderSent = true;
            });
    }

    function resetOrder() {
        $scope.order = {
            _subject: 'Lexin | Bestellung'
        };
        $scope.orderSent = false;
    }

    function resetContactForm() {
        $scope.contact = {
            _subject: 'Lexin | Kontaktformular'
        };
        $scope.messageSent = false;
    }

    // Slider
    $('.multiple-items').slick({
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
    });

}]);
