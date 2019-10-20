angular.
    module('postsApp').
    component('postItem', {
        templateUrl: 'app/post-item/post-item.html',
        controller: ['$routeParams', '$http',
            function PostItemController($routeParams, $http) {
                const self = this;
                self.postId = $routeParams.postId;

                self.$onInit = () => {

                    $http.get('https://jsonplaceholder.typicode.com/posts/'+self.postId).then(function(response) {
                        self.postDetail = response.data;
                    });
                };
            }
        ]
    });