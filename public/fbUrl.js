angular.module('app').constant('FirebaseUrl','https://expensetracker-fcddd.firebaseio.com')
    .service('rootRef', ['FirebaseUrl', Firebase]);