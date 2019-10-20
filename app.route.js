angular.
    module('postsApp').
    config(['$routeProvider',
        function config($routeProvider) {
            $routeProvider.
                when('/posts', {
                    template: '<posts-list></posts-list>'
                }).
                when('/posts/:postId', {
                    template: '<post-item></post-item>'
                }).
                otherwise('/posts');
        }
    ]);