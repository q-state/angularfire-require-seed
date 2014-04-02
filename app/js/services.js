define(['angular', 'angularFire'], function(angular) {
   'use strict';

   /* Services */

   return angular.module('myApp.services', [
	   	'myApp.service.firebase', 
	   	'myApp.service.login', 
	   	'myApp.service.changeEmail'
	   	]);

      // put your services here!
      // .service('serviceName', ['dependency', function(dependency) {}]);

});

