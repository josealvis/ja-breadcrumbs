(function () {
    'use strict';
    /*
    V.0.1.1
    Dependencias: 
    -Angular-JS-1.4 
    */

    angular
        .module('ja-breadcrumbs', [])
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
            var urlArray = [];         
           
            $scope.UriObjets = [];

            $scope.location = $location.absUrl();
            var url =  removeHost(getHost(),$scope.location);
            urlArray = url.split("/");
            urlArray = ValidateUrlString(urlArray);
          
           
       
            $scope.UriObjets = ConverToUriObjet(urlArray);
            
            ///

            function ConverToUriObjet(strArray) {
               
                var UrisObjets = [];
                var Uri ="/";

                for (var x = 0; x < strArray.length; x++) {  
                    Uri += strArray[x]+"/";
                    strArray[x] != '#' ? UrisObjets.push({uri: Uri, name: strArray[x]}): null;
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

           function removeHost(host, url){
           return  url.replace(host, "");
           }


            function getHost(){

              var hostUrl =  $location.protocol()+"://"+$location.host();
             if($location.port()!== 80){
               hostUrl += ":"+$location.port()+"/"
             }
               return hostUrl;

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
