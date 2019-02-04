var app = angular.module("facebookLoginApp", ['ngRoute']);
app.config([
    '$qProvider', function($qProvider) {
        $qProvider.errorOnUnhandledRejections(false);
    }
]);