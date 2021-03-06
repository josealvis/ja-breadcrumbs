(function(){
	'use strict'
	angular.module('app', ['ui.router', 'ja-breadcrumbs']);

    angular
    .module('app')
	.config(config);

    function config($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/home");
        //
        // Now set up the states
        $stateProvider
          .state('hoem', {
              url: "/home",
              templateUrl: "pages/page1.html"
          })
         .state('page2', {
             url: "/page2",
             templateUrl: "pages/page2.html"
         })
         .state('contactos', {
             url: "/page2/contactos",
             templateUrl: "pages/page2.html"
         })
        ;
    }
	
	
	
})();