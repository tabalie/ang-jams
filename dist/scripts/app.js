(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            //to display clean URLs to user without hashbang
            .html5Mode({
                enabled: true,
                requireBase: false
        });

        //to allow ui-view to load template associated with landing, collection, and album states
        $stateProvider
            .state('landing', {
                url: '/',
                templateURL: '/templates/landing.html'
            })

            .state('album', {
                url: '/album',
                templateURL: '/templates/album.html'
            })

            .state('collection', {
                url: '/collection',
                templateURL: '/templates/collection.html'
            });
    }

    angular
    .module('blocJams', ['ui.router'])
    .config(config);
})();
