(function () {
    'use strict';
    /*
    V.0.1
    Dependencias: 
    -Angular-JS-1.4
    
    */

    angular
        .module('app')
        .directive('breadcrumbs', BreadCrumbs);

    function BreadCrumbs($window) {
        return {
     restrict: 'E',
     template: ' <ul class="{{class}}" ><li ><h5>{{text}}</a></h5></li> <li ng-repeat="uriObj in UriObjets"><a   href="{{uriObj.uri}}" > {{uriObj.name}}</a></li></ul> ',
            controller: ['$scope', '$location', Controller],
            link: LinkFunction,
        }

        function Controller($scope, $location) {
            //...........

            console.log($location.url());
            var urlArray = [];
           
           
            $scope.UriObjets = [];
            $scope.location = $location.url();// window.location.pathname;
            urlArray = $scope.location.split("/");
            urlArray = ValidateUrlString(urlArray);
          
           
       
                 $scope.UriObjets = ConverToUriObjet(urlArray);
            
            ///

            function ConverToUriObjet(strArray) {
                var UrisObjets = [];
                var Uri ="/";

                for (var x = 0; x < strArray.length; x++) {  
                    Uri += strArray[x]+"/";
                    UrisObjets.push({uri: Uri, name: strArray[x]});
                }
                return UrisObjets;
            }

            function ValidateUrlString(strArray) {
              

                for (var x = 0; x < strArray.length; x++) {  
                    if (strArray[x] == "") {         
                        strArray.splice(x, 1);
                    }
                }
                return strArray;
            }

        }

        function LinkFunction(scope, element, attrs) {
            //...........
		
            scope.text = attrs.text;
            scope.id = attrs.crumbsId;
			scope.class = attrs.crumbsClass;
        }

    }
})();
