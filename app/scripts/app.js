(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            //to display clean URLs to user without hashbang
            .html5Mode({
                enabled: true,
                requireBase: false
        });

        //to allow ui-view to load template associated with landing and album states
        $stateProvider
            .state('landing', {
                url: '/',
                templateURL: '/templates/landing.html'
            })

            .state('album', {
                url: '/album',
                templateURL: '/templates/album.html'
            });
    }

    angular
    .module('blocJams', ['ui.router'])
    .config(config);
})();
